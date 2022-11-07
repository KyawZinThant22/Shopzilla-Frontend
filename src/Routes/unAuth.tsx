import { Navigate, useRoutes } from 'react-router-dom';

// Layouts
// import GuestLayout from "../layouts/Guest";

// utils pages

// pages
import { UnAuthLogin } from '../Pages';

// Guest routes
const GuestRoute = () => {
  console.log('guest routes');

  return useRoutes([
    { path: '', element: <Navigate to="/login" /> },
    {
      path: '/login',
      element: <UnAuthLogin />,
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ]);
};

export default GuestRoute;
