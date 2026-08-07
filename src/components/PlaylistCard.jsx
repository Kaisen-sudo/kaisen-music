import { Link } from 'react-router-dom';
import GlassCard from './GlassCard';

export default function PlaylistCard({ playlist }) {
  return (
    <GlassCard>
      <Link to={`/playlist/${playlist.id}`}>
        <img
          src={playlist.image || 'https://via.placeholder.com/300'}
          alt={playlist.title}
          className="w-full h-40 object-cover rounded-xl"
        />
        <h3 className="mt-2 font-semibold">{playlist.title}</h3>
        <p className="text-sm opacity-70">{playlist.track_count} titres</p>
      </Link>
    </GlassCard>
  );
}