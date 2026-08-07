import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';
import TrackCard from '../components/TrackCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorMessage from '../components/ErrorMessage';

export default function PlaylistDetailPage() {
  const { playlistId } = useParams();
  const { data, loading, error } = useFetch(() => api.getPlaylist(playlistId), [playlistId]);

  if (error) return <ErrorMessage message={error} />;
  if (loading) return <LoadingSkeleton />;

  const playlist = data?.results;
  return (
    <div>
      <div className="glass rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
        <img src={playlist?.image} alt={playlist?.title} className="w-40 h-40 object-cover rounded-xl" />
        <div>
          <h1 className="text-3xl font-bold">{playlist?.title}</h1>
          <p className="opacity-70">{playlist?.track_count} titres</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Titres</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {playlist?.tracks?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}