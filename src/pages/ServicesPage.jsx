import ButtonLink from '../components/ButtonLink';
import PageHero from '../components/PageHero';

export default function ServicesPage() {
  const services = [
    { title: 'Flight Ticketing', description: 'Domestic and international flight ticket support with convenient planning and smooth travel arrangements.', icon: '✈️' },
    { title: 'Tour Packages', description: 'Explore Nepal and international destinations through expertly planned holiday experiences.', icon: '🌍' },
    { title: 'Trekking', description: 'Travel across Himalayan routes with guided trekking solutions and tailored adventure experiences.', icon: '🏔️' },
    { title: 'Nepal Sightseeing', description: 'Discover heritage, nature and iconic destinations through comfortable sightseeing plans.', icon: '🏞️' },
    { title: 'Hotel Booking', description: 'Find suitable accommodation based on destination, travel preferences and budget requirements.', icon: '🏨' },
    { title: 'Transportation', description: 'Reliable transportation arrangements for airport transfers, sightseeing and trekking support.', icon: '🚐' },
    { title: 'Customized Travel', description: 'Create personalized itineraries based on destination, budget, duration and special preferences.', icon: '🧭' },
    { title: 'International Tours', description: 'Plan your next international holiday with flexible assistance and complete travel support.', icon: '🌐' },
  ];

  return (
    <div className="container-shell py-16 sm:py-20">
      <PageHero
        eyebrow="Our Services"
        title="Travel services designed around your journey"
        description="From flight arrangements to tailored holiday plans, Twin Trails helps travelers move smoothly from planning to arrival."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 inline-flex rounded-xl bg-brand-orange/10 p-3 text-2xl">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-brand-dark">{service.title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
            <div className="mt-6">
              <ButtonLink to="/contact" variant="secondary">Get a Quote</ButtonLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
