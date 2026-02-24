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
  personalRating?: number;
}

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
        set((state) => ({
          meta: {
            ...state.meta,
            [id]: {
              ...state.meta[id],
              watched: !state.meta[id]?.watched,
            },
          },
        })),

      toggleFavorite: (id) =>
        set((state) => ({
          meta: {
            ...state.meta,
            [id]: {
              ...state.meta[id],
              favorite: !state.meta[id]?.favorite,
            },
          },
        })),

      setNotes: (id, notes) =>
        set((state) => ({
          meta: {
            ...state.meta,
            [id]: {
              ...state.meta[id],
              notes,
            },
          },
        })),

      setPersonalRating: (id, rating) =>
        set((state) => ({
          meta: {
            ...state.meta,
            [id]: {
              ...state.meta[id],
              personalRating: rating,
            },
          },
        })),

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
