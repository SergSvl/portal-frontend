import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/Form/Login";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { closeLoginForm, initSate } from "@/store/home/homeSlice";
import { useGetUserMutation, useGetRightsMutation } from "@/store/home/homeApi";
import HomeButton from "@/components/HomeButton/HomeButton";
import { IHomeButtonProps, IUser, IAllRights, IRight, ITask } from "@/types";
import buttonsData, { taskNames } from "@/pages/MainPage/ButtonsData";
import { LOCAL_STORAGE_KEYS } from "@/utils/local-storage-keys";
import { setLSData, getLSData } from "@/utils/helpers/local-storage-helpers";
import { logout } from '@/store/home/homeSlice';
import Loading from "@/components/Loading/Loading";

export const MainPage = () => {
  const [getRights, { isLoading: isLoadingRights }] = useGetRightsMutation();
  const [getUser, { isLoading: isLoadingUser }] = useGetUserMutation();
  // const [getUser, { data, isError, error, status, isLoading }] = useGetUserMutation();
  const dispatch = useAppDispatch();
  const stateHome = useAppSelector((state) => state.home);
  const { isAuth: isAuthState, isOpenLoginForm } = stateHome;
  const { email } = stateHome.user;
  const isAuthLS = getLSData(LOCAL_STORAGE_KEYS.isAuth);
  const [isAuth, setIsAuth] = useState(isAuthState || isAuthLS);
  const [allRights, setAllRights] = useState<IAllRights[]>([]);
  const [buttons, setButtons] = useState<IHomeButtonProps[]>(buttonsData);
  const overlay = isOpenLoginForm
    ? "overlay top-[5.0rem] bottom-0 left-0 right-0 absolute bg-gray-700/60 z-20"
    : "overlay";
  const buttonsContent =
    "container mx-auto [min-height:calc(100vh-7.5rem)] mt-[5rem] py-2 _border _border-green-600 w-full text-lg font-medium text-black";
  const buttonsWrapper =
    "flex flex-wrap justify-center lg:justify-between 2xl:justify-start";

  const handlerOuterFormClick = (event: React.MouseEvent<HTMLElement, any>) => {
    const { target } = event;
    if (target instanceof HTMLElement) {
      if (target.className.indexOf("overlay") !== -1) {
        dispatch(closeLoginForm());
        event.stopPropagation();
      }
    }
  };

  useEffect(() => {
    setIsAuth(isAuthState || isAuthLS);
  }, [isAuthState, isAuthLS]);

  useEffect(() => {
    const initialization = async () => {
      const userData = getLSData(LOCAL_STORAGE_KEYS.user);
      console.log('initialization userData:', userData);

      if (typeof userData === 'object' && userData !== null) {
        dispatch(initSate({ ...userData }));
      } else {
        const response = getUser();

        // console.log('initialization:', { data, isError, error, status, isLoading, endpointName, reset, requestId, originalArgs });
        // console.log('response:', response);

        response.then((response: { data: IUser } | any) => {
          console.log('initialization response:', response);

          if ("error" in response) {
            console.log('response.error:', response.error);
            if (response.error.status === 401) {
              dispatch(logout());
            }
          }

          if ("data" in response) {
            dispatch(initSate({ ...response.data }));
          }
        });
      }
    };

    const getAppConfig = () => {
      const rights = getLSData(LOCAL_STORAGE_KEYS.rights);
      // console.log('LS rights:', rights);
      // console.log('LS typeof rights:', typeof rights);

      if (typeof rights === 'object' && rights !== null) {
        const arrayRights: IAllRights | any = [];
        Object.keys(rights).map((key: string) => {
          // console.log('key:', key);
          // console.log('rights[key]:', rights[key]);
          arrayRights[key] = rights[key];
          return false;
        });
        // console.log('arrayRights:', arrayRights);
        setAllRights(arrayRights);
      } else {
        const response = getRights();
        const sumRights: IAllRights | any = [];
        
        response.then((response: IAllRights | any) => {
          
          console.log('getAppConfig response:', response);

          if ("data" in response) {
            const configRights = response.data.get;
            // console.log('getAppConfig:', configRights);
            // console.log('taskNames:', taskNames);
            // console.log('buttons:', buttons);

            configRights.map((task: ITask): IAllRights => {
              // 1. Удаляем все задачи, прилетевшие с бэка, и которых нет в списке на фронте
              if (taskNames.indexOf(task.task) !== -1) {
                const rights: [] = JSON.parse(task.rights);
                // console.log('> rights: ', rights);

                let rightsFlat = [""];
                // 2. Исключаем из списка те задачи с бэка, у которых нет заполненного массива прав
                if (Array.isArray(rights)) {
                  rightsFlat = rights.reduce(
                    (acc: string[] | any, right: IRight) => {
                      return right.users && right.users.length
                        ? acc.concat(right.users)
                        : false;
                    },
                    []
                  );

                  // console.log('> rightsFlat: ', rightsFlat);
                  if (rightsFlat) sumRights[task.task] = rightsFlat;
                }
              }
              return sumRights;
            });

            // console.log('sumRights >: ', sumRights);

            const allRights = { ...sumRights };

            console.log('allRights:', allRights);

            setLSData(LOCAL_STORAGE_KEYS.rights, allRights);
            setAllRights(sumRights);
          }
        });
      }
    };

    initialization();
    getAppConfig();
  }, [dispatch, getUser, getRights, setAllRights]);

  return (
    <>
      <Header />
      <div className=''>
        {isOpenLoginForm && (
          <>
            <div className={overlay} onClick={handlerOuterFormClick}></div>
            <LoginForm />
          </>
        )}
        <div className={buttonsContent}>
          <div className={buttonsWrapper}>
            {isAuth && !isLoadingUser && !isLoadingRights ? (
              buttons.length ? (
                buttons.map(
                  (btn: IHomeButtonProps) =>
                    btn.isActive &&
                    (btn.public 
                      || (allRights[btn.id as unknown as number] !== undefined
                      && allRights[btn.id as unknown as number].indexOf(email) !== -1)
                    ) && (
                      <HomeButton key={btn.title} data={btn} />
                    )
                )
              ) : (
                <div className='text-xl mx-auto'>Нет данных</div>
              )
            ) : isLoadingUser && isLoadingRights ? (
              <Loading />
            ) : (
              buttons.length && (
                buttons.map(
                  (btn) =>
                    btn.isActive && btn.public && (
                      <HomeButton key={btn.title} data={btn} />
                    )
                )
              )
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
