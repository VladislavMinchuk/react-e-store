import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL_API } from '../constans';
import { IProductItem } from '../interfaces';

export const productDetailsApi = createApi({
  reducerPath: 'productDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL_API}/products` }),
  endpoints: (builder) => ({
    getProductByID: builder.query<IProductItem, number>({
      query: (id) => ({
        url: `/${id}`,
        validateStatus: (response, body) => {
          console.log(response, body);
          return true;
        },
      }),
      // transformResponse(res) {},
      // transformErrorResponse(errorObj, meta, productId) {},
    }),
  }),
});

export const { useGetProductByIDQuery } = productDetailsApi;
