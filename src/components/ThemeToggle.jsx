import { useTheme } from '../context/ThemeContext';
import sunIcon from '../assets/icons/sun.svg';
import moonIcon from '../assets/icons/moon.svg';

export default function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:scale-110 transition-transform"
      aria-label="Changer le thème"
    >
      <img src={dark ? sunIcon : moonIcon} alt="" className="w-5 h-5" />
    </button>
  );
}