import {api} from "../../api/apiSlice";

export const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (queryString) => ({
        url: `/books?${queryString}`,
        method: "GET",
        // body: data,
      }),
    }),
    getSingleBook: builder.query({
      query: ({id}) => ({
        url: `/books/${id}`,
        method: "GET",
        // body: data,
      }),
    }),
    updateBook: builder.mutation({
      query: ({id, data}) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data?.bookData,
      }),
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
    }),
    addReview: builder.mutation({
      query: ({id, data}) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {useGetBooksQuery, useAddBookMutation, useDeleteBookMutation, useUpdateBookMutation, useGetSingleBookQuery, useAddReviewMutation} = bookApi;
