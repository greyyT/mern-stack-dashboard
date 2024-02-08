import { ProductWithStats, UserProfile } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL as string }),
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Products'],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id: string) => `general/user/${id}`,
      providesTags: ['User'],
      transformResponse: (res: UserProfile) => {
        return res;
      },
    }),
    getProducts: build.query({
      query: () => 'client/products',
      providesTags: ['Products'],
      transformResponse: (res: ProductWithStats[]) => {
        return res;
      },
    }),
  }),
});

export const { useGetUserQuery, useGetProductsQuery } = api;
