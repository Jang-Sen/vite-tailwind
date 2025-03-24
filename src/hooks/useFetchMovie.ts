import { AxiosResponse } from 'axios';
import { MovieDetailItem } from '../types/movie.types.ts';
import { client } from '../api/client.ts';
import { QueryObserverResult, useQuery } from '@tanstack/react-query';

const fetchMovie = async (
  movieId: number,
  language: string
): Promise<AxiosResponse<MovieDetailItem, any>> => {
  return await client.get(`/movie/${movieId}?language=${language}`);
};

export const useFetchMovie = (
  movieId: number,
  language: string
): QueryObserverResult<MovieDetailItem, any> => {
  return useQuery<MovieDetailItem, any>({
    queryKey: ['movie', movieId, language],
    queryFn: async () => {
      const { data } = await fetchMovie(movieId, language);

      return data;
    },
  });
};
