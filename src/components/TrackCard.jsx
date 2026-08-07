import { Link } from 'react-router-dom';
import GlassCard from './GlassCard';
import playIcon from '../assets/icons/play.svg';

export default function TrackCard({ track }) {
  return (
    <GlassCard>
      <Link to={`/music/${track.uploader?.url_slug}/${track.url_slug}`}>
        <div className="relative group">
          <img
            src={track.image || 'https://via.placeholder.com/300'}
            alt={track.title}
            className="w-full h-48 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all">
            <img src={playIcon} className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        <h3 className="mt-3 font-semibold text-lg truncate">{track.title}</h3>
        <p className="text-sm opacity-75 truncate">{track.artist || track.uploader?.name}</p>
      </Link>
    </GlassCard>
  );
}