import { useEffect } from 'react';
import { fetchMovies } from '../features/movies/services/moviesService';
import { MovieCard } from '../features/movies/components/MovieCard';
import { MovieCardSkeleton } from '../features/movies/components/MovieCardSkeleton';
import { useMoviesStore } from '../features/movies/store/useMoviesStore';

export default function Home() {
  const getMovies = useMoviesStore((state) => state.getFilteredAndSortedMovies);
  const movies = getMovies();
  const loading = useMoviesStore((state) => state.loading);
  const error = useMoviesStore((state) => state.error);

  const setMovies = useMoviesStore((state) => state.setMovies);
  const setLoading = useMoviesStore((state) => state.setLoading);
  const setError = useMoviesStore((state) => state.setError);

  const search = useMoviesStore((state) => state.filters.search);
  const setFilters = useMoviesStore((state) => state.setFilters);

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

      <input
        type="text"
        placeholder="Buscar filmes..."
        value={search}
        onChange={(e) => setFilters({ search: e.target.value })}
        className="w-full max-w-md px-4 py-2 border rounded-lg mb-5"
      />

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
