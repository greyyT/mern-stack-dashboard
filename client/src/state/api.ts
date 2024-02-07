import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL as string }),
  reducerPath: 'adminApi',
  tagTypes: ['User'],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id: string) => `genral/user/${id}`,
      providesTags: ['User'],
    }),
  }),
});
