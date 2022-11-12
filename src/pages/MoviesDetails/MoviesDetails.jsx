import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

import { getMovieDetails } from 'api/getMovies';

import {
  BackLink,
  Box,
  Title,
  Options,
  GenresList,
  GenresItem,
  MoviesBox,
  DescriptionList,
  DescriptionItem,
  DescriptionLink,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const location = useLocation();
  const { moviesId } = useParams();
  const backPage = useRef(location.state?.from ?? null);

  const backLinkHref = location.state?.from ?? backPage.current;
  const date = new Date(movieDetails.release_date).getFullYear();
  const { title, poster_path, original_title, vote_average, overview, genres } =
    movieDetails;

  useEffect(() => {
    getMovieDetails(moviesId).then(res => {
      setMovieDetails(res.data);
    });
  }, [moviesId]);

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Box>
        <img
          src={`https://themoviedb.org/t/p/w400/${poster_path}`}
          alt={title}
        />
        <MoviesBox>
          <Title>
            {original_title} ({date})
          </Title>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <Options>Overview</Options>
          <p>{overview}</p>
          <Options>Genres</Options>
          <GenresList>
            {genres
              ? genres.map(genre => {
                  return (
                    <GenresItem>
                      <p key={genre.id}>{genre.name}</p>
                    </GenresItem>
                  );
                })
              : 'Unknow'}
          </GenresList>
        </MoviesBox>
      </Box>
      <DescriptionList>
        <DescriptionItem>
          <DescriptionLink to="Cast">Cast</DescriptionLink>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionLink to="Reviews">Reviews</DescriptionLink>
        </DescriptionItem>
      </DescriptionList>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
