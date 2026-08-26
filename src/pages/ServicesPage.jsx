export default function ServicesPage() {
  const services = [
    { title: 'Flight Ticketing', description: 'Domestic and international flight ticket booking assistance for convenient planning and smooth travel arrangements.' },
    { title: 'Tour Packages', description: 'Explore Nepal and international destinations with carefully planned tours for individuals, couples and groups.' },
    { title: 'Trekking', description: 'Travel across Himalayan routes with guided trekking solutions and tailored adventure experiences.' },
    { title: 'Nepal Sightseeing', description: 'Discover cultural heritage, natural beauty and iconic destinations through comfortable sightseeing plans.' },
    { title: 'Hotel Booking', description: 'Find suitable accommodation based on destination, travel preferences and budget requirements.' },
    { title: 'Transportation', description: 'Reliable transportation arrangements for airport transfers, sightseeing and trekking support.' },
    { title: 'Customized Travel', description: 'Create personalized itineraries based on destination, budget, duration and special preferences.' },
    { title: 'International Tours', description: 'Plan your next international holiday with flexible assistance and complete travel support.' },
  ];

  return (
    <div className="container-shell py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Our Services</p>
        <h1 className="mt-6 text-4xl font-bold text-brand-dark sm:text-5xl">Travel services designed around your journey</h1>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 inline-flex rounded-xl bg-brand-orange/10 p-3 text-brand-orange">✦</div>
            <h2 className="text-2xl font-semibold text-brand-dark">{service.title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
            <a href="/contact" className="mt-6 inline-flex font-semibold text-brand-blue">Get a Quote →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
