import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@/App.css';
import MainPage from '@/pages/MainPage';

function App() {
  return (
    <div className="absolute mx-auto w-screen h-screen overflow-x-hidden _border _border-red-400">
      <Routes>
        <Route path="/" element={ <MainPage /> } />
      </Routes>
    </div>
  );
}

export default App;
