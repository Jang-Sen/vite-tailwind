import { MovieItem } from '../types/movie.types.ts';
import { AxiosResponse } from 'axios';
import { client } from '../api/client.ts';
import { QueryObserverResult, useQuery } from '@tanstack/react-query';

const fetchMovies = async (
  language: string,
  page: number
): Promise<AxiosResponse<MovieItem[], any>> => {
  return await client.get<MovieItem[]>(
    `/movie/now_playing?language=${language}&page=${page}`
  );
};

export const useFetchMovies = (
  language: string,
  page: number
): QueryObserverResult<MovieItem[], any> => {
  return useQuery<MovieItem[], any>({
    queryKey: ['movie', language, page],
    queryFn: async () => {
      const { data } = await fetchMovies(language, page);

      console.log('Fetch Movies Data', data);

      return data;
    },
  });
};
