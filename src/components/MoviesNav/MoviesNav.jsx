import { MovieList, MovieItem, MovieLink } from './MoviesNav.styled';
import { useLocation } from 'react-router-dom';

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
