import { useEffect } from 'react';
import { fetchMovies } from '../features/movies/services/moviesService';
import { MovieCard } from '../features/movies/components/MovieCard';
import { MovieCardSkeleton } from '../features/movies/components/MovieCardSkeleton';
import { useMoviesStore } from '../features/movies/store/useMoviesStore';

export default function Home() {
  const movies = useMoviesStore((state) => state.getFilteredAndSortedMovies());
  const loading = useMoviesStore((state) => state.loading);
  const error = useMoviesStore((state) => state.error);

  const setMovies = useMoviesStore((state) => state.setMovies);
  const setLoading = useMoviesStore((state) => state.setLoading);
  const setError = useMoviesStore((state) => state.setError);

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchMovies();
        setMovies(data);
      } catch (err: unknown) {
        console.error(err);
        setError('Erro ao carregar filmes');
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, [setMovies, setLoading, setError]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Studio Ghibli Movies</h1>

      {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </section>
    </div>
  );
}
