import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingIn from './components/SignUp/SingIn';
import User from './components/User/User';
import SingleUser from './components/SingleUser/SingleUser';
import Success from './components/Success/Success';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/singin' element={<SingIn />} />
        <Route path='/user' element={<User/>} />
        <Route path='/user/:id' element={<SingleUser/>} />
        <Route path='/success' element={<Success/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

