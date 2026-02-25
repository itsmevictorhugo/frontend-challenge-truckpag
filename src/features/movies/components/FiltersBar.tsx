import { useMoviesStore } from '../store/useMoviesStore';

export function FiltersBar() {
  const filters = useMoviesStore((state) => state.filters);
  const setFilters = useMoviesStore((state) => state.setFilters);

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 flex flex-col gap-3">
      <input
        type="text"
        placeholder="Buscar filmes..."
        value={filters.search}
        onChange={(e) => setFilters({ search: e.target.value })}
        className="border rounded px-3 py-2"
      />

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={filters.includeDescription}
          onChange={(e) => setFilters({ includeDescription: e.target.checked })}
        />
        Buscar também na descrição
      </label>

      <div className="flex flex-wrap gap-3">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={filters.favorite ?? false}
            onChange={(e) =>
              setFilters({ favorite: e.target.checked || undefined })
            }
          />
          Favoritos
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={filters.watched ?? false}
            onChange={(e) =>
              setFilters({ watched: e.target.checked || undefined })
            }
          />
          Assistidos
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={filters.hasNotes ?? false}
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
          value={filters.stars ?? ''}
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
