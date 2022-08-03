import { Link } from 'react-router-dom';
import React from 'react';
import { HomeButtonProps } from '@/types/index';

const HomeButton = ({ data }: { data: HomeButtonProps }) => {
  const { title, image, link, url } = data;
  // console.log('data:', data );
  // console.log({ title, image, link, url } );
  const titleStyle = 'text-white mb-3';
  const imageStyle = 'rounded-md border border-black';
  
  return (
    <div className='border p-4 m-4 mx-2 h-64 w-72 text-center bg-sky-600'>
      {link ? (
        <Link to={link}>
          <div className={titleStyle}>{title}</div>
          <img className={imageStyle} src={image} alt={image} width={435} height={260}/>
        </Link>
      ) : (
        <a href={url}>
          <div className={titleStyle}>{title}</div>
          <img className={imageStyle} src={image} alt={image} width={435} height={260}/>
        </a>
      )}
    </div>
  )
}

export default HomeButton
