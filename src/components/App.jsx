import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';

import { Layout } from './Layout/Layout';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MoviesDetails = lazy(() =>
//   import('../pages/MoviesDetails/MoviesDetails')
// );
// const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MoviesDetails } from 'pages/MoviesDetails/MoviesDetails';
import { NotFound } from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<MoviesDetails />}>
          <Route path="Cast" element={<Cast />}></Route>
          <Route path="Reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
