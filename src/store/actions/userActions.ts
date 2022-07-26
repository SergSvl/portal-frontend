import { AppDispatch } from "@/store";
// import { IUser } from '@/models/IUser';
import { fetching, fetchSuccess, fetchError } from '@/store/reducers/userSlice';
import { apiRequest } from "@/api/api";

export const getUser = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(fetching());
      const response = await apiRequest.get('/users/3');
      // console.log('getUser response', response);
      dispatch(fetchSuccess(response));
    } catch (err: any) {
      const error = err;
      console.log(error.message);
      dispatch(fetchError(error.message));
    }

  }
}