import { useMoviesStore } from '../store/useMoviesStore';

export function FiltersBar() {
  const filters = useMoviesStore((state) => state.filters);
  const setFilters = useMoviesStore((state) => state.setFilters);

  const { search, includeDescription, favorite, watched, hasNotes, stars } =
    filters;

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-cen">
      <input
        type="text"
        placeholder="Buscar filmes..."
        value={search}
        onChange={(e) => setFilters({ search: e.target.value })}
        className="w-full sm:w-auto border rounded px-3 py-2"
      />

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={includeDescription}
          onChange={(e) => setFilters({ includeDescription: e.target.checked })}
        />
        Buscar também na descrição
      </label>

      <div className="flex flex-wrap gap-3">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={favorite ?? false}
            onChange={(e) =>
              setFilters({ favorite: e.target.checked || undefined })
            }
          />
          Favoritos
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={watched ?? false}
            onChange={(e) =>
              setFilters({ watched: e.target.checked || undefined })
            }
          />
          Assistidos
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={hasNotes ?? false}
            onChange={(e) =>
              setFilters({ hasNotes: e.target.checked || undefined })
            }
          />
          Com notas
        </label>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">Mínimo de estrelas:</span>

        <select
          value={stars ?? ''}
          onChange={(e) =>
            setFilters({
              stars: e.target.value ? Number(e.target.value) : undefined,
            })
          }
          className="border rounded px-2 py-1"
        >
          <option value="">Todas</option>
          <option value="1">⭐ 1+</option>
          <option value="2">⭐ 2+</option>
          <option value="3">⭐ 3+</option>
          <option value="4">⭐ 4+</option>
          <option value="5">⭐ 5</option>
        </select>
      </div>
    </div>
  );
}
