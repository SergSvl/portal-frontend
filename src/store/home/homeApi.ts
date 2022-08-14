import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, ILogin, IConfigResponseData, IConfigRequestData, IRightsResponse } from '@/types';
import { createFormData } from '@/utils/helpers/form-data';
import { setLSData, getLSData } from '@/utils/helpers/local-storage-helpers';
import { LOCAL_STORAGE_KEYS } from "@/utils/local-storage-keys";

export const homeApi = createApi({
  reducerPath: 'home/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: build => ({

    login: build.mutation<IUser, ILogin>({
      query: (body: ILogin) => {
        body.tokenName = process.env.REACT_APP_TOKEN_NAME;
        const formData = createFormData(body);
        return {
          url: `login`,
          method: 'POST',
          body: formData,
        }
      },
      transformResponse: (response: any) => {
        setLSData(LOCAL_STORAGE_KEYS.token, response.data.token);
        setLSData(LOCAL_STORAGE_KEYS.isAuth, true);
        return response.data;
      }
    }),

    getRights: build.mutation<IConfigResponseData, void>({
      query: () => {
        const configRequestData: IConfigRequestData = {
          tableName: 'tasks',
          tokenName: '',
          where: '{}',
        };
        const header: { Authorization: string; } = {
          Authorization: '0'
        };

        return {
          url: 'view',
          method: 'GET',
          headers: header,
          params: configRequestData,
        }
      },
      transformResponse: (response: IRightsResponse) => {
        // console.log('getRights response.data:', response.data);
        return response.data;
      }
    }),

    getUser: build.mutation<IUser, void>({
      query: () => {
        const header: { Authorization: string; } = {
          Authorization: getLSData(LOCAL_STORAGE_KEYS.token)
        };

        return {
          url: 'user',
          method: 'GET',
          headers: header,
        }
      },
      transformResponse: (response: { data: IUser }) => response.data,
      
      // invalidatesTags: (result, error, id) => {
      //   console.log('invalidatesTags:', { result, error, id });
      //   return [{ type: 'Posts', id }];
      // },
      // async onQueryStarted(
      //   arg,
      //   { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      // ) {
      //   console.log('onQueryStarted:', { queryFulfilled, requestId, extra });
      // },
      // async onCacheEntryAdded(
      //   arg,
      //   {
      //     dispatch,
      //     getState,
      //     extra,
      //     requestId,
      //     cacheEntryRemoved,
      //     cacheDataLoaded,
      //     getCacheEntry,
      //   }
      // ) {
      //   console.log('onCacheEntryAdded:', { getState, requestId, extra, cacheDataLoaded });
      // },
    }),
  })
});

export const { useLoginMutation, useGetRightsMutation, useGetUserMutation } = homeApi;
