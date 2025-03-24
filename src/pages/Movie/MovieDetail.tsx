import React, { useState } from 'react';
import { useFetchMovie } from '../../hooks/useFetchMovie.ts';
import { useParams } from 'react-router-dom';

const MovieDetail: React.FC = () => {
  const { movieId } = useParams();
  const [language, setLanguage] = useState('en-US');

  const {
    data: movie,
    isLoading,
    error,
    isError,
  } = useFetchMovie(movieId, language);

  console.log('page data', movie);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt={movie?.title}
      />
      <h2>{movie?.title}</h2>
      <p>{movie?.overview}</p>
      <p>{movie?.popularity}</p>
      <p>{movie?.release_date}</p>
    </div>
  );
};

export default MovieDetail;
