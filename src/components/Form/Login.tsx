import { useEffect, useState } from "react";
import { initSate } from '@/store/home/homeSlice';
import { useAppDispatch } from "@/hooks/redux";
import { useLoginMutation } from "@/store/home/homeApi";
import { closeLoginForm } from '@/store/home/homeSlice';
import Loading from "@/components/Loading/Loading";
import Error from "@/components/Form/Error";

const Login = () => {
  const [ login, { data, isError, error, status, isLoading } ] = useLoginMutation();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputStyle = 'p-3 mx-4 my-3 rounded-md border';
  const buttonStyle = 'bg-sky-500/100 rounded-md p-4 m-4 text-white';
  const formStyle = 'flex flex-col rounded-md max-w-72 w-64 sm:w-80 h-80 border bg-white border-grey-600 p-5 absolute m-auto top-0 left-0 right-0 bottom-0 z-20';

  const LogIn = () => {
    const response = login({ login: 'klad@v.ru', password: '12345678', remember: false, tokenName: 'portalxToken'});
    response.then(response => {
      if ('data' in response) {
        dispatch(initSate(response.data));
        dispatch(closeLoginForm());
      }
    });
  }

  const onChangeEmail = (value: string) => {
    setEmail(value);
  }

  const onChangePassword = (value: string) => {
    setPassword(value);
  }

  console.log("useLoginMutation data:", { data, isError, error, status, isLoading });

  return (
    <>
      <div className={formStyle}>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <Error error={error} />
        ) : (
          <>
            <div className='text-xl text-center font-medium py-2'>Введите ваши данные</div>
            <input className={inputStyle} type='email' placeholder='Email' value={email} onChange={(e) => onChangeEmail(e.target.value)} />
            <input className={inputStyle} type='password' placeholder='Пароль' value={password} onChange={(e) => onChangePassword(e.target.value)}/>
            <button className={buttonStyle} onClick={LogIn}>Войти</button>
          </>
        )}
      </div>
    </>
  );
}

export default Login;