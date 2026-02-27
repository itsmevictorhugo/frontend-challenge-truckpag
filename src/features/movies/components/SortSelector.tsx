import {
  useMoviesStore,
  type SortField,
  type SortOrder,
} from '../store/useMoviesStore';

export function SortSelector() {
  const sortField = useMoviesStore((state) => state.sortField);
  const sortOrder = useMoviesStore((state) => state.sortOrder);
  const setSort = useMoviesStore((state) => state.setSort);

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 flex flex-col sm:flex-row gap-3 sm:items-center">
      <span className="text-sm font-medium">Ordenar por:</span>

      <select
        value={sortField}
        onChange={(e) => setSort(e.target.value as SortField, sortOrder)}
        className="border rounded px-2 py-1"
      >
        <option value="title">Título</option>
        <option value="running_time">Duração</option>
        <option value="rt_score">Pontuação</option>
        <option value="personalRating">Minha avaliação</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSort(sortField, e.target.value as SortOrder)}
        className="w-full sm:w-auto border rounded px-2 py-1"
      >
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  );
}
