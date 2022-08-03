import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@/App.css';
import MainPage from '@/pages/MainPage';

function App() {
  return (
    <div className="absolute h-screen _border _border-red-400 _text-center">
      <Routes>
        <Route path="/" element={ <MainPage /> } />
      </Routes>
    </div>
  );
}

export default App;
