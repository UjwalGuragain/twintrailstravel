export default function ServiceCard({ icon, title, description, href = '/contact' }) {
  return (
    <div className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-brand-blue/20 hover:shadow-[0_24px_60px_rgba(18,63,140,0.12)]">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-2xl shadow-inner">{icon}</div>
      <h3 className="text-2xl font-semibold text-brand-dark">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
      <a href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition group-hover:text-brand-orange">
        Get a Quote <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
