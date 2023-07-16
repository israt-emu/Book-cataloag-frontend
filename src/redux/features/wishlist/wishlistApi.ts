import {api} from "../../api/apiSlice";

export const wishListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishLists: builder.query({
      query: (userId) => ({
        url: `/wish-list/${userId}`,
        method: "GET",
        // body: data,
      }),
      providesTags: ["Wish"],
    }),

    addWishList: builder.mutation({
      query: (data) => ({
        url: `/wish-list`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Wish"],
    }),
  }),
});

export const {useAddWishListMutation, useGetWishListsQuery} = wishListApi;
