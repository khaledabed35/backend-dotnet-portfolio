import { projects, type Project } from '../data/projects';
import SectionHeader from './SectionHeader';
import { useReveal } from '../hooks/useReveal';
import { ArrowUpRightIcon, GithubIcon } from './Icons';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <article
      ref={ref}
      className="reveal card-surface group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30"
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-100 dark:bg-ink-800">
        <img
          src={project.image}
          alt={`Preview of ${project.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-xs text-ink-400 dark:text-ink-500">
          [ project preview image ]
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-paper">
          {project.name}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-ink-500 dark:text-ink-400">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-600 dark:text-ink-300"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-dim dark:bg-signal-bright" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded border border-ink-100 px-2 py-0.5 font-mono text-[11px] text-ink-500 dark:border-ink-700 dark:text-ink-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-ink-100 pt-5 dark:border-ink-700">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 transition-colors hover:text-signal-dim dark:text-ink-200 dark:hover:text-signal-bright"
          >
            <GithubIcon className="h-4 w-4" />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink-700 transition-colors hover:text-signal-dim dark:text-ink-200 dark:hover:text-signal-bright"
            >
              Live Demo <ArrowUpRightIcon />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-sm font-medium text-signal-dim hover:underline dark:text-signal-bright"
          >
            Case Study
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="projects"
          title="Selected Projects"
          description="A few systems I've designed and built end to end — from data model to deployed API."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
