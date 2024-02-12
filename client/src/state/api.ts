import { Dashboard, ProductWithStats, Sales, Transactions, UserPerformance, UserProfile } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL as string }),
  reducerPath: 'adminApi',
  tagTypes: [
    'User',
    'Products',
    'Customers',
    'Transactions',
    'Geography',
    'Sales',
    'Admins',
    'Performance',
    'Dashboard',
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id: string) => `general/user/${id}`,
      providesTags: ['User'],
      transformResponse: (res: UserProfile) => res,
    }),
    getProducts: build.query({
      query: () => 'client/products',
      providesTags: ['Products'],
      transformResponse: (res: ProductWithStats[]) => res,
    }),
    getCustomers: build.query({
      query: () => 'client/customers',
      providesTags: ['Customers'],
      transformResponse: (res: UserProfile[]) => res,
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: 'client/transactions',
        method: 'GET',
        params: { page, pageSize, sort, search },
      }),
      providesTags: ['Transactions'],
      transformResponse: (res: Transactions) => res,
    }),
    getGeography: build.query({
      query: () => 'client/geography',
      providesTags: ['Geography'],
    }),
    getSales: build.query({
      query: () => 'sales/sales',
      providesTags: ['Sales'],
      transformResponse: (res: Sales) => res,
    }),
    getAdmins: build.query({
      query: () => 'management/admins',
      providesTags: ['Admins'],
      transformResponse: (res: UserProfile[]) => res,
    }),
    getUserPerformance: build.query({
      query: (id: string) => `management/performance/${id}`,
      providesTags: ['Performance'],
      transformResponse: (res: UserPerformance) => res,
    }),
    getDashboard: build.query({
      query: () => 'general/dashboard',
      providesTags: ['Dashboard'],
      transformResponse: (res: Dashboard) => res,
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
