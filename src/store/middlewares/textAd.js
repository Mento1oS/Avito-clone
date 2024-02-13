import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const textAdsApi = createApi({
  reducerPath: 'textAdsApi',
  tagTypes: ['TextAds'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/adstext/' }),
  endpoints: (build) => ({
    addNonImgAd: build.mutation({
      query: ({ addAdForm, access_token }) => ({
        url: '',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: {
          title: addAdForm.title,
          description: addAdForm.description,
          price: addAdForm.price,
        },
      }),
      invalidatesTags: [{ type: 'Auth', id: 'LIST' }],
    }),
  }),
});

export const { useAddNonImgAdMutation } = textAdsApi;
