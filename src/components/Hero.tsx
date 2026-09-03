import { profile } from '../data/profile';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const textRef = useReveal<HTMLDivElement>();
  const termRef = useReveal<HTMLDivElement>();

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 bg-dot-grid"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper dark:to-ink-950" />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div ref={textRef} className="reveal">
          <p className="eyebrow mb-5">available for opportunities</p>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 dark:text-paper sm:text-5xl lg:text-[3.4rem]">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-base text-signal-dim dark:text-signal-bright sm:text-lg">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-700 dark:text-ink-200">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-500 dark:text-ink-400">
            {profile.heroDescription}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              View My Projects
            </button>
            <a href={profile.links.cvUrl} download className="btn-secondary">
              Download CV
            </a>
            <button onClick={() => scrollTo('contact')} className="btn-ghost">
              Contact me →
            </button>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-ink-400 transition-colors hover:text-signal-dim dark:hover:text-signal-bright"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink-400 transition-colors hover:text-signal-dim dark:hover:text-signal-bright"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              aria-label="Send an email"
              className="text-ink-400 transition-colors hover:text-signal-dim dark:hover:text-signal-bright"
            >
              <MailIcon />
            </a>
          </div>
        </div>

      <div ref={termRef} className="reveal" style={{ transitionDelay: '120ms' }}>
  <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700 dark:border-gray-800 bg-gray-900">
    {/* شريط علوي شكل النافذة */}
    <div className="px-4 py-3 bg-gray-900/80 backdrop-blur flex items-center space-x-2 border-b border-gray-800">
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>

    {/* صورتك الشخصية */}
   <img 
  src="/profile.jpeg" 
  alt={profile.name} 
  className="w-full h-[380px] object-cover object-center"
/>
  </div>
</div>
      </div>
    </section>
  );
}
