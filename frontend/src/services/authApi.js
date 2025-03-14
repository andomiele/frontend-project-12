import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ROUT_LOGIN, ROUT_SIGNUP, getRoute } from './apiConfig';

export const usersApi = createApi({
  reducerPath: 'login',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: getRoute(ROUT_LOGIN),
        method: 'POST',
        body: user,
      }),
    }),
    signup: builder.mutation({
      query: (user) => ({
        url: getRoute(ROUT_SIGNUP),
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
} = usersApi;
