import { ProductWithStats, Transactions, UserProfile } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL as string }),
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Products', 'Customers', 'Transactions'],
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
    getCustomers: build.query({
      query: () => 'client/customers',
      providesTags: ['Customers'],
      transformResponse: (res: UserProfile[]) => {
        return res;
      },
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: 'client/transactions',
        method: 'GET',
        params: { page, pageSize, sort, search },
      }),
      providesTags: ['Transactions'],
      transformResponse: (res: Transactions) => {
        return res;
      },
    }),
  }),
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery, useGetTransactionsQuery } = api;
