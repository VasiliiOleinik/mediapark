import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';;

const API = process.env.REACT_APP_UNSPLASH_API;
const KEY = process.env.REACT_APP_ACCESS_KEY;

export const unsplashApi = createApi({
  reducerPath: 'unsplash/api',
  baseQuery: fetchBaseQuery({
    baseUrl: API
  }),
  endpoints: build => ({
    searchImages: build.query<any, string>({
      query: (search: string) => ({
        url: `/search/photos/?client_id=${KEY}`,
        params: {
          query: search,
          per_page: 10
        }
      })
    })
  })
});

export const { useSearchImagesQuery } = unsplashApi;

