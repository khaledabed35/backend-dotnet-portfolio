import { profile } from '../data/profile';
import SectionHeader from './SectionHeader';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  const rows = [
    { label: 'Specializes in', value: profile.about.specialization },
    { label: 'Philosophy', value: profile.about.philosophy },
    { label: 'Likes building', value: profile.about.systems },
    { label: 'Career goal', value: profile.about.goal },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader eyebrow="about" title="About Me" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div ref={ref} className="reveal">
            <p className="text-[17px] leading-relaxed text-ink-700 dark:text-ink-200">
              {profile.about.intro}
            </p>
            <p className="mt-4 text-sm text-ink-400 dark:text-ink-500">
              Based in {profile.location} · {profile.availability}
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-ink-100 bg-ink-100 dark:border-ink-700 dark:bg-ink-700 sm:grid-cols-2">
            {rows.map((row) => (
              <div key={row.label} className="bg-paper p-6 dark:bg-ink-900">
                <dt className="font-mono text-xs text-signal-dim dark:text-signal-bright">{row.label}</dt>
                <dd className="mt-2 text-[14.5px] leading-relaxed text-ink-700 dark:text-ink-200">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
