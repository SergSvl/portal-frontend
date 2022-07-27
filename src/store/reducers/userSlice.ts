import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/models/IUser';

interface UserState {
  user: IUser;
  isLoading: Boolean;
  error: string;
}

const initialState: UserState = {
  user: {
    id: 0,
    username: '',
    email: '',
    isAdmin: false,
    isAuth: false,
  },
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetching(state) {
      state.isLoading = true;
    },
    fetchSuccess(state, action: PayloadAction<IUser>) {
      console.log('action:', action);

      state.isLoading = false;
      state.error = '';
      state.user.id = action.payload.id;
      state.user.isAdmin = action.payload.isAdmin;
      state.user.username = action.payload.username;
      state.user.email = action.payload.email;
      state.user.isAuth = true;
    },
    fetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default userSlice.reducer;
export const { fetching, fetchSuccess, fetchError } = userSlice.actions;
