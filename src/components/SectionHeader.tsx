import { useReveal } from '../hooks/useReveal';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">{description}</p>
      )}
    </div>
  );
}
