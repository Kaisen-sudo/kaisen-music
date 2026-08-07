export default function LoadingSkeleton({ type = 'track', count = 4 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="glass rounded-2xl p-4 animate-pulse">
          <div className="bg-gray-600 h-40 rounded-xl"></div>
          <div className="mt-3 h-4 bg-gray-600 rounded w-3/4"></div>
          <div className="mt-2 h-3 bg-gray-600 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}