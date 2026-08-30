import { profile } from '../data/profile';
import { timeline } from '../data/experience';
import SectionHeader from './SectionHeader';
import { useReveal } from '../hooks/useReveal';

function TimelineItem({ entry, index }: { entry: (typeof timeline)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal relative pl-10" style={{ transitionDelay: `${index * 90}ms` }}>
      <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
        <span className="h-2.5 w-2.5 rounded-full border-2 border-signal-dim bg-paper dark:border-signal-bright dark:bg-ink-950" />
      </span>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-base font-semibold text-ink-900 dark:text-paper">
          {entry.title}
        </h3>
        <span className="font-mono text-xs text-ink-400">{entry.period}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-signal-dim dark:text-signal-bright">{entry.place}</p>
      {entry.description && (
        <p className="mt-2 text-[14px] leading-relaxed text-ink-500 dark:text-ink-400">
          {entry.description}
        </p>
      )}
      <span className="mt-2 inline-block rounded border border-ink-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-400 dark:border-ink-700">
        {entry.kind}
      </span>
    </div>
  );
}

export default function Experience() {
  if (!profile.showExperience || timeline.length === 0) return null;

  return (
    <section id="experience" className="bg-paper-dim py-24 dark:bg-ink-900/40 md:py-32">
      <div className="container-page">
        <SectionHeader eyebrow="experience" title="Experience & Education" />
        <div className="relative max-w-2xl space-y-10">
          <span aria-hidden="true" className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-200 dark:bg-ink-700" />
          {timeline.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
