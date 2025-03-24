import React, { useEffect, useState } from 'react';
import { useFetchMovies } from '../../hooks/useFetchMovieList.ts';
import { Link } from 'react-router-dom';
import { MovieDetailItem } from '../../types/movie.types.ts';

const Movie: React.FC = () => {
  const [language, setLanguage] = useState('en-US');
  const [page, setPage] = useState(1);

  const {
    data: movies,
    isLoading,
    error,
    isError,
  } = useFetchMovies(language, page);

  // console.log('length', movies?.results?.length);

  useEffect(() => {}, [movies]);

  return (
    <div>
      {movies?.results?.map((movie: MovieDetailItem, index: any) => (
        <div key={index}>
          <Link to={`/movie/${movie.id}?language=${language}`}>
            <h2>{movie.title}</h2>
          </Link>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <p>{movie.popularity}</p>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Movie;
