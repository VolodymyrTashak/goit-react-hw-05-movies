import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieList, MovieItem, MovieLink } from './MoviesNav.styled';

export const MoviesNav = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(movie => {
        return (
          <MovieItem key={movie.id}>
            <MovieLink
              to={
                location.pathname === '/'
                  ? `/movies/${movie.id}`
                  : `${movie.id}`
              }
              state={{ from: location }}
            >
              {movie.name || movie.title}
            </MovieLink>
          </MovieItem>
        );
      })}
    </MovieList>
  );
};

MoviesNav.propTypes = {
  movies: PropTypes.array,
};
