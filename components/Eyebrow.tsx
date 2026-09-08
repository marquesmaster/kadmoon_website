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
      <span aria-hidden className="h-1.5 w-6 rounded-full bg-accent" />
      <span
        className={`font-display text-[13px] font-semibold uppercase tracking-[0.16em] ${
          onDark ? 'text-white/80' : 'text-navy'
        }`}
      >
        {children}
      </span>
    </div>
  );
}
