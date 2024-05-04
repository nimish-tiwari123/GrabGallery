import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authentication = createApi({
  reducerPath: "authentication",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fashion-store-backend-tau.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/user/register/",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = authentication;
