import { useEffect, useState } from 'react';
import { githubConfig } from '../data/github';
import SectionHeader from './SectionHeader';
import { useReveal } from '../hooks/useReveal';
import { GithubIcon, ArrowUpRightIcon } from './Icons';

interface LiveStats {
  public_repos: number;
  followers: number;
}

export default function GithubActivity() {
  const ref = useReveal<HTMLDivElement>();
  const [liveStats, setLiveStats] = useState<LiveStats | null>(null);

  useEffect(() => {
    if (!githubConfig.enableLiveStats) return;
    let cancelled = false;

    fetch(`https://api.github.com/users/${githubConfig.username}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data) {
          setLiveStats({ public_repos: data.public_repos, followers: data.followers });
        }
      })
      .catch(() => {
        // Fail silently — the section still renders featured repos without stats.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="activity"
          title="GitHub"
          description="A few repositories I'd point you to first. See the full profile for everything else."
        />

        <div ref={ref} className="reveal">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-ink-100 bg-paper-dim/60 p-5 dark:border-ink-700 dark:bg-ink-900/60">
            <div className="flex items-center gap-3">
              <GithubIcon className="h-6 w-6 text-ink-700 dark:text-ink-200" />
              <div>
                <p className="font-medium text-ink-900 dark:text-paper">@{githubConfig.username}</p>
                {liveStats ? (
                  <p className="font-mono text-xs text-ink-400">
                    {liveStats.public_repos} public repos · {liveStats.followers} followers
                  </p>
                ) : (
                  <p className="font-mono text-xs text-ink-400">public profile & repository history</p>
                )}
              </div>
            </div>
            <a
              href={`https://github.com/${githubConfig.username}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-signal-dim hover:underline dark:text-signal-bright"
            >
              View full profile <ArrowUpRightIcon />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {githubConfig.featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="card-surface group block p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal-dim/50"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-medium text-ink-900 dark:text-paper">
                    {repo.name}
                  </span>
                  <ArrowUpRightIcon className="h-3.5 w-3.5 text-ink-300 transition-colors group-hover:text-signal-dim dark:group-hover:text-signal-bright" />
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-500 dark:text-ink-400">
                  {repo.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
