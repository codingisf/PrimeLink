import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ServicePage from './Pages/ServicePage'
import IndustriesPage from './Pages/IndustriesPage'
import ContactPage from './Pages/ContactPage'
import "./App.css";

function App() {
  return (
    <>
        
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/industries' element={<IndustriesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      </>

  );
}

export default App;
