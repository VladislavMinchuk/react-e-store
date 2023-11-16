import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL_API } from '../constans';
import { IPaginationRequest, IProductItem } from '../interfaces';

export const productDetailsApi = createApi({
  reducerPath: 'productDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL_API}/products` }),
  endpoints: (builder) => ({
    getProductList: builder.query<IProductItem[], IPaginationRequest>({
      query: ({ page, perPage }) => ({
        url: '/',
        params: { page, perPage }
      }),
    }),
  }),
});

export const { useGetProductListQuery } = productDetailsApi;
