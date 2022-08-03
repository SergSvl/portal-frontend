import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, ILogin, IConfigResponseData, IConfigRequestData } from '@/types';
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
      transformResponse: (response: any) => {
        return response.data;
      }
    }),
  })
});

/*
table config: {
  "subdomain":"portal.baltalm.ru",
  "baseUrl":["portal.baltalm.ru"],
  "orderList":["021-02708","007-01912","05708","12345"],
  "telegram":[{
    "telegram_token":"1269523575:AAFQCaWbvkp2TXdeDiY-LEDqFWXZtGhsF-0","telegram_chat_id":"-1001421968910"
  }],
  "telegramLinks":[
    "t.me","t-do.ru","t.elegram.ru","teleg.run","tele.click","tg.telepult.pro"
  ]}

    const reqConfigOther = {
      tableName: 'config', // обязательный параметр
      tokenName: '',
      where: '{}',
    }
    const reqConfigRights = { ...reqConfigOther }
    reqConfigRights.tableName = 'tasks'

    // console.log('>> Library loadConfig > getConfigOther: ', reqConfigOther)
    // console.log('>> Library loadConfig > getConfigRights: ', reqConfigRights)

    // console.log('>> Library loadConfig > store.getters.baseUrlApi = ', store.getters.baseUrlApi)
    
    const respConfigOther = await read(reqConfigOther)
    // console.log('>> Library loadConfig > respConfigOther: ', respConfigOther)
    const respConfigRights = await read(reqConfigRights)
    // console.log('>> Library loadConfig > respConfigRights: ', respConfigRights)
    const fullConfig = JSON.parse(respConfigOther.result.get[0].global_config)
    const configRights = respConfigRights.result.get*/

export const { useLoginMutation, useGetRightsMutation } = homeApi;
