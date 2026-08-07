import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import logo from '../assets/icons/logo.svg';

export default function Header() {
  return (
    <header className="glass sticky top-0 z-50 px-6 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Kaisen Music" className="w-10 h-10" />
        <span className="text-2xl font-bold bg-gradient-to-r from-kaisen-purple to-kaisen-cyan bg-clip-text text-transparent">
          Kaisen Music
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-kaisen-cyan transition-colors">Accueil</Link>
        <Link to="/charts" className="hover:text-kaisen-cyan transition-colors">Charts</Link>
        <Link to="/search" className="hover:text-kaisen-cyan transition-colors">Recherche</Link>
        <Link to="/user" className="hover:text-kaisen-cyan transition-colors">Profil</Link>
      </nav>
      <div className="flex items-center gap-4">
        <SearchBar compact />
        <ThemeToggle />
      </div>
    </header>
  );
}
