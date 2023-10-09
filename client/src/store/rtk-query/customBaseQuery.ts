// @ts-nocheck
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { updateToken } from "../reducers/userSlice";

const BASE_URL = "http://localhost:5000/";


const logoutSuccess = () => {
  return {
    type: "user/logout",
  };
};

const getRefreshToken = async (refreshToken: string) => {
  const data = {
    refreshToken,
  };
  let res = await axios
    .post(`${BASE_URL}auth/refresh`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);

  console.log("data ", data);
  console.log("getRefreshToken res ", res);

  if (res?.accessToken) {
    return res;
  }
};

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const userState = getState().user;
    const accessToken = userState?.accessToken;

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  const { dispatch, getState } = api;

  // const accessToken = getState().user?.accessToken;
  // console.log("accessToken ", accessToken);

  const isTokenExpired =
    result.error &&
    result.error.status === 401 &&
    result.error?.data?.message != "Not Enough Permission";

  // console.log("result.error?.data ", result.error?.data);

  if (isTokenExpired) {
    const refToken = getState().user?.refreshToken;
    const accessToken = (await getRefreshToken(refToken))?.accessToken;

    if (accessToken) {
      dispatch(
        updateToken({
          accessToken: accessToken,
        })
      );

      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      dispatch(logoutSuccess());
    }
  }
  return result;
};
