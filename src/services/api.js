const BASE = import.meta.env.VITE_API_BASE || '/api';

async function request(endpoint, options = {}) {
  const res = await fetch(`${BASE}${endpoint}`, options);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export const api = {
  getTrending: (genre) => request(`/music/${genre || ''}trending`),
  getRecent: (genre) => request(`/music/${genre || ''}recent`),
  getCharts: (type, period) => request(`/chart/${type}/${period}`),
  search: (query, type, page = 1, limit = 20) =>
    request(`/search?q=${query}&show=${type || 'music'}&page=${page}&limit=${limit}`),
  getArtist: (slug) => request(`/artist/${slug}`),
  getArtistUploads: (slug, page = 1) => request(`/artist/${slug}/uploads/page/${page}`),
  getMusicDetails: (artistSlug, musicSlug) =>
    request(`/music/song/${artistSlug}/${musicSlug}`),
  getPlaylist: (id) => request(`/playlist/${id}`),
  getPlaylistBySlug: (artistSlug, playlistSlug) =>
    request(`/playlist/${artistSlug}/${playlistSlug}`),
};
