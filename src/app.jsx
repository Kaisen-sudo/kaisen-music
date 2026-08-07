import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import ChartsPage from './pages/ChartsPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import ArtistPage from './pages/ArtistPage.jsx';
import MusicDetailPage from './pages/MusicDetailPage.jsx';
import PlaylistDetailPage from './pages/PlaylistDetailPage.jsx';
import UserPage from './pages/UserPage.jsx';

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
