import { useMoviesStore } from '../store/useMoviesStore';

interface RatingStarsProps {
  movieId: string;
}

export function RatingStars({ movieId }: RatingStarsProps) {
  const setPersonalRating = useMoviesStore((state) => state.setPersonalRating);

  const rating = useMoviesStore(
    (state) => state.meta[movieId]?.personalRating ?? 0,
  );

  function handleClick(value: number) {
    if (rating === value) {
      setPersonalRating(movieId, 0);
      return;
    }

    setPersonalRating(movieId, value);
  }

  return (
    <div className="flex gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleClick(star)}
          className={`text-xl transition ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}
