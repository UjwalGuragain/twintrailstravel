export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">{eyebrow}</p> : null}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg text-slate-600">{description}</p> : null}
    </div>
  );
}
