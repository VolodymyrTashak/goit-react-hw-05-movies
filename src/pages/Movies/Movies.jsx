import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Notify } from 'notiflix';
import { BsSearch } from 'react-icons/bs';

import { searchMovies } from 'api/getMovies';
import { MoviesNav } from 'components/MoviesNav/MoviesNav';

import { MoviesBackLink } from './Movies.styled';
import {
  MoviesBox,
  MoviesForm,
  MoviesFormInput,
  MoviesFormButton,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.name.value.toLowerCase() });
    if (query.trim() === '') {
      Notify.failure('Please write what to look for');
      return;
    }
    searchMovies(query).then(res => {
      setMovies(res.data.results);
    });
    e.target.reset();
  };

  const moviesBackLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (query) {
      searchMovies(query).then(res => {
        setMovies(res.data.results);
      });
    }
    return;
  }, [query]);

  return (
    <>
      <MoviesBox>
        <MoviesBackLink to={moviesBackLinkHref}>Go back</MoviesBackLink>
        <MoviesForm onSubmit={handleSubmit}>
          <MoviesFormInput
            type="text"
            autoComplete="off"
            autoFocus
            name="name"
            placeholder="Search movies name"
          />
          <MoviesFormButton type="submit">
            <BsSearch size={25} />
          </MoviesFormButton>
        </MoviesForm>
      </MoviesBox>
      <MoviesNav movies={movies} />
    </>
  );
};

export default Movies;
