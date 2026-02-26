import type { Movie } from '../types/movie';
import { useMoviesStore } from '../store/useMoviesStore';
import { RatingStars } from './RatingStars';
import { HighlightedText } from './HighlightedText';
import { toast } from 'sonner';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const toggleFavorite = useMoviesStore((state) => state.toggleFavorite);
  const toggleWatched = useMoviesStore((state) => state.toggleWatched);
  const meta = useMoviesStore((state) => state.meta[movie.id]);
  const isFavorite = meta?.favorite ?? false;
  const isWatched = meta?.watched ?? false;
  const setNotes = useMoviesStore((state) => state.setNotes);
  const notes = meta?.notes ?? '';
  const filters = useMoviesStore((state) => state.filters);

  const handleToggleFavorite = () => {
    const next = !isFavorite;
    toggleFavorite(movie.id);

    toast.success(next ? 'Adicionado aos favoritos' : 'Removido dos favoritos');
  };

  const handleToggleWatched = () => {
    const nextValue = !isWatched;

    toggleWatched(movie.id);

    toast.success(
      nextValue ? 'Marcado como assistido' : 'Marcado como não assistido',
    );
  };

  return (
    <article className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <img
        src={movie.image}
        alt={`Poster do filme ${movie.title}`}
        className="w-full h-64 object-cover rounded"
      />

      <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>

      <p className="text-sm text-gray-600">
        {movie.release_date} • {movie.running_time} min
      </p>

      <p className="text-sm mt-2 line-clamp-3">
        {filters.includeDescription ? (
          <HighlightedText
            text={movie.description}
            highlight={filters.search}
          />
        ) : (
          movie.description
        )}
      </p>

      <ul>
        <li className="mt-3 text-xs text-gray-500">
          Director: {movie.director}
        </li>
        <li className="text-xs text-gray-500">Producer: {movie.producer}</li>
      </ul>

      <div className="mt-2 font-semibold">⭐ Score: {movie.rt_score}</div>

      <RatingStars movieId={movie.id} />
      <div className="flex gap-2 mt-3">
        <button
          onClick={handleToggleFavorite}
          className={`px-3 py-1 rounded-md text-sm transition-colors duration-200 ${
            isFavorite
              ? 'bg-yellow-300 hover:bg-yellow-400 text-black'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          ❤️ Favorito
        </button>

        <button
          onClick={handleToggleWatched}
          className={`px-3 py-1 rounded-md text-sm transition-colors duration-200 ${
            isWatched
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          👁️ Assistido
        </button>
      </div>
      <textarea
        placeholder="Suas anotações..."
        value={notes}
        onChange={(e) => setNotes(movie.id, e.target.value)}
        className="w-full mt-3 p-2 border rounded-md text-sm"
      />
    </article>
  );
}
