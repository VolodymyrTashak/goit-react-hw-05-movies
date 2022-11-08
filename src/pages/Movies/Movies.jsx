import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies } from 'api/getMovies';
import { Notify } from 'notiflix';
import { MoviesNav } from 'components/MoviesNav/MoviesNav';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchParams, setSearchParams } = useParams();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.name.value.toLowerCase() });
    if (query.trim() === '') {
      Notify.failure('Please write what to look for');
      return;
    }
    searchMovies(query).then(res => {
      searchQuery(res.data.results);
    });
    e.target.reset();
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovies(query).then(res => {
      setSearchQuery(res.data.results);
    });
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Button</button>
      </form>

      <MoviesNav searchQuery={searchQuery} />
    </>
  );
};
