import { useEffect, useState } from 'react';
import { fetchMovies } from '../features/movies/services/moviesService';
import type { Movie } from '../features/movies/types/movie';
import { MovieCard } from "../features/movies/components/MovieCard"

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Studio Ghibli Movies</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
