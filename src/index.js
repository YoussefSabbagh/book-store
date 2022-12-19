import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { Toaster } from 'react-hot-toast';
import keycloak from './Keycloak';

import { store } from './app/store';
import { router } from './router';
import CartFinder from './services/cartApi';

import './index.css';
const eventLogger = (event, error) => {
  console.log('onKeycloakEvent', event, error);
};

const tokenLogger = (tokens) => {
  localStorage.token = tokens.token;
  localStorage.setItem('token', tokens.token);
  const getCart = async () => {
    try {
      const data = await CartFinder.getCart(tokens.token);
      sessionStorage.setItem('cart', JSON.stringify(data.products));
    } catch (error) {
      console.error(error.message);
    }
  };
  getCart();

  // console.log('onKeycloakTokens', tokens);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ReactKeycloakProvider
    authClient={keycloak}
    onEvent={eventLogger}
    onTokens={tokenLogger}
  >
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </Provider>
  </ReactKeycloakProvider>
  // </React.StrictMode>
);
