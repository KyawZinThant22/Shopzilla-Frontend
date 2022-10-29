import React from 'react';
import ReactDOM from 'react-dom/client';

//css
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';

//component
import { Footer } from './section';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes />
      </Router>
      <ToastContainer />

      <Footer />
    </HelmetProvider>
  </React.StrictMode>
);
