import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/icons/search.svg';

export default function SearchBar({ compact = false }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex items-center ${compact ? 'w-40 md:w-60' : 'w-full max-w-xl'}`}>
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher musique, artiste..."
          className="w-full py-2 pl-10 pr-4 rounded-full glass text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-kaisen-cyan"
        />
        <img src={searchIcon} alt="" className="absolute left-3 top-2.5 w-4 h-4 opacity-60" />
      </div>
    </form>
  );
}