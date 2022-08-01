import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '@/models/IUser';
import { ILogin } from '@/types';
import { createFormData } from '@/utils/helpers/form-data';
import { getLSData, setLSData } from '@/utils/helpers/local-storage-helpers';
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
        return response.data;
      }
    }),
  })
});

export const { useLoginMutation } = homeApi;
