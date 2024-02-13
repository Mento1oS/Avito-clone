import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const imagesApi = createApi({
  reducerPath: 'imagesApi',
  tagTypes: ['Images'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/images/' }),
  endpoints: (build) => ({
    getAllImages: build.query({
      query: () => ({
        url: '',
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
  }),
});

export const { useGetAllImagesQuery, useLazyGetAllImagesQuery } = imagesApi;
