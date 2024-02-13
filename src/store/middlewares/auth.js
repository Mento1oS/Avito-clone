import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/auth/' }),
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (user) => ({
        url: `register/`,
        method: 'POST',
        body: {
          password: user.password,
          role: 'user',
          email: user.eMail,
          name: user.name,
          surname: user.lastName,
          phone: '',
          city: user.city,
        },
      }),
      invalidatesTags: [{ type: 'Auth', id: 'LIST' }],
    }),
    logIn: build.mutation({
      query: ({ email, password }) => ({
        url: `login/`,
        method: 'POST',
        body: {
          email: email,
          password: password,
        },
      }),
      invalidatesTags: [{ type: 'Auth', id: 'LIST' }],
    }),
    refreshToken: build.mutation({
      query: ({ access_token, refresh_token }) => ({
        url: `login/`,
        method: 'PUT',
        body: {
          access_token: access_token,
          refresh_token: refresh_token,
        },
      }),
      invalidatesTags: (result, error) => [{ type: 'Auth', id: 'LIST' }],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLogInMutation,
  useRefreshTokenMutation,
} = authApi;
