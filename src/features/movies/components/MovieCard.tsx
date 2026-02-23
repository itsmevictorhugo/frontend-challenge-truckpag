import type { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
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

      <p className="text-sm mt-2 line-clamp-3">{movie.description}</p>

      <ul>
        <li className="mt-3 text-xs text-gray-500">Director: {movie.director}</li>
        <li className="text-xs text-gray-500">Producer: {movie.producer}</li>
      </ul>

      <div className="mt-2 font-semibold">⭐ Score: {movie.rt_score}</div>
    </article>
  );
}
