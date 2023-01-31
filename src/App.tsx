import './styles/global.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routers } from './routers';

export const App = () => {
  const elements = useRoutes(routers);

  return elements;
};
