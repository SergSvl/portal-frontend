import React, { useEffect, useState } from 'react';
import logo from '@/assets/icons/logo.svg';
import Button from '@/components/Button/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { openLoginForm, closeLoginForm } from '@/store/home/homeSlice';
import { logout } from '@/store/home/homeSlice';
import { LOCAL_STORAGE_KEYS } from "@/utils/local-storage-keys";
import { getLSData } from '@/utils/helpers/local-storage-helpers';

export const Header = () => {
  const stateHome = useAppSelector(state => state.home);
  const { isAuth: isAuthState } = stateHome;
  // const { email, isAdmin } = stateHome.user;
  const isAuthLS = getLSData(LOCAL_STORAGE_KEYS.isAuth);
  const [isAuth, setIsAuth] = useState(isAuthState || isAuthLS);
  // const [isAuth, setIsAuth] = useState((isAuthState || isAuthLS) && email);
  const { isOpenLoginForm } = stateHome;
  const dispatch = useAppDispatch();

  const handlerBtnClick = (event: React.MouseEvent<HTMLElement>) => {
    isAuth 
      ? dispatch(logout())
      : dispatch(openLoginForm());
    event.stopPropagation();
  }

  useEffect(() => {
    setIsAuth(isAuthState || isAuthLS);
  }, [isAuthState, isAuthLS]);

  return (
    <>
      <header className='w-full bg-gradient-to-r z-10 from-blue-900 to-sky-700 fixed h-[5em] max-h-[5em] t-0'
        onClick={() => dispatch(closeLoginForm())}
      >
        <div className='container m-auto pt-2 md:p-2 -border-l -border-r border-white flex justify-between items-center'>
          <div className='flex justify-between items-center'>
            <img src={logo} className='h-16 ml-2 mr-4' alt='logo' />
            <span className='font-["MonAmourOne"] text-white text-xl sm:text-2xl mb-2 md:mb-0 md:text-3xl md:pb-4 duration-200'>Филиал &laquo;Балтийский&nbsp;Алмаз&raquo;</span>
          </div>
          {!isOpenLoginForm &&
            <Button styles='w-24 mr-2' text={isAuth ? 'Выйти' : 'Войти'} handler={handlerBtnClick}></Button>
          }
        </div>
      </header>
    </>
  )
}