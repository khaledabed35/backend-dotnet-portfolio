import { featuredProject } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import { GithubIcon, ArrowUpRightIcon } from './Icons';

export default function FeaturedProject() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="border-y border-ink-100 bg-ink-950 py-24 dark:border-ink-800 md:py-32">
      <div className="container-page">
        <div ref={ref} className="reveal">
          <p className="font-mono text-xs tracking-wide text-signal-bright">
            <span className="opacity-60">// </span>featured project
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
              {featuredProject.name}
            </h2>
            <a
              href={featuredProject.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-ink-700 px-5 py-3 text-sm font-semibold text-paper transition-colors hover:border-signal-bright hover:text-signal-bright"
            >
              <GithubIcon className="h-4 w-4" />
              View on GitHub
            </a>
          </div>

          <p className="mt-6 max-w-3xl text-[15.5px] leading-relaxed text-ink-300">
            {featuredProject.description}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink-400">Architecture</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-200">
                {featuredProject.architecture}
              </p>

              <h3 className="mt-8 font-mono text-xs uppercase tracking-wider text-ink-400">Technologies</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-ink-700 bg-ink-900 px-2.5 py-1 font-mono text-[12px] text-ink-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {featuredProject.liveUrl && (
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-signal-bright hover:underline"
                >
                  View live demo <ArrowUpRightIcon />
                </a>
              )}
            </div>

            <div className="rounded-xl border border-ink-800 bg-ink-900/60 p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink-400">Key Features</h3>
              <ul className="mt-4 space-y-3">
                {featuredProject.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-100">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-signal-soft text-[10px] text-signal-bright">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
