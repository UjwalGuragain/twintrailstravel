export default function RegionCard({ name, category, description, image, href = '/tours' }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden">
        <img src={image} alt={name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <span className="inline-flex rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          {category}
        </span>
        <h3 className="mt-4 text-2xl font-semibold text-brand-dark">{name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        <a href={href} className="mt-5 inline-flex font-semibold text-brand-blue">
          Explore →
        </a>
      </div>
    </article>
  );
}
