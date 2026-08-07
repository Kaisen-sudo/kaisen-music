import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';
import TrackCard from '../components/TrackCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorMessage from '../components/ErrorMessage';
import chartIcon from '../assets/icons/chart.svg';

export default function ChartsPage() {
  const [type, setType] = useState('songs');
  const [period, setPeriod] = useState('weekly');
  const { data, loading, error } = useFetch(
    () => api.getCharts(type, period),
    [type, period]
  );

  return (
    <div>
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <img src={chartIcon} alt="" className="w-8 h-8" />
        <h1 className="text-3xl font-bold">Charts</h1>
        <div className="flex gap-2">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-transparent glass px-3 py-1 rounded-full"
          >
            <option value="songs">Sons</option>
            <option value="albums">Albums</option>
            <option value="playlists">Playlists</option>
          </select>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="bg-transparent glass px-3 py-1 rounded-full"
          >
            <option value="daily">Jour</option>
            <option value="weekly">Semaine</option>
            <option value="monthly">Mois</option>
            <option value="yearly">Année</option>
          </select>
        </div>
      </div>

      {error && <ErrorMessage message={error} />}
      {loading && <LoadingSkeleton />}
      {data && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.results?.map((item) => (
            <TrackCard key={item.id} track={item} />
          ))}
        </div>
      )}
    </div>
  );
}