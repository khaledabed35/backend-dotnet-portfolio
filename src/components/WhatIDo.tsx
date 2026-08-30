import { whatIDo } from '../data/whatIDo';
import SectionHeader from './SectionHeader';
import { useReveal } from '../hooks/useReveal';

function Card({ item, index }: { item: (typeof whatIDo)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-dim/50"
      style={{ transitionDelay: `${(index % 4) * 70}ms` }}
    >
      <span className="block h-1 w-6 rounded-full bg-signal-dim dark:bg-signal-bright" />
      <h3 className="mt-4 font-display text-base font-semibold text-ink-900 dark:text-paper">
        {item.title}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-500 dark:text-ink-400">
        {item.description}
      </p>
    </div>
  );
}

export default function WhatIDo() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader eyebrow="what i do" title="Where I Add Value" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whatIDo.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
