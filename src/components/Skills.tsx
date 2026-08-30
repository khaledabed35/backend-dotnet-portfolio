import { skillCategories } from '../data/skills';
import SectionHeader from './SectionHeader';
import { useReveal } from '../hooks/useReveal';

function SkillCard({ category, index }: { category: (typeof skillCategories)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal card-surface group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-dim/50 hover:shadow-md dark:hover:border-signal-bright/40"
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <h3 className="font-display text-base font-semibold text-ink-900 dark:text-paper">{category.title}</h3>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-500 dark:text-ink-400">
        {category.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-ink-100 bg-ink-50 px-2.5 py-1 font-mono text-[12px] text-ink-600
              transition-colors group-hover:border-signal-dim/30
              dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-paper-dim py-24 dark:bg-ink-900/40 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="skills"
          title="Technical Skills"
          description="Tools and concepts I reach for regularly, grouped by where they sit in a backend system."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
