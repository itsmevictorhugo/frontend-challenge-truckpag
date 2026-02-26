export function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
      <div className="text-5xl mb-4">🎬</div>

      <h2 className="text-xl font-semibold mb-2">Nenhum filme encontrado</h2>

      <p className="text-gray-500 max-w-md">
        Tente ajustar os filtros ou limpar a busca para ver mais resultados.
      </p>
    </div>
  );
}
