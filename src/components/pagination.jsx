export default function Pagination({ current, total, onPageChange }) {
  const pages = Math.ceil(total / 20);
  if (pages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-1 rounded-full glass text-sm ${
            current === i + 1 ? 'bg-kaisen-cyan text-black font-bold' : ''
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}