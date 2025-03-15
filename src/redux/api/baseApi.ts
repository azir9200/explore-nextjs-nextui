import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1`,

    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      //   const token = (getState() as RootState).user.token;

      //   if (token) {
      //     headers.set("authorization", `${token}`);
      //   }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
