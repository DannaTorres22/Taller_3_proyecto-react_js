import React from 'react';

import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Registro from './pages/registro/Registro';
import Login from './pages/login/Login.js';
import Index from './pages/index/index';
import Dashboard from './pages/dasboard/dashboard';
import ERROR from './Components/Error/Error';




import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Index />}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/registro' element={<Registro />}></Route>
    <Route path='/*' element={<ERROR/>}></Route>

    
    </Routes>
  </BrowserRouter>
  
    
  
);


