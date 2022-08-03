import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { setIsAuth, unsetIsAuth } from "@/store/home/homeSlice";
import { closeLoginForm } from '@/store/home/homeSlice';
import LoginForm from "@/components/Form/Login";
import { useGetRightsMutation } from "@/store/home/homeApi";
import HomeButton from '@/components/HomeButton/HomeButton';
import { HomeButtonProps } from '@/types/index';
import buttonsData from '@/pages/MainPage/ButtonsData';

export const MainPage = () => {
  const [getRights, { data, isError, error, status, isLoading }] = useGetRightsMutation();
  const dispatch = useAppDispatch();
  const stateHome = useAppSelector((state) => state.home);
  const { isAuth, isOpenLoginForm } = stateHome;
  // const { username, email, isAdmin } = stateHome.user;
  const [buttons, setButtons] = useState<HomeButtonProps[]>(buttonsData);
  const wrapperStyle = isOpenLoginForm ? "appBody w-screen h-screen bg-gray-700/70" : "appBody w-screen";

  const getAppConfig = () => {
    const response = getRights();
    response.then(response => {
      if ('data' in response) {

        console.log('getAppConfig:', { data, isError, error, status, isLoading });
        console.log('getAppConfig:', response.data);

        const configRights = response.data.get;

        /*
          Нужно получить такую структуру прав:

          rights: {
            task1: [
              rights: {
                id1: [
                  'klad1@v.ru',
                  ...
                ],
                id2: [
                  'klad2@v.ru',
                  ...
                ],
              }
            ]

            task2: [
              rights: {
                id1: [
                  'klad1@v.ru',
                  ...
                ],
                id2: [
                  'klad2@v.ru',
                  ...
                ],
              }
            ]
          }
        */

        const fullConfig: { rights: {} } = {
          rights: {}
        }

        console.log('loadConfig > fullConfig.rights 1: ', fullConfig.rights)

        // configRights.forEach(elem => {
        const allRights = configRights.map((el: any) => {

          const rights: [] = JSON.parse(el.rights);
          console.log('forEach > rights: ', rights)
          // console.log('forEach > length: ', rights.length)
          const rightsArray = []

          // console.log('>> loadConfig > configRights.forEach > rights: ', rights)

          // const currRight = rights.map((el: any) => {
          //   // el.users ? 
          //   rightsArray[el.id] = [...el.users];
          // })

          // fullConfig.rights[el.task] = {
          //   rights: [...rightsArray]
          // })
          return '';
        });

        console.log('loadConfig > fullConfig.rights 2: ', fullConfig.rights)
      }
    });
  }

  const handlerOuterFormClick = (event: React.MouseEvent<HTMLElement, any>) => {
    const { target } = event;
    if (target instanceof HTMLElement) {
      if (target.className.indexOf('appBody') !== -1) {
        dispatch(closeLoginForm());
        event.stopPropagation();  
      }
    }
  }

  return (
    <>
      <Header />

      <div className={wrapperStyle} onClick={handlerOuterFormClick}>
        {isOpenLoginForm ? (
          <LoginForm />
          // <button
          //   className='bg-sky-500/100 rounded-md p-4 m-4 h-12'
          //   onClick={getAppConfig}
          // >
          //   Получить конфиг
          // </button>
        ) : (
          <div className='container flex -justify-around flex-wrap mx-auto [height:calc(100vh-4.45em)] mt-[4.45em] py-2 border border-green-600 w-full text-lg font-medium text-black'>
            {isAuth ? (
              buttons.length ? (
                buttons.map((btn) => (
                  btn.isActive && <HomeButton key={btn.title} data={btn} />
                ))
              ) : (
                <div className='text-xl mx-auto'>Нет данных</div>
              )
            ) : (
              <div className='text-xl mx-auto'>Вы не авторизованы</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
