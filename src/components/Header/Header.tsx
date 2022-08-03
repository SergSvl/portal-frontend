import React, { useState } from 'react';
import logo from '@/assets/icons/logo.svg';
import Button from '@/components/Button/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { openLoginForm, closeLoginForm } from '@/store/home/homeSlice';
import { logout } from '@/store/home/homeSlice';

export const Header = () => {
  const stateHome = useAppSelector(state => state.home);
  const { isAuth } = stateHome;
  const { isOpenLoginForm } = stateHome;
  const dispatch = useAppDispatch();

  const handlerBtnClick = (event: React.MouseEvent<HTMLElement>) => {
    isAuth 
      ? dispatch(logout())
      : dispatch(openLoginForm());
    event.stopPropagation();
  }

  return (
    <>
      <header className='w-full bg-gradient-to-r z-10 from-blue-900 to-sky-700 fixed h-[5em] max-h-[5em] t-0'
        onClick={() => dispatch(closeLoginForm())}
      >
        <div className='container m-auto pt-2 md:p-2 -border-l -border-r border-white flex justify-between items-center'>
          <div className='flex justify-between items-center'>
            <img src={logo} className='h-16 ml-2 mr-4' alt='logo' />
            <span className='font-["MonAmourOne"] text-white text-2xl md:text-3xl md:pb-4 duration-200'>Филиал &laquo;Балтийский&nbsp;Алмаз&raquo;</span>
          </div>
          {!isOpenLoginForm &&
            <Button text={isAuth ? 'Выйти' : 'Войти'} handler={handlerBtnClick}></Button>
          }
        </div>
      </header>
    </>
  )
}