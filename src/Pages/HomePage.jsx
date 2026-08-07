import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';
import TrackCard from '../components/TrackCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorMessage from '../components/ErrorMessage';
import trendingIcon from '../assets/icons/trending.svg';

export default function HomePage() {
  const [tab, setTab] = useState('trending');
  const { data, loading, error } = useFetch(
    () => (tab === 'trending' ? api.getTrending('') : api.getRecent('')),
    [tab]
  );

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <img src={trendingIcon} alt="" className="w-8 h-8" />
        <h1 className="text-3xl font-bold">Découvrir</h1>
        <div className="flex ml-auto gap-2">
          <button
            onClick={() => setTab('trending')}
            className={`px-4 py-1 rounded-full glass ${tab === 'trending' ? 'bg-kaisen-cyan text-black' : ''}`}
          >
            Trending
          </button>
          <button
            onClick={() => setTab('recent')}
            className={`px-4 py-1 rounded-full glass ${tab === 'recent' ? 'bg-kaisen-cyan text-black' : ''}`}
          >
            Récents
          </button>
        </div>
      </div>

      {error && <ErrorMessage message={error} />}
      {loading && <LoadingSkeleton />}
      {data && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.results?.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      )}
    </div>
  );
}