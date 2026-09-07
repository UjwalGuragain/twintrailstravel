import { motion } from 'framer-motion';
import ButtonLink from '../components/ButtonLink';
import PageHero from '../components/PageHero';
import RegionCard from '../components/RegionCard';
import { packages, tourCategories } from '../data/packages';
import { regions } from '../data/regions';

const categoryHighlights = [
  { label: 'Nepal escapes', value: 'Cultural & scenic' },
  { label: 'Adventure routes', value: 'Trekking & biking' },
  { label: 'International journeys', value: 'Holiday planning' },
  { label: 'Tailored travel', value: 'Custom itineraries' },
];

export default function ToursPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="container-shell py-16 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
        <PageHero
          eyebrow="Tours & Packages"
          title="Nepal and international travel experiences"
          description="Discover a range of tour options designed to match your travel style, pace, season and destination goals — from mountain adventures to effortless cultural escapes."
        />
      </motion.div>

      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }} className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="section-kicker">Travel styles</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">Created for travelers who want experience, comfort and better route planning</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether you are looking for a classic Himalayan trek, a relaxed cultural holiday, a fully customized itinerary, or a scenic international getaway, Twin Trails helps organize every step in a way that feels seamless and personal.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {categoryHighlights.map((item) => (
              <div key={item.label} className="rounded-2xl bg-brand-light p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">{item.label}</div>
                <div className="mt-2 text-lg font-semibold text-brand-dark">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {tourCategories.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 + index * 0.07 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 inline-flex rounded-xl bg-brand-orange/10 p-3 text-2xl">{item.title.includes('Trekking') ? '🏔️' : item.title.includes('International') ? '🌍' : item.title.includes('Bike') ? '🚴' : item.title.includes('Customized') ? '🧭' : '✈️'}</div>
            <h2 className="text-2xl font-semibold text-brand-dark">{item.title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
            <div className="mt-6">
              <ButtonLink to={`/tours/${item.slug}`} variant="secondary">View Details</ButtonLink>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Featured packages</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">Popular journeys</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.slice(0, 6).map((pkg, index) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 + index * 0.08 }}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img src={pkg.image} alt={pkg.name} className="h-52 w-full object-cover" />
              <div className="p-6">
                <span className="inline-flex rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">{pkg.category}</span>
                <h3 className="mt-4 text-2xl font-semibold text-brand-dark">{pkg.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{pkg.description}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                  <span>{pkg.destination}</span>
                  <span>{pkg.duration}</span>
                </div>
                <div className="mt-6">
                  <ButtonLink to={`/packages/${pkg.slug}`} variant="secondary">View Details</ButtonLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
    </motion.div>
  );
}
