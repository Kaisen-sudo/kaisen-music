import { Link } from 'react-router-dom';
import GlassCard from './GlassCard';

export default function ArtistCard({ artist }) {
  return (
    <GlassCard>
      <Link to={`/artist/${artist.url_slug}`}>
        <img
          src={artist.image || 'https://via.placeholder.com/150'}
          alt={artist.name}
          className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-kaisen-cyan"
        />
        <h3 className="mt-2 text-center font-semibold">{artist.name}</h3>
        <p className="text-center text-xs opacity-60">{artist.followers_count || 0} followers</p>
      </Link>
    </GlassCard>
  );
}