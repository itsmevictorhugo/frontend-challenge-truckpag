import { describe, it, expect, beforeEach } from 'vitest';
import { useMoviesStore } from './useMoviesStore';

describe('useMoviesStore - toggleFavorite', () => {
  beforeEach(() => {
    localStorage.clear();
    useMoviesStore.setState({
      movies: [],
      meta: {},
      loading: false,
      error: null,
      filters: {
        search: '',
        includeDescription: false,
      },
      sortField: 'title',
      sortOrder: 'asc',
    });
  });

  it('should toggle favorite inside meta', () => {
    const movieId = '1';

    const { toggleFavorite } = useMoviesStore.getState();

    toggleFavorite(movieId);

    const updatedMeta = useMoviesStore.getState().meta[movieId];

    expect(updatedMeta.favorite).toBe(true);
  });

  it('should toggle favorite back to false', () => {
    const movieId = '1';
    const { toggleFavorite } = useMoviesStore.getState();

    toggleFavorite(movieId);
    toggleFavorite(movieId);

    const updatedMeta = useMoviesStore.getState().meta[movieId];

    expect(updatedMeta.favorite).toBe(false);
  });
});
