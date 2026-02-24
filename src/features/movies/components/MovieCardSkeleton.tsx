export function MovieCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow p-4 animate-pulse">
      <div className="w-full h-64 bg-gray-300 rounded" />

      <div className="mt-3 h-5 bg-gray-300 rounded w-3/4" />

      <div className="mt-2 h-4 bg-gray-200 rounded w-1/2" />

      <div className="mt-3 space-y-2">
        <div className="h-3 bg-gray-200 rounded" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />
        <div className="h-3 bg-gray-200 rounded w-4/6" />
      </div>

      <div className="mt-4 h-4 bg-gray-300 rounded w-1/3" />
    </div>
  );
}
