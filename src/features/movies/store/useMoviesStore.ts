import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Movie } from '../types/movie';

export type SortField =
  | 'title'
  | 'running_time'
  | 'personalRating'
  | 'rt_score';
export type SortOrder = 'asc' | 'desc';

interface MovieMeta {
  watched?: boolean;
  favorite?: boolean;
  notes?: string;
  personalRating?: number | null;
}

const defaultMeta: MovieMeta = {
  watched: false,
  favorite: false,
  notes: '',
  personalRating: null,
};

const getMeta = (state: MoviesState, id: string): MovieMeta => {
  return state.meta[id] ?? defaultMeta;
};

interface Filters {
  search: string;
  includeDescription: boolean;
  watched?: boolean;
  favorite?: boolean;
  hasNotes?: boolean;
  stars?: number;
}

interface MoviesState {
  movies: Movie[];
  meta: Record<string, MovieMeta>;

  loading: boolean;
  error: string | null;

  filters: Filters;
  sortField: SortField;
  sortOrder: SortOrder;

  setMovies: (movies: Movie[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;

  toggleWatched: (id: string) => void;
  toggleFavorite: (id: string) => void;

  setNotes: (id: string, notes: string) => void;
  setPersonalRating: (id: string, rating: number) => void;

  setFilters: (filters: Partial<Filters>) => void;

  setSort: (field: SortField) => void;

  getFilteredAndSortedMovies: () => Movie[];
}

export const useMoviesStore = create<MoviesState>()(
  persist(
    (set) => ({
      movies: [],
      meta: {},

      loading: true,
      error: null,

      filters: {
        search: '',
        includeDescription: false,
      },

      sortField: 'title',
      sortOrder: 'asc',

      setMovies: (movies) => set({ movies }),

      setLoading: (loading) => set({ loading }),

      setError: (error) => set({ error }),

      toggleWatched: (id) =>
        set((state) => {
          const current = getMeta(state, id);

          return {
            meta: {
              ...state.meta,
              [id]: {
                ...current,
                watched: !current.watched,
              },
            },
          };
        }),

      toggleFavorite: (id) =>
        set((state) => {
          const current = getMeta(state, id);
          return {
            meta: {
              ...state.meta,
              [id]: {
                ...current,
                favorite: !current.favorite,
              },
            },
          };
        }),

      setNotes: (id, notes) =>
        set((state) => {
          const current = getMeta(state, id);
          return {
            meta: {
              ...state.meta,
              [id]: {
                ...current,
                notes,
              },
            },
          };
        }),

      setPersonalRating: (id, rating) =>
        set((state) => {
          const current = getMeta(state, id);
          return {
            meta: {
              ...state.meta,
              [id]: {
                ...current,
                personalRating: rating,
              },
            },
          };
        }),

      setFilters: (filters) =>
        set((state) => ({
          filters: { ...state.filters, ...filters },
        })),

      setSort: (field) =>
        set((state) => ({
          sortField: field,
          sortOrder:
            state.sortField === field && state.sortOrder === 'asc'
              ? 'desc'
              : 'asc',
        })),

      getFilteredAndSortedMovies: () => {
        const state = useMoviesStore.getState();
        const { movies, meta, filters, sortField, sortOrder } = state;
        let result = [...movies];

        if (filters.search.trim()) {
          const term = filters.search.toLowerCase();
          result = result.filter((movie) => {
            const titleMatch = movie.title.toLowerCase().includes(term);
            if (filters.includeDescription) {
              const descMatch = movie.description.toLowerCase.includes(term);
              return titleMatch || descMatch;
            }
            return titleMatch;
          });
        }

        result.sort((a, b) => {
          const getValue = (movie: Movie) => {
            const m = meta[movie.id];
            if (sortField === 'personalRating') {
              return m?.personalRating ?? 0;
            }
            return Number(movie[sortField] ?? 0);
          };

          const valueA = getValue(a);
          const valueB = getValue(b);

          if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
          if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;

          return 0;
        });
        return result;
      },
    }),
    {
      name: 'movies-storage',
      partialize: (state) => ({
        meta: state.meta,
        filters: state.filters,
        sortField: state.sortField,
        sortOrder: state.sortOrder,
      }),
    },
  ),
);
