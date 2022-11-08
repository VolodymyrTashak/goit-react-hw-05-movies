import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'api/getMovies';

import Default from '../../images/Default.jpg';

import { CastItem, CastList, CastText } from './Cast.styled';

export const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieCredits(moviesId).then(res => {
      setCasts(res.data.cast);
    });
  }, [moviesId]);

  return (
    <CastItem>
      {casts.length > 0
        ? casts.map(cast => {
            return (
              <CastList key={cast.id}>
                {cast.profile_path ? (
                  <img
                    src={`https://themoviedb.org/t/p/w200/${cast.profile_path}`}
                    alt={cast.name}
                  />
                ) : (
                  <img width={200} height={300} src={Default} alt={cast.name} />
                )}

                <CastText>{cast.name}</CastText>
                <CastText>Character: {cast.character}</CastText>
              </CastList>
            );
          })
        : 'No casts'}
    </CastItem>
  );
};
