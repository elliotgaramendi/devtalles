import { BACKEND_API_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: BACKEND_API_KEY || '',
    // language: 'es',
  },
});
