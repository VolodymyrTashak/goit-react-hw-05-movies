import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MoviesDetails } from 'pages/MoviesDetails/MoviesDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { NotFound } from 'pages/NotFound/NotFound';

import { getMovieReviews } from 'api/getMovies';

export const App = () => {
  getMovieReviews(3);
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
