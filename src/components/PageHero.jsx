export default function PageHero({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">{eyebrow}</p>
      ) : null}
      <h1 className="mt-5 text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">{title}</h1>
      {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}
