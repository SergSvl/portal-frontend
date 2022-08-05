import { useEffect, useState } from "react";
import { ApiError } from '@/types/index';
import { useAppDispatch } from "@/hooks/redux";
import { closeLoginForm } from '@/store/home/homeSlice';
import Button from '@/components/Button/Button';

const Error = ({ error }: ApiError) => {
  const dispatch = useAppDispatch();
  const [errorMessageDetailed, setErrorMessageDetailed] = useState('');
  const errorMessage = 'Ошибка связи с сервером';
  const buttonStyle = 'mx-auto m-4 w-32';

  useEffect(() => {
    const getError = () => {
      if (error !== undefined && 'error' in error) {
        setErrorMessageDetailed(error.error);
      }
    }
    getError();
  }, [error])

  return (
    <div className='flex flex-col justify-center w-full h-full text-center align-middle'>
      <span className='font-semibold mb-4 text-xl'>{errorMessage}</span>
      <span className='mb-4 text-md'>{errorMessageDetailed}</span>
      <Button styles={buttonStyle} handler={() => dispatch(closeLoginForm())}></Button>
    </div>
  );
}

export default Error;