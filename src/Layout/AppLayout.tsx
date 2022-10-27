import React from 'react';
import { Appbar } from '../section';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
};

export default AppLayout;
