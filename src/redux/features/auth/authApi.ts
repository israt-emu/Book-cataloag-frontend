import {api} from "../../api/apiSlice";
import {userLoggedIn} from "./authSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        body: data,
        method: "POST",
      }),
      async onQueryStarted(arg, {queryFulfilled, dispatch}) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result?.data?.data.accessToken,
            })
          );
          dispatch(
            userLoggedIn({
              token: result?.data?.data.accessToken,
            })
          );
        } catch (err) {
          //nothing to do
          console.log(err);
        }
      },
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useLoginMutation, useSignUpMutation} = authApi;
