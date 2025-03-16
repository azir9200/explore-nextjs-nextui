import { baseApi } from "./baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBook: build.mutation({
      query: (data) => ({
        url: "/book",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
    }),

    getAllBook: build.query({
      query: () => ({
        url: "/book",
        method: "GET",
      }),
    }),

    deleteBook: build.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetAllBookQuery,
  useDeleteBookMutation,
} = bookApi;
