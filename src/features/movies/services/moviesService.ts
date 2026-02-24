import axios from 'axios';
import type { Movie } from '../types/movie';

const API_URL = 'https://ghibliapi.vercel.app/films';

export async function fetchMovies(): Promise<Movie[]> {
  const response = await axios.get<Movie[]>(API_URL);
  return response.data;
}
