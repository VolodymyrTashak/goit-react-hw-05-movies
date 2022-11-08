import { useState, useEffect } from 'react';

import { getTrending } from 'api/getMovies';
import { MoviesNav } from 'components/MoviesNav/MoviesNav';

import { MoviesBox, Title } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrending().then(res => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <MoviesBox>
      <Title>Trending today</Title>
      <MoviesNav movies={movies} />
    </MoviesBox>
  );
};
