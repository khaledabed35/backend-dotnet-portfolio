import { useEffect, useState } from 'react';
import { ArrowUpIcon } from './Icons';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 640);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-paper text-ink-700 shadow-md transition-all duration-300 hover:border-signal-dim hover:text-signal-dim dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200 dark:hover:border-signal-bright dark:hover:text-signal-bright ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUpIcon />
    </button>
  );
}
