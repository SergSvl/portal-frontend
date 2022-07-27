import React, { useEffect } from 'react';
import Header from '@/components/Header';
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { login } from '@/store/actions/authActions'

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, error } = useAppSelector(state => state.auth);

  useEffect(() => {
    dispatch(login({ login: 'klad@v.ru', password: '12345678', remember: false}));
  }, [dispatch]);

  console.log('useAppSelector user', user);

  return (
    <>
      <Header />
      <div className='m-4 p-4 border border-indigo-600 text-xl font-medium text-black'>
        {isLoading && <h2>Loading...</h2>}
        {error ? (
          <h2>{error}</h2>
        ) : (
          <p>
            <p>username: { user.username }</p>
            <p>email: { user.email }</p>
            <p>isAdmin: { user.isAdmin ? 'Да' : 'Нет' }</p>
            <p>isAuth: { user.isAuth ? 'Да' : 'Нет' }</p>
          </p>
        )}
       </div>

      {/* <button className='bg-sky-500/100 rounded-md p-4 m-4' onClick={() => dispatch(getUser())}>Получить юзера</button> */}
    </>
  )
}