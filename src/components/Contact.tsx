import { useState, type FormEvent } from 'react';
import { profile } from '../data/profile';
import { useReveal } from '../hooks/useReveal';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your backend, a form service (e.g. Formspree), or an
    // ASP.NET Core minimal API endpoint — this just simulates success.
    setStatus('sent');
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-page">
        <div ref={ref} className="reveal grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-3">contact</p>
            <h2 className="section-heading">Let's Build Something Great</h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-500 dark:text-ink-300">
              If you have a project, opportunity, or simply want to talk about software
              development, feel free to reach out.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.links.email}`}
                className="flex items-center gap-3 text-sm font-medium text-ink-700 transition-colors hover:text-signal-dim dark:text-ink-200 dark:hover:text-signal-bright"
              >
                <MailIcon className="h-4 w-4" /> {profile.links.email}
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-ink-700 transition-colors hover:text-signal-dim dark:text-ink-200 dark:hover:text-signal-bright"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-ink-700 transition-colors hover:text-signal-dim dark:text-ink-200 dark:hover:text-signal-bright"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-8">
            {status === 'sent' ? (
              <div className="flex flex-col items-start gap-2 py-10 font-mono text-sm">
                <span className="text-signal-dim dark:text-signal-bright">$ message --sent</span>
                <p className="text-ink-500 dark:text-ink-300">
                  Thanks — your message has been queued. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-500 dark:text-ink-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-ink-200 bg-transparent px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-signal-dim dark:border-ink-700 dark:text-paper dark:placeholder:text-ink-600 dark:focus:border-signal-bright"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-500 dark:text-ink-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-ink-200 bg-transparent px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-signal-dim dark:border-ink-700 dark:text-paper dark:placeholder:text-ink-600 dark:focus:border-signal-bright"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-500 dark:text-ink-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me a bit about what you're building..."
                    className="w-full resize-none rounded-lg border border-ink-200 bg-transparent px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-signal-dim dark:border-ink-700 dark:text-paper dark:placeholder:text-ink-600 dark:focus:border-signal-bright"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
