import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/user/' }),
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: 'all/',
        headers: { 'content-type': 'application/json' },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Users', id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),
    getCurrentUser: build.query({
      query: ({ access_token }) => ({
        url: ``,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
      providesTags: (result, error) => [{ type: 'Post', id: 'LIST' }],
    }),
    updateCurrentUser: build.mutation({
      query: ({ editUserForm, currentUser, access_token }) => ({
        url: ``,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: {
          role: 'user',
          email: currentUser.email,
          name: editUserForm.name,
          surname: editUserForm.lastName,
          phone: editUserForm.phone,
          city: editUserForm.city,
        },
      }),
      invalidatesTags: (result, error) => [{ type: 'Users', id: 'LIST' }],
    }),
    updateAvatar: build.mutation({
      query: ({ avatar, access_token }) => ({
        url: 'avatar/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: avatar,
        formData: true,
      }),
      invalidatesTags: (result, error) => [{ type: 'Users', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useLazyGetCurrentUserQuery,
  useUpdateCurrentUserMutation,
  useLazyGetAllUsersQuery,
  useUpdateAvatarMutation,
} = usersApi;
