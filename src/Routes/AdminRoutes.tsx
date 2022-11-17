import { useRoutes, Navigate } from 'react-router-dom';
import { AppLayout } from '../Layout';

import { Features, Journal, Pages, Portfolio, Shop } from '../section';
import { Home } from '../Pages';

const Admin = () =>
  useRoutes([
    { path: '', element: <Navigate to="/home" replace /> },
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'shop',
          element: <Shop />,
        },
        {
          path: 'features',
          element: <Features />,
        },
        {
          path: 'pages',
          element: <Pages />,
        },
        {
          path: 'portfolio',
          element: <Portfolio />,
        },
        {
          path: 'journal',
          element: <Journal />,
        },
      ],
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ]);

export default Admin;
