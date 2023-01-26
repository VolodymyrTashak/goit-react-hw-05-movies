import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'api/getMovies';

import { ReviewsItem, ReviewsList, ReviewsTitle } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieReviews(moviesId).then(res => {
      setReviews(res.data.results);
    });
  }, [moviesId]);

  return (
    <ReviewsItem>
      {reviews.length > 0
        ? reviews.map(review => {
            return (
              <ReviewsList key={review.id}>
                <ReviewsTitle> {review.author}</ReviewsTitle>
                <p>{review.content}</p>
              </ReviewsList>
            );
          })
        : "We don't have any rewiews for this movie."}
    </ReviewsItem>
  );
};
