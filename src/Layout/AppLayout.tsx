import React from 'react';
import { Appbar } from '../section';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <Appbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
