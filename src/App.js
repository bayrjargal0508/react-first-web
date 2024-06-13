import React from 'react';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import NuurPage from './pages/NuurPage';
import Login from './pages/login';
import SignUp from './pages/signup';
import Tools from './components/tools';
import CartItem from './components/cartItem';
import Checkout from './components/Checkout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/nuur' element={<NuurPage />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to="/nuur" />} />
          <Route path='home' element={<Home />} />
          <Route path='cart' element={<CartItem />} />
          <Route path='detail/:slug' element={<Detail />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='tools' element={<Tools />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
