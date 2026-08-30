import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';
import ThemeToggle from './ThemeToggle';
import { MenuIcon, CloseIcon } from './Icons';

interface NavItem {
  id: string;
  label: string;
}

const baseNavItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = profile.showExperience
    ? baseNavItems
    : baseNavItems.filter((item) => item.id !== 'experience');

  const activeId = useScrollSpy(navItems.map((item) => item.id));

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  function handleNavClick(id: string) {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-ink-100 bg-paper/85 backdrop-blur-md dark:border-ink-800 dark:bg-ink-950/85'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <button
          onClick={() => handleNavClick('home')}
          className="font-display text-[15px] font-semibold tracking-tight text-ink-900 dark:text-paper"
        >
          {profile.name === '[YOUR NAME]' ? (
            <span className="font-mono text-signal-dim dark:text-signal-bright">~/portfolio</span>
          ) : (
            profile.name
          )}
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-ink-900 dark:text-paper'
                      : 'text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-paper'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-[1px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-signal-DEFAULT transition-all duration-300 ${
                      isActive ? 'w-4 opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href={profile.links.cvUrl} download className="btn-secondary !px-4 !py-2 !text-xs">
            Download CV
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink-700 dark:text-ink-200"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-ink-100 bg-paper transition-[max-height] duration-300 dark:border-ink-800 dark:bg-ink-950 md:hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`w-full rounded-md px-3 py-2.5 text-left text-sm font-medium ${
                  activeId === item.id
                    ? 'bg-signal-soft text-signal-dim dark:text-signal-bright'
                    : 'text-ink-600 dark:text-ink-300'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <a href={profile.links.cvUrl} download className="btn-secondary w-full">
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
