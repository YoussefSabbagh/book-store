import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Keycloak';

import { Toaster } from 'react-hot-toast';

import { store } from './app/store';
import { Provider } from 'react-redux';

import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ReactKeycloakProvider authClient={keycloak}>
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </Provider>
  </ReactKeycloakProvider>
  // </React.StrictMode>
);
