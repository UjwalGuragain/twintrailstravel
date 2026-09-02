import { motion } from 'framer-motion';
import ButtonLink from '../components/ButtonLink';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import RegionCard from '../components/RegionCard';
import { featuredServices } from '../data/services';
import { packages } from '../data/packages';
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

const trustHighlights = [
   { icon: '✅', title: 'Trusted planning', text: 'Carefully designed itineraries for couples, families, groups, and corporate travelers.' },
   { icon: '🧭', title: 'Local expertise', text: 'Insightful destination guidance from a team that understands Himalayan and international travel.' },
   { icon: '💬', title: 'Responsive support', text: 'Fast assistance from enquiry to departure, with a clear communication process.' },
   { icon: '🛫', title: 'End-to-end service', text: 'Flights, hotel bookings, transport, trekking, and sightseeing covered in one place.' },
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

        <div className="container-shell relative py-14 sm:py-16 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Twin Trails Travel & Tours</p>
              <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Travel Beyond Boundaries with Twin Trails
              </h1>
              <p className="mt-5 max-w-xl text-base text-slate-200 sm:text-lg">
                Your Trusted Partner for Travel, Tours & Ticketing
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Welcome to Twin Trails Travel & Tours, your reliable travel partner for memorable journeys across Nepal and beyond. We specialize in domestic and international flight ticketing, tour packages, trekking, sightseeing, transportation, hotel bookings and customized travel experiences.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
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
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="rounded-[1.5rem] bg-white/10 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.28em] text-brand-orange">Popular experiences</p>
                <div className="mt-6 space-y-4">
                  {packageHighlights.map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/20 px-4 py-3 text-sm transition hover:border-brand-orange/40 hover:bg-white/5">
                      <span>{item}</span>
                      <span className="text-brand-orange">→</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                  <div className="rounded-2xl bg-slate-900/20 p-3">
                    <div className="text-xl font-bold text-white">10+</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-300">Years</div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/20 p-3">
                    <div className="text-xl font-bold text-white">500+</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-300">Trips</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container-shell relative z-10 -mt-6">
        <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft md:grid-cols-3 xl:grid-cols-6">
          {quickServices.map((service) => (
            <div key={service.label} className="flex items-center gap-3 rounded-2xl bg-brand-light p-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-sm">
              <span className="text-2xl">{service.icon}</span>
              <span className="font-medium text-brand-dark">{service.label}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="container-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
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
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink to="/about" variant="primary">Learn More About Us</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">Talk to Us</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-deep py-20 text-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Why choose us</p>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">A travel partner built around clarity, care, and confidence.</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-200">
                We combine destination knowledge, service reliability, and responsive support to make every journey smoother from first inquiry to final return.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {trustHighlights.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/15 text-2xl">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-200">{item.text}</p>
                </div>
              ))}
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
              href={`/regions/${region.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Featured journeys"
            title="Popular packages for travelers"
            description="Browse some of Twin Trails’ most popular travel ideas before planning a personalized itinerary."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packages.slice(0, 6).map((pkg) => (
              <div key={pkg.slug} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:border-brand-blue/20 hover:shadow-[0_24px_60px_rgba(18,63,140,0.12)]">
                <div className="overflow-hidden">
                  <img src={pkg.image} alt={pkg.name} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
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
              </div>
            ))}
          </div>
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
