import { useEffect, useState } from "react";

const Error = ({ error }: { error: any }) => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getError = () => {
      if (error !== undefined && 'error' in error) {
        setErrorMessage(error.error);
      }
    }
    getError();
  }, [error])

  return (
    <span className='text-md w-full h-full text-center align-middle'>{errorMessage}</span>
  );
}

export default Error;