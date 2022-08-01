import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { setIsAuth, unsetIsAuth, initSate, logout } from '@/store/home/homeSlice';
import { useLoginMutation } from '@/store/home/homeApi';

export const MainPage = () => {
  const [ login, { data, isError, isLoading } ] = useLoginMutation();
  const dispatch = useAppDispatch();
  const stateHome = useAppSelector(state => state.home);
  const { isAuth } = stateHome;
  const { username, email, isAdmin } = stateHome.user;

  // useEffect(() => {
  //   const response = login({ login: 'klad@v.ru', password: '12345678', remember: false, tokenName: 'portalxToken'});
  //   response.then(response => {
  //     if ('data' in response) {
  //       dispatch(initSate(response.data));
  //     }
  //   });
  // }, [login, dispatch]);

  console.log('data', { data, isError, isLoading });

  const LogIn = () => {
    const response = login({ login: 'klad@v.ru', password: '12345678', remember: false, tokenName: 'portalxToken'});
    response.then(response => {
      if ('data' in response) {
        dispatch(initSate(response.data));
      }
    });
  }

  return (
    <>
      <Header />
      <div className='m-4 p-4 border border-indigo-600 text-xl font-medium text-black'>
        {isLoading ? (
           <h2>Loading...</h2>
        ) : isError ? (
            <h2>Ошибка загрузки</h2>
          ) : (
            <p>
              <p>username: { username }</p>
              <p>email: { email }</p>
              <p>isAdmin: { isAdmin ? 'Да' : 'Нет' }</p>
              <p>isAuth: { isAuth ? 'Да' : 'Нет' }</p>
            </p>
          )
        }
       </div>

      {(isAuth || email) && (
        <>
          <button className='bg-sky-500/100 rounded-md p-4 m-4' onClick={() => dispatch(setIsAuth())}>Изменить Auth = true</button>
          <button className='bg-sky-500/100 rounded-md p-4 m-4' onClick={() => dispatch(unsetIsAuth())}>Изменить Auth = false</button>
        </>
      )}

      {(isAuth || email) ? (
        <button className='bg-sky-500/100 rounded-md p-4 m-4' onClick={() => dispatch(logout())}>Выйти</button>
      ) : (
        <button className='bg-sky-500/100 rounded-md p-4 m-4' onClick={LogIn}>Войти</button>
      )}
    </>
  )
}