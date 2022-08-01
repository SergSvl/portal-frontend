import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { homeApi } from './home/homeApi';
import homeReducer from "@/store/home/homeSlice";

const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    home: homeReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(homeApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
