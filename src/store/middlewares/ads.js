import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adsApi = createApi({
  reducerPath: 'adsApi',
  tagTypes: ['Ads'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/ads/' }),
  endpoints: (build) => ({
    getAllAds: build.query({
      query: () => ({
        url: '',
        headers: { 'content-type': 'application/json' },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Ads', id })),
              { type: 'Ads', id: 'LIST' },
            ]
          : [{ type: 'Ads', id: 'LIST' }],
    }),
    getMyAds: build.query({
      query: ({ access_token }) => ({
        url: 'me/',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Ads', id })),
              { type: 'Ads', id: 'LIST' },
            ]
          : [{ type: 'Ads', id: 'LIST' }],
    }),
    getCommentsByAdId: build.query({
      query: ({ id }) => ({
        url: `${id}/comments/`,
        headers: { 'content-type': 'application/json' },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Ads', id })),
              { type: 'Ads', id: 'LIST' },
            ]
          : [{ type: 'Ads', id: 'LIST' }],
    }),
    addComment: build.mutation({
      query: ({ id, access_token, text }) => ({
        url: `${id}/comments/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: {
          text: text,
        },
      }),
      invalidatesTags: [{ type: 'Ads', id: 'LIST' }],
    }),
    deleteAd: build.mutation({
      query: ({ id, access_token }) => ({
        url: `${id}/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
      invalidatesTags: [{ type: 'Ads', id: 'LIST' }],
    }),
    updateCurrentAd: build.mutation({
      query: ({ editAdForm, id, access_token }) => ({
        url: `${id}/`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: {
          title: editAdForm.title,
          description: editAdForm.description,
          price: editAdForm.price,
        },
      }),
      invalidatesTags: (result, error) => [{ type: 'Ads', id: 'LIST' }],
    }),
    addAdPicture: build.mutation({
      query: ({ picture, access_token, id }) => ({
        url: `${id}/image/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: picture,
        formData: true,
      }),
      invalidatesTags: (result, error) => [{ type: 'Ads', id: 'LIST' }],
    }),
    deleteAdPicture: build.mutation({
      query: ({ id, access_token, file_url }) => ({
        url: `${id}/image/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        params: {
          file_url,
        },
      }),
      invalidatesTags: [{ type: 'Ads', id: 'LIST' }],
    })
  }),
});

export const {
  useGetCommentsByAdIdQuery,
  useGetAllAdsQuery,
  useLazyGetAllAdsQuery,
  useLazyGetMyAdsQuery,
  useLazyGetCommentsByAdIdQuery,
  useAddCommentMutation,
  useDeleteAdMutation,
  useUpdateCurrentAdMutation,
  useAddAdPictureMutation,
  useDeleteAdPictureMutation,
} = adsApi;
