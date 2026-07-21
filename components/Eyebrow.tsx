/** Mono eyebrow label with the small orange dot — the section signature. */
export function Eyebrow({
  children,
  center = false,
  onDark = false,
}: {
  children: React.ReactNode;
  center?: boolean;
  onDark?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${center ? 'justify-center' : ''}`}>
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
      <span
        className={`font-mono text-[11px] font-medium uppercase tracking-[0.12em] sm:text-xs ${
          onDark ? 'text-white/70' : 'text-ink-2'
        }`}
      >
        {children}
      </span>
    </div>
  );
}
