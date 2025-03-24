import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main.tsx';
import ErrorPage from '../pages/ErrorPage.tsx';
import App from '../App.tsx';
import Movie from '../pages/Movie/Movie.tsx';
import MovieDetail from '../pages/Movie/MovieDetail.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/movie',
        element: <Movie />,
      },
      {
        path: '/movie/:movieId',
        element: <MovieDetail />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
