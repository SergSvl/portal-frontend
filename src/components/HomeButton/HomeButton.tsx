import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from "@/hooks/redux";
import { HomeButtonProps } from '@/types/index';

const HomeButton = ({ data }: { data: HomeButtonProps }) => {
  const { title, image, link, get, post } = data;
  // console.log('HomeButton data:', data );
  const email = useAppSelector((state) => state.home.user.email);
  const password = useAppSelector((state) => state.home.user.password);
  const titleStyle = 'text-white mb-3';
  const imageStyle = 'rounded-md border border-black';
 
  return (
    <div className='border p-4 m-4 mx-2 h-64 w-80 xl:w-72 text-center bg-sky-600'>
      {link ? (
        <Link to={link}>
          <div className={titleStyle}>{title}</div>
          <img className={imageStyle} src={image} alt={image} width={435} height={260}/>
        </Link>
      ) : get ? (
        <a href={get}>
          <div className={titleStyle}>{title}</div>
          <img className={imageStyle} src={image} alt={image} width={435} height={260}/>
        </a>
      ) : post ? (
        <form action={post} method="POST">
          <input name='identity' type='hidden' value={email}/>
          <input name='password' type='hidden' value={password}/>
          <button type='submit'>
            <div className={titleStyle}>{title}</div>
            <img className={imageStyle} src={image} alt={image} width={435} height={260}/>
          </button>
        </form>
      ) : (
        <div>
          <div className={titleStyle}>{title}</div>
          <img className={imageStyle} src={image} alt={image} width={435} height={260}/>
        </div>
      )}
    </div>
  )
}

export default HomeButton
