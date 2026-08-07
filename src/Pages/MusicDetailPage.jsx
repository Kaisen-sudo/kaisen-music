import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';
import { useState, useRef } from 'react';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorMessage from '../components/ErrorMessage';
import playIcon from '../assets/icons/play.svg';
import pauseIcon from '../assets/icons/pause.svg';

export default function MusicDetailPage() {
  const { artistSlug, musicSlug } = useParams();
  const { data, loading, error } = useFetch(
    () => api.getMusicDetails(artistSlug, musicSlug),
    [artistSlug, musicSlug]
  );
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  if (error) return <ErrorMessage message={error} />;
  if (loading) return <LoadingSkeleton />;

  const track = data?.results?.[0] || data?.results;
  if (!track) return <ErrorMessage message="Morceau introuvable" />;

  return (
    <div className="max-w-2xl mx-auto glass rounded-2xl p-8 flex flex-col items-center">
      <img src={track.image} alt={track.title} className="w-64 h-64 object-cover rounded-xl shadow-2xl" />
      <h1 className="mt-6 text-3xl font-bold">{track.title}</h1>
      <p className="text-xl opacity-75">{track.artist || track.uploader?.name}</p>
      <div className="mt-6">
        {track.streaming_url ? (
          <>
            <audio ref={audioRef} src={track.streaming_url} onEnded={() => setPlaying(false)} />
            <button
              onClick={togglePlay}
              className="p-4 rounded-full bg-kaisen-cyan text-black hover:scale-110 transition-transform"
            >
              <img src={playing ? pauseIcon : playIcon} alt="" className="w-8 h-8" />
            </button>
          </>
        ) : (
          <p className="text-red-400">Aucune source disponible</p>
        )}
      </div>
      <div className="mt-4 text-sm opacity-60">{track.description?.replace(/<[^>]*>/g, '')}</div>
    </div>
  );
}