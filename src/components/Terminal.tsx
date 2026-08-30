import { useEffect, useRef, useState } from 'react';

export interface TerminalLine {
  prompt?: string; // e.g. '$', '>' — omit for pure output lines
  text: string;
  color?: 'default' | 'signal' | 'muted';
}

interface TerminalProps {
  title?: string;
  lines: TerminalLine[];
  typingSpeedMs?: number;
  className?: string;
  loop?: boolean;
}

/**
 * The portfolio's signature element: a small terminal window that "types"
 * out its lines. Reused across the hero, featured project, and contact
 * sections to keep a consistent developer-native motif.
 */
export default function Terminal({
  title = 'zsh',
  lines,
  typingSpeedMs = 22,
  className = '',
  loop = false,
}: TerminalProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  // Only start typing once the terminal scrolls into view.
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisibleLines(lines.map((l) => l.text));
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!started) return;
    if (lineIndex >= lines.length) {
      if (loop) {
        const resetTimeout = setTimeout(() => {
          setVisibleLines([]);
          setLineIndex(0);
          setCharIndex(0);
        }, 2600);
        return () => clearTimeout(resetTimeout);
      }
      return;
    }

    const currentLine = lines[lineIndex];
    if (charIndex <= currentLine.text.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => {
          const next = [...prev];
          next[lineIndex] = currentLine.text.slice(0, charIndex);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, typingSpeedMs);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 260);
      return () => clearTimeout(pause);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, lineIndex, charIndex, loop]);

  const colorClass = (color?: TerminalLine['color']) => {
    switch (color) {
      case 'signal':
        return 'text-signal-bright';
      case 'muted':
        return 'text-ink-400';
      default:
        return 'text-ink-100';
    }
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden rounded-xl border border-ink-700 bg-ink-950 shadow-xl shadow-black/20 ${className}`}
      role="img"
      aria-label={`Terminal window showing: ${lines.map((l) => l.text).join('. ')}`}
    >
      <div className="flex items-center gap-2 border-b border-ink-800 bg-ink-900 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="ml-2 font-mono text-[11px] text-ink-400">{title}</span>
      </div>
      <div className="min-h-[9.5rem] px-5 py-4 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <div key={i} className={colorClass(line.color)}>
            {line.prompt && <span className="mr-2 text-signal-bright">{line.prompt}</span>}
            <span>{visibleLines[i] ?? ''}</span>
            {i === lineIndex && started && (
              <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] animate-blink bg-signal-bright align-middle" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
