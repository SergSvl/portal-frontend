import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/hooks/redux";
import { IHomeButtonProps } from "@/types/index";

const HomeButton = ({ data }: { data: IHomeButtonProps }) => {
  const { title, image, link, get, post } = data;
  // console.log('HomeButton data:', data );
  const email = useAppSelector((state) => state.home.user.email);
  const password = useAppSelector((state) => state.home.user.password);
  const titleStyle = "text-white mb-3";
  const imageStyle =
    "rounded-md _border _border-black h-[160px] w-auto mx-auto";
  const imgWidth = 280;
  const imgHeight = 160;

  return (
    <div className='border p-4 m-4 mx-2 h-64 w-80 xl:w-72 text-center bg-sky-600'>
      {link ? (
        <Link to={link}>
          <div className={titleStyle}>{title}</div>
          <img
            className={imageStyle}
            src={image}
            alt={image}
            width={imgHeight}
            height={imgWidth}
          />
        </Link>
      ) : get ? (
        <a href={get}>
          <div className={titleStyle}>{title}</div>
          <img
            className={imageStyle}
            src={image}
            alt={image}
            width={imgHeight}
            height={imgWidth}
          />
        </a>
      ) : post ? (
        <form action={post} method='POST' target="_blank">
          <input name='identity' type='hidden' value={email} />
          <input name='password' type='hidden' value={password} />
          <button type='submit'>
            <div className={titleStyle}>{title}</div>
            <img
              className={imageStyle}
              src={image}
              alt={image}
              width={imgHeight}
              height={imgWidth}
            />
          </button>
        </form>
      ) : (
        <div>
          <div className={titleStyle}>{title}</div>
          <img
            className={imageStyle}
            src={image}
            alt={image}
            width={imgHeight}
            height={imgWidth}
          />
        </div>
      )}
    </div>
  );
};

export default HomeButton;
