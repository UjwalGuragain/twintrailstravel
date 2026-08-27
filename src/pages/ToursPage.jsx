import ButtonLink from '../components/ButtonLink';
import PageHero from '../components/PageHero';
import RegionCard from '../components/RegionCard';
import { regions } from '../data/regions';

export default function ToursPage() {
  const categories = [
    { name: 'Nepal Tours', description: 'Guided travel experiences across iconic Nepal destinations and cultural highlights.' },
    { name: 'Trekking Packages', description: 'Himalayan journeys designed for travelers seeking scenic routes and adventure.' },
    { name: 'International Tours', description: 'Holiday planning support for travelers looking beyond Nepal.' },
    { name: 'Bike Tours', description: 'Flexible adventure experiences for riders wanting a memorable route-based journey.' },
    { name: 'Customized Packages', description: 'Personalized travel itineraries built around your timing, preferences and budget.' },
    { name: 'Mountain Flights', description: 'Scenic aerial experiences offering dramatic views of the Himalayan landscape.' },
  ];

  return (
    <div className="container-shell py-16 sm:py-20">
      <PageHero
        eyebrow="Tours & Packages"
        title="Nepal and international travel experiences"
        description="Discover a range of tour options designed to fit your travel style, schedule and destination goals."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((item) => (
          <div key={item.name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <h2 className="text-2xl font-semibold text-brand-dark">{item.name}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
            <div className="mt-6">
              <ButtonLink to="/contact" variant="secondary">View Details</ButtonLink>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Popular destinations</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">Explore Nepal by region</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {regions.map((region) => (
            <RegionCard
              key={region.slug}
              name={region.name}
              category={region.category}
              description={region.description}
              image={region.image}
              href={`/regions/${region.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
