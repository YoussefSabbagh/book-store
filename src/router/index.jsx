import { createBrowserRouter } from 'react-router-dom';

import Public from '../layout/Public';

import {
  loaderBookDetail,
  loaderBooks,
  loaderNewBooks,
} from '../services/booksApis';

import Home from '../pages/home';
import Books from '../pages/books';
import NotFound from '../pages/NotFound';
import BookDetail from '../pages/books/BookDetail';
import Profile from '../pages/users/Profile';
import CartPage from '../pages/CartPage';
import PaymentPage from '../pages/paymentPage';
import Contact from '../pages/contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Public />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home />, loader: loaderBooks },
      { path: '/books/:id', element: <BookDetail />, loader: loaderBookDetail },
      { path: '/books', element: <Books />, loader: loaderNewBooks },
      { path: '/users/:user_id', element: <Profile /> },
      { path: '/users/:user_id/cart', element: <CartPage /> },
      { path: '/contact', element: <Contact /> },
      { path: '/checkout/:user_id', element: <CartPage /> },
      { path: '/payment', element: <PaymentPage /> },
    ],
  },
]);
