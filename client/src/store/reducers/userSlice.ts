import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../rtk-query/userApi";

const initialState = {
  loggedIn: false,
  userData: undefined,
  accessToken: undefined,
  refreshToken: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const data = action.payload;

      console.log("data is ", data);

      state.loggedIn = true;
      state.accessToken = data.accessToken;
      state.refreshToken = data.refreshToken;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
    updateToken: (state, action) => {
      const data = action.payload;

      state.accessToken = data.accessToken;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.loggedIn = true;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess, logout, updateToken } = userSlice.actions;

export default userSlice.reducer;
