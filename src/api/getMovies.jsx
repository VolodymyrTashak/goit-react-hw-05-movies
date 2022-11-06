import axios from 'axios';
import PropTypes from 'prop-types';

export const getTrending = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const params = {
    api_key: '58c8c07efdfe02ad884f1cfdb1f5606b',
  };
  try {
    const res = await axios(BASE_URL, { params });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovies = async query => {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const params = {
    api_key: '58c8c07efdfe02ad884f1cfdb1f5606b',
    query: `${query}`,
    language: 'en-US',
    page: '1',
    include_adult: 'false',
  };

  try {
    const res = await axios(BASE_URL, { params });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}`;
  const params = {
    api_key: '58c8c07efdfe02ad884f1cfdb1f5606b',
    language: 'en-US',
  };
  try {
    const res = await axios(BASE_URL, { params });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCredits = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const params = {
    api_key: '58c8c07efdfe02ad884f1cfdb1f5606b',
    language: 'en-US',
  };
  try {
    const res = await axios(BASE_URL, { params });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const params = {
    api_key: '58c8c07efdfe02ad884f1cfdb1f5606b',
    language: 'en-US',
    page: '1',
  };
  try {
    const res = await axios(BASE_URL, { params });
    return res;
  } catch (error) {
    console.log(error);
  }
};

searchMovies.propTypes = {
  query: PropTypes.string,
};

getMovieDetails.propTypes = {
  id: PropTypes.number,
};

getMovieCredits.propTypes = {
  id: PropTypes.number,
};

getMovieReviews.propTypes = {
  id: PropTypes.number,
};
