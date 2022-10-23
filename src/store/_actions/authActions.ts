// import { AppDispatch } from "@/store";
// import { IUser } from '@/models/IUser';
// import { fetching, fetchSuccess, fetchError } from '@/store/reducers/userSlice';
import { apiRequest } from "@/_api/api";
import { createFormData } from '@/utils/helpers/form-data'
import { getLSData, setLSData } from '@/utils/helpers/local-storage-helpers';
import { LOCAL_STORAGE_KEYS } from "@/utils/local-storage-keys";

interface loginProps {
  login: string;
  password: string;
  remember: boolean;
}

export const login = (data: loginProps) => {
  // return async (dispatch: AppDispatch): Promise<void> => {
  //   try {
  //     dispatch(fetching());
  //     const formData = createFormData(data);
  //     const response = await apiRequest.post('/login', formData, {
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });
  //     console.log('login response', response.data);
  //     setLSData(LOCAL_STORAGE_KEYS.token, response.data.token);
  //     dispatch(fetchSuccess(response.data));
  //   } catch (err: any) {
  //     const error = err;
  //     console.log(error.message);
  //     dispatch(fetchError(error.message));
  //   }

  // }
}

export const getUser = () => {
  // return async (dispatch: AppDispatch): Promise<void> => {
  //   try {
  //     dispatch(fetching());
  //     /*
  //     const formData = new FormData();
  //     formData.append('name', targetData.name);
  //     formData.append('category', JSON.stringify([...targetData.category]));
  //     if (logo) formData.append('preview_image', logo);
  //     apiRequest.post(`/events`, formData, {
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'multipart/form-data',
  //       }
  //     }
  //     */
  //     const response = await apiRequest.get('/view');
  //     // console.log('getUser response', response);
  //     dispatch(fetchSuccess(response));
  //   } catch (err: any) {
  //     const error = err;
  //     console.log(error.message);
  //     dispatch(fetchError(error.message));
  //   }

  // }
}

/*
  apiRequest.post('/users/update', formData, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    }
  }).then(response => {
    console.log(response);
    history.push(`/profile/${id}`)
  });
*/