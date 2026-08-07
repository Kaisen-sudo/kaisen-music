import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';
import TrackCard from '../components/TrackCard';
import ArtistCard from '../components/ArtistCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorMessage from '../components/ErrorMessage';
import Pagination from '../components/Pagination';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    () => api.search(query, 'music', page, 20),
    [query, page]
  );

  const handlePageChange = (p) => setPage(p);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Résultats pour "{query}"</h1>

      {error && <ErrorMessage message={error} />}
      {loading && <LoadingSkeleton />}
      {data && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.results?.map((item) =>
            item.type === 'artist' ? (
              <ArtistCard key={item.id} artist={item} />
            ) : (
              <TrackCard key={item.id} track={item} />
            )
          )}
        </div>
      )}
      {data?.count && (
        <Pagination current={page} total={data.count} onPageChange={handlePageChange} />
      )}
    </div>
  );
}