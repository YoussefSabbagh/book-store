import { createBrowserRouter } from 'react-router-dom';

import Public from '../layout/Public';

// import RequireAuth from '../features/auth/RequireAuth';

import Home, { loaderBestSellersBooks } from '../pages/home';
import Books, { loaderBooks } from '../pages/books';
import NotFound from '../pages/NotFound';
import BookDetail, { loaderBookDetail } from '../pages/books/BookDetail';
import Profile, { loaderUserById } from '../pages/users/Profile';
// import Login from '../pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Public />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home />, loader: loaderBestSellersBooks },
      // { path: '/login', element: <Login /> },
      { path: '/books', element: <Books />, loader: loaderBooks },
      { path: '/books/:id', element: <BookDetail />, loader: loaderBookDetail },
      { path: '/users', element: <Books />, loader: loaderBooks },
      {
        path: '/users/:user_id',
        element: <Profile />,
      },
      {
        path: '/users/:user_id/cart',
        element: <BookDetail />,
        loader: loaderBookDetail,
      },
      { path: '/checkout/:user_id', element: <Books />, loader: loaderBooks },
    ],
  },
  // {
  //   path: '/profile',
  //   element: <RequireAuth />,
  //   errorElement: <NotFound />,
  //   children: [
  //     { index: true, element: <Home /> },
  //     { path: '/books', element: <Books />, loader: loaderBooks },
  //     { path: '/books/:id', element: <BookDetail />, loader: loaderBookDetail },
  //     {
  //       path: '/users/:user_id',
  //       element: <Profile />,
  //       loader: loaderUserById,
  //     },
  //     {
  //       path: '/users/:user_id/cart',
  //       element: <BookDetail />,
  //       loader: loaderBookDetail,
  //     },
  //     { path: '/checkout/:user_id', element: <Books />, loader: loaderBooks },
  //   ],
  // },
]);
