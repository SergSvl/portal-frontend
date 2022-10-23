import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@/App.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainPage from '@/pages/MainPage';

function App() {
  return (
    <div className="absolute mx-auto w-screen h-screen overflow-x-hidden _border _border-red-400">
      <Header />
      <Routes>
        <Route path="/" element={ <MainPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
