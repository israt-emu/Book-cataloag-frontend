import {api} from "../../api/apiSlice";

const readlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReadlist: builder.query({
      query: (id) => ({
        url: `/read-list/${id}`,
      }),
      providesTags: ["readlist"],
    }),

    addToReadlist: builder.mutation({
      query: (data) => ({
        url: `/read-list`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["readlist"],
    }),
  }),
});

export const {useAddToReadlistMutation, useGetReadlistQuery} = readlistApi;
