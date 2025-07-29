import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css'; // if you have styling
import { BrowserRouter } from 'react-router';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
