import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./customBaseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    "Patient",
    "Appointment",
    "Profile",
    "Billing",
    "Visit",
    "LabTests",
    "Users",
    "Roles",
    "Services",
  ],
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => {
        return {
          url: "auth/me",
          method: "GET",
        };
      },
      providesTags: ["Profile"],
    }),
    updateMyProfile: builder.mutation({
      query: ({ userId, body }) => {
        return {
          url: `user/${userId}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Profile", "Users"],
    }),
    getAllUsers: builder.query({
      query: ({ headers, queryParams }) => {
        return {
          url: "user",
          method: "GET",
          params: { ...queryParams },
          headers: { ...headers },
        };
      },
      providesTags: ["Users"],
    }),
    getUserById: builder.query({
      query: ({ userId }) => {
        return {
          url: `user/${userId}`,
          method: "GET",
        };
      },
    }),
    forgotPassword: builder.mutation({
      query: (body) => {
        return {
          url: `auth/forgot-password`,
          method: "POST",
          body,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (body) => {
        return {
          url: `auth/reset-password`,
          method: "POST",
          body,
        };
      },
    }),
    // admin apis
    addUser: builder.mutation({
      query: (body) => {
        return {
          url: `user/setup`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Users"],
    }),
    resetUserPasswordById: builder.mutation({
      query: ({ body, userId }) => {
        return {
          url: `admin/user/password/reset/${userId}`,
          method: "POST",
          body,
        };
      },
    }),
    editUserById: builder.mutation({
      query: ({ userId, body }) => {
        return {
          url: `admin/user/edit/${userId}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Users"],
    }),
    deactivateUserById: builder.mutation({
      query: ({ userId }) => {
        return {
          url: `user/deactivate/${userId}`,
          method: "POST",
        };
      },
      invalidatesTags: ["Users"],
    }),
    login: builder.mutation({
      query: (body) => {
        return {
          url: "auth/login",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useLoginMutation,
  useUpdateMyProfileMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetMyProfileQuery,
  useAddUserMutation,
  useEditUserByIdMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useDeactivateUserByIdMutation,
  useResetUserPasswordByIdMutation,
} = userApi;
