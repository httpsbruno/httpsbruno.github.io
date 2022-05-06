import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../components/Header'
import HomeBody from '../../components/HomeBody'

const HomePage = () => {
  const token = localStorage.getItem('token');
  return React.createElement("div", null, token ? 
         React.createElement("div", null, 
         React.createElement(Header, null), 
         React.createElement(HomeBody, null)) : 
         React.createElement(Navigate,{ to: "/" }));
};

export default HomePage
