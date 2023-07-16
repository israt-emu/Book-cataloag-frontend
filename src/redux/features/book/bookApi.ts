import {api} from "../../api/apiSlice";

export const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (queryString) => ({
        url: `/books?${queryString}`,
        method: "GET",
        // body: data,
      }),
      providesTags: ["Books"],
    }),
    getSingleBook: builder.query({
      query: ({id}) => ({
        url: `/books/${id}`,
        method: "GET",
        // body: data,
      }),
      providesTags: ["singleBook"],
    }),
    updateBook: builder.mutation({
      query: ({id, data}) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Books", "singleBook"],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    addReview: builder.mutation({
      query: ({id, data}) => ({
        url: `/books/addReview/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Books", "singleBook"],
    }),
  }),
});

export const {useGetBooksQuery, useAddBookMutation, useDeleteBookMutation, useUpdateBookMutation, useGetSingleBookQuery, useAddReviewMutation} = bookApi;
