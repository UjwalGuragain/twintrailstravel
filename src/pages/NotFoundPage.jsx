import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="container-shell py-20">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">404</p>
        <h1 className="mt-6 text-4xl font-bold text-brand-dark">Lost Your Trail?</h1>
        <p className="mt-4 text-lg text-slate-600">We couldn’t find the page you’re looking for.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/" className="inline-flex rounded-full bg-brand-orange px-6 py-3 font-semibold text-white">Back to Home</Link>
          <Link to="/tours" className="inline-flex rounded-full border border-slate-200 px-6 py-3 font-semibold text-brand-dark">Explore Our Tours</Link>
        </div>
      </div>
    </div>
  );
}
