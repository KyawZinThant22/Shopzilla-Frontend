import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { Footer } from './section';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes />
      </Router>
      <Footer />
    </HelmetProvider>
  </React.StrictMode>
);
