import { motion } from 'framer-motion';
import ButtonLink from '../components/ButtonLink';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import RegionCard from '../components/RegionCard';
import { featuredServices } from '../data/services';
import { regions } from '../data/regions';

const quickServices = [
  { label: 'Flight Ticketing', icon: '✈️' },
  { label: 'Tour Packages', icon: '🌍' },
  { label: 'Trekking', icon: '🏔️' },
  { label: 'Sightseeing', icon: '🏞️' },
  { label: 'Hotel Booking', icon: '🏨' },
  { label: 'Transportation', icon: '🚐' },
];

const packageHighlights = [
  'Gosaikunda Trek',
  'Everest Trek',
  'Bali Tour',
  'Pokhara + Chitwan Combo',
  'Bhutan Tour',
  'Tibet Tour',
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/80 to-slate-900/60" />

        <div className="container-shell relative py-20 sm:py-24 lg:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Twin Trails Travel & Tours</p>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Travel Beyond Boundaries with Twin Trails
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-200">
                Your Trusted Partner for Travel, Tours & Ticketing
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                Welcome to Twin Trails Travel & Tours, your reliable travel partner for memorable journeys across Nepal and beyond. We specialize in domestic and international flight ticketing, tour packages, trekking, sightseeing, transportation, hotel bookings and customized travel experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="https://wa.me/9863944201?text=Hello%20Twin%20Trails%20Travel%20%26%20Tours%2C%20I%20would%20like%20to%20book%20a%20travel%20service." external variant="primary">
                  Book Now
                </ButtonLink>
                <ButtonLink to="/tours" variant="secondary" className="bg-white/10 text-white hover:bg-white/20 hover:text-white">
                  Explore Packages
                </ButtonLink>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="rounded-2xl bg-white/10 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.28em] text-brand-orange">Popular experiences</p>
                <div className="mt-6 space-y-4">
                  {packageHighlights.map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/20 px-4 py-3 text-sm">
                      <span>{item}</span>
                      <span className="text-brand-orange">→</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container-shell -mt-8 relative z-10">
        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft md:grid-cols-3 xl:grid-cols-6">
          {quickServices.map((service) => (
            <div key={service.label} className="flex items-center gap-3 rounded-2xl bg-brand-light p-4">
              <span className="text-2xl">{service.icon}</span>
              <span className="font-medium text-brand-dark">{service.label}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="container-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
              alt="Traveler exploring Nepal mountains"
              className="h-full min-h-[380px] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="About Twin Trails"
              title="Travel Made Simple. Journeys Made Memorable."
              description="Twin Trails Travel & Tours is a travel and tourism company dedicated to providing reliable, convenient and personalized travel services. Our team supports travelers with flights, trekking, sightseeing, hotel booking and customized journeys designed around their needs."
            />
            <div className="mt-8">
              <ButtonLink to="/about" variant="primary">Learn More About Us</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our Services"
            title="Explore Our Services"
            description="Everything you need to plan, organize and enjoy your journey."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <SectionHeading
          eyebrow="Explore Nepal"
          title="Discover destinations across Nepal"
          description="From Himalayan adventures to cultural city escapes, discover the regions we help travelers explore."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {regions.map((region) => (
            <RegionCard
              key={region.slug}
              name={region.name}
              category={region.category}
              description={region.description}
              image={region.image}
              href="/tours"
            />
          ))}
        </div>
      </section>

      <section className="bg-brand-deep py-20 text-white">
        <div className="container-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Plan your trip</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Ready to begin your next journey?</h2>
              <p className="mt-4 text-lg text-slate-200">Tell us where you want to go and we will help you shape a travel plan that fits your time, budget and interests.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="https://wa.me/9863944201?text=Hello%20Twin%20Trails%20Travel%20%26%20Tours%2C%20I%20would%20like%20to%20plan%20my%20trip." external variant="primary">
                Get a Quote
              </ButtonLink>
              <ButtonLink to="/contact" variant="dark">Contact Twin Trails</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
