import { profile } from '../data/profile';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 py-10 dark:border-ink-800">
      <div className="container-page flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-ink-900 dark:text-paper">
            {profile.name}
          </p>
          <p className="font-mono text-xs text-ink-400">{profile.title}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-400 transition-colors hover:text-signal-dim dark:hover:text-signal-bright"
          >
            <GithubIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-400 transition-colors hover:text-signal-dim dark:hover:text-signal-bright"
          >
            <LinkedinIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            aria-label="Email"
            className="text-ink-400 transition-colors hover:text-signal-dim dark:hover:text-signal-bright"
          >
            <MailIcon className="h-4.5 w-4.5" />
          </a>
        </div>

        <p className="font-mono text-xs text-ink-400">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
