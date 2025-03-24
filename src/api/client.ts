import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGViZDk0ZmRhMzJlYzQyNzBhNmZmNmFmNjVmMjhhNyIsIm5iZiI6MTczNDMyMTI0OC42NDUsInN1YiI6IjY3NWZhNDYwZDZmNWU4NDU4YjhiNTIyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gUmfYe6Z_3BgLytSw5hCaTBw1CXKG6tRvB9rLTVQVWk',
  },
});
