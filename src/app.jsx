import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ChartsPage from './pages/ChartsPage';
import SearchPage from './pages/SearchPage';
import ArtistPage from './pages/ArtistPage';
import MusicDetailPage from './pages/MusicDetailPage';
import PlaylistDetailPage from './pages/PlaylistDetailPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/charts" element={<ChartsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/artist/:slug" element={<ArtistPage />} />
          <Route path="/music/:artistSlug/:musicSlug" element={<MusicDetailPage />} />
          <Route path="/playlist/:playlistId" element={<PlaylistDetailPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;