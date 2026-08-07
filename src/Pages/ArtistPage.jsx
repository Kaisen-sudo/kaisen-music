import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';
import TrackCard from '../components/TrackCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorMessage from '../components/ErrorMessage';
import Pagination from '../components/Pagination';

export default function ArtistPage() {
  const { slug } = useParams();
  const [page, setPage] = useState(1);
  const { data: artist, loading: artistLoading, error: artistError } = useFetch(
    () => api.getArtist(slug),
    [slug]
  );
  const { data: uploads, loading: uploadsLoading, error: uploadsError } = useFetch(
    () => api.getArtistUploads(slug, page),
    [slug, page]
  );

  if (artistError) return <ErrorMessage message={artistError} />;
  if (artistLoading) return <LoadingSkeleton />;

  return (
    <div>
      <div className="glass rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
        <img
          src={artist?.results?.image || 'https://via.placeholder.com/150'}
          alt={artist?.results?.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-kaisen-cyan"
        />
        <div>
          <h1 className="text-4xl font-bold">{artist?.results?.name}</h1>
          <p className="opacity-70 mt-2">{artist?.results?.bio}</p>
          <div className="flex gap-4 mt-3 text-sm">
            <span>{artist?.results?.followers_count} followers</span>
            <span>{artist?.results?.upload_count} uploads</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Uploads</h2>
      {uploadsError && <ErrorMessage message={uploadsError} />}
      {uploadsLoading && <LoadingSkeleton />}
      {uploads && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {uploads.results?.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      )}
      {uploads?.count && (
        <Pagination current={page} total={uploads.count} onPageChange={setPage} />
      )}
    </div>
  );
}