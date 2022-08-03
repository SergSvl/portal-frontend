import React from 'react';
// import ReactLoading from 'react-loading';

const Loading = () => {
  // const type: {
  //   [key: string]: any;
  // } = {
  //   blank: 'blank',
  //   balls: 'balls',
  //   bars: 'bars',
  //   bubbles: 'bubbles',
  //   cubes: 'cubes',
  //   cylon: 'cylon',
  //   spin: 'spin',
  //   spinningBubbles: 'spinningBubbles',
  //   spokes: 'spokes',
  // }

  // const color = '#19d';
  // const height = 50;
  // const width = 50;

  // return (
  //   <ReactLoading className='absolute top-0 left-0 right-0 bottom-0 m-auto' type={type.spin} color={color} height={height} width={width} />
  // );

  return (
    <svg className="animate-spin h-11 w-11 text-white absolute top-0 left-0 right-0 bottom-0 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-75" cx="12" cy="12" r="10" stroke="#19d" stroke-width="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}

export default Loading;