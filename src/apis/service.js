import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authentication = createApi({
  reducerPath: "authentication",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://192.168.1.84:8000/api/v1",
    baseUrl:"https://fashion-store-backend-tau.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/user/register/",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (userVerify) => ({
        url: "/user/login/",
        method: "POST",
        body: userVerify,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (userEmail) => ({
        url: "/user/forgot-password/",
        method: "POST",
        body: userEmail,
      }),
    }),
    createPassword: builder.mutation({
      query: (userData) => ({
        url: "/user/create-password/",
        method: "POST",
        body: userData,
      }),
    }),
    otpVerfication: builder.mutation({
      query: (body) => ({
        url: "/user/verify-otp/",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation, useForgotPasswordMutation, useCreatePasswordMutation, useOtpVerficationMutation } = authentication;
