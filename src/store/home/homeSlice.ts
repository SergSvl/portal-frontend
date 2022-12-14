import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { IUser } from '@/types';
import { setLSData, deleteLSData } from '@/utils/helpers/local-storage-helpers';
import { LOCAL_STORAGE_KEYS } from "@/utils/local-storage-keys";

interface HomeState {
  user: IUser;
  isAuth: boolean;
  isLoading: Boolean;
  isOpenLoginForm: Boolean;
  error: string;
}

const initialState: HomeState = {
  user: {
    id: 0,
    email: '',
    username: '',
    isAdmin: false,
    token: '',
    tokenName: '',
    password: '',
  },
  isAuth: false,
  isLoading: false,
  isOpenLoginForm: false,
  error: '',
}

export const homeSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initSate(state, action: PayloadAction<IUser>) {
      // console.log('initSate before', current(state))
      state.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
      state.error = '';
      setLSData(LOCAL_STORAGE_KEYS.user, action.payload);
      // console.log('initSate after', current(state))
    },
    logout(state) {
      console.log('logout before', current(state))
      state.user.id = 0;
      state.user.email = '';
      state.user.username = '';
      state.user.isAdmin = false;
      state.user.token = '';
      state.user.tokenName = '';
      state.user.password = '';
      state.isAuth = false;
      state.isLoading = false;
      state.error = '';
      deleteLSData(LOCAL_STORAGE_KEYS.token);
      deleteLSData(LOCAL_STORAGE_KEYS.isAuth);
      deleteLSData(LOCAL_STORAGE_KEYS.user);
      console.log('logout after', current(state))
    },
    openLoginForm(state) {
      state.isOpenLoginForm = true;
    },
    closeLoginForm(state) {
      state.isOpenLoginForm = false;
    },
  }
});

export const { initSate, logout, openLoginForm, closeLoginForm } = homeSlice.actions;

export default homeSlice.reducer;