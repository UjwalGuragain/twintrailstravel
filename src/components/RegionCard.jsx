import { Link } from 'react-router-dom';

export default function RegionCard({ name, category, description, image, href = '/tours' }) {
  const content = (
    <>
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/5 to-transparent" />
      </div>
      <div className="p-6">
        <span className="inline-flex rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          {category}
        </span>
        <h3 className="mt-4 text-2xl font-semibold text-brand-dark">{name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-blue">
          Explore <span aria-hidden="true">→</span>
        </span>
      </div>
    </>
  );

  if (href.startsWith('/')) {
    return (
      <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:border-brand-blue/20 hover:shadow-[0_24px_60px_rgba(18,63,140,0.12)]">
        <Link to={href} className="block h-full">
          {content}
        </Link>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:border-brand-blue/20 hover:shadow-[0_24px_60px_rgba(18,63,140,0.12)]">
      <a href={href} className="block h-full">
        {content}
      </a>
    </article>
  );
}
