export default function HomePage() {
  return (
    <div className="container-shell py-16 sm:py-20">
      <section className="rounded-3xl bg-white p-8 shadow-soft sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Twin Trails Travel & Tours</p>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold text-brand-dark sm:text-5xl">
          Travel Beyond Boundaries with Twin Trails
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600">
          Your trusted partner for travel, tours, ticketing and memorable journeys across Nepal and beyond.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/9863944201?text=Hello%20Twin%20Trails%20Travel%20%26%20Tours%2C%20I%20would%20like%20to%20book%20a%20travel%20service." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-brand-orange px-6 py-3 font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-500">Book Now</a>
          <a href="/tours" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 font-semibold text-brand-dark transition hover:border-brand-blue hover:text-brand-blue">Explore Packages</a>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {['Flight Ticketing', 'Tour Packages', 'Trekking', 'Sightseeing'].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-4 inline-flex rounded-xl bg-brand-blue/10 p-3 text-brand-blue">✦</div>
            <h2 className="text-xl font-semibold text-brand-dark">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">Professional travel support designed around your plans, schedule and destination goals.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
