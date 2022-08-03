import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { IUser } from '@/types';

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
    tokenName: ''
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
      console.log('initSate before', current(state))
      state.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
      state.error = '';
      console.log('initSate after', current(state))
    },
    setIsAuth(state) {
      console.log('setIsAuth before', current(state))
      state.isAuth = true;
      console.log('setIsAuth after', current(state))
    },
    unsetIsAuth(state) {
      console.log('unsetIsAuth before', current(state))
      state.isAuth = false;
      console.log('unsetIsAuth after', current(state))
    },
    logout(state) {
      console.log('logout before', current(state))
      state.user.id = 0;
      state.user.email = '';
      state.user.username = '';
      state.user.isAdmin = false;
      state.user.token = '';
      state.user.tokenName = '';
      state.isAuth = false;
      state.isLoading = false;
      state.error = '';
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

export const { setIsAuth, unsetIsAuth, initSate, logout, openLoginForm, closeLoginForm } = homeSlice.actions;

export default homeSlice.reducer;