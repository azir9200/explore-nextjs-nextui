import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://golden-book-store-6mgeqfxqw-azir-uddins-projects.vercel.app/api/v1",
    // baseUrl: "http://localhost:5000/api/v1",

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
