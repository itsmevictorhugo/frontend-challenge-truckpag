import { useEffect, useMemo } from 'react';
import { fetchMovies } from '../features/movies/services/moviesService';
import { MovieCard } from '../features/movies/components/MovieCard';
import { MovieCardSkeleton } from '../features/movies/components/MovieCardSkeleton';
import { useMoviesStore } from '../features/movies/store/useMoviesStore';
import { FiltersBar } from '../features/movies/components/FiltersBar';
import { SortSelector } from '../features/movies/components/SortSelector';

export default function Home() {
  const movies = useMoviesStore((state) => state.movies);
  const meta = useMoviesStore((state) => state.meta);
  const filters = useMoviesStore((state) => state.filters);
  const sortField = useMoviesStore((state) => state.sortField);
  const sortOrder = useMoviesStore((state) => state.sortOrder);

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

  const filteredMovies = useMemo(() => {
    let filtered = [...movies];

    if (filters.search.trim()) {
      const search = filters.search.toLowerCase();

      filtered = filtered.filter((movie) => {
        const titleMatch = movie.title.toLowerCase().includes(search);
        const descriptionMatch = filters.includeDescription
          ? movie.description.toLowerCase().includes(search)
          : false;

        return titleMatch || descriptionMatch;
      });
    }

    if (filters.favorite) {
      filtered = filtered.filter((movie) => meta[movie.id]?.favorite === true);
    }

    if (filters.watched) {
      filtered = filtered.filter((movie) => meta[movie.id]?.watched === true);
    }

    if (filters.hasNotes) {
      filtered = filtered.filter((movie) => {
        const notes = meta[movie.id]?.notes;
        return notes && notes.trim().length > 0;
      });
    }

    if (filters.stars !== undefined) {
      filtered = filtered.filter((movie) => {
        const rating = meta[movie.id]?.personalRating;
        if (rating == null) return false;
        return rating >= filters.stars!;
      });
    }

    filtered.sort((a, b) => {
      let aValue: number | string = '';
      let bValue: number | string = '';

      if (sortField === 'title') {
        aValue = a.title;
        bValue = b.title;
      }

      if (sortField === 'running_time') {
        aValue = Number(a.running_time);
        bValue = Number(b.running_time);
      }

      if (sortField === 'rt_score') {
        aValue = Number(a.rt_score);
        bValue = Number(b.rt_score);
      }

      if (sortField === 'personalRating') {
        aValue = meta[a.id]?.personalRating ?? 0;
        bValue = meta[b.id]?.personalRating ?? 0;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;

      return 0;
    });

    return filtered;
  }, [movies, meta, filters, sortField, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Studio Ghibli Movies</h1>

      {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}

      <FiltersBar />
      <SortSelector />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))
          : filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
      </section>
    </div>
  );
}
