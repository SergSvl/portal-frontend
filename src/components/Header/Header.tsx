import React from 'react';
import logo from '@/logo.svg';

export const Header = () => {

  return (
    <>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            COOL APP!
          </p>
          <a
            className="App-link"
            href={process.env.REACT_APP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {process.env.REACT_APP_BASE_URL}
          </a>
        </header>
    </>
  )
}