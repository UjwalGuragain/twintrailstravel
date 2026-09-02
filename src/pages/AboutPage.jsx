import { motion } from 'framer-motion';
import ButtonLink from '../components/ButtonLink';
import PageHero from '../components/PageHero';

const values = [
  {
    title: 'Personalized guidance',
    description: 'We listen to your pace, interests and travel goals so every itinerary feels tailored instead of generic.',
  },
  {
    title: 'Reliable support',
    description: 'From route planning to final confirmations, we stay focused on smooth coordination and practical travel decisions.',
  },
  {
    title: 'Travel with clarity',
    description: 'Clear communication, honest planning and better route logic help travelers feel calm and confident before departure.',
  },
];

export default function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="container-shell py-16 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
        <PageHero
          eyebrow="About Us"
          title="About Twin Trails Travel & Tours"
          description="A Nepal-based travel company focused on reliable travel support, flexible planning and memorable journeys for both local and international travelers."
        />
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <p className="text-lg leading-8 text-slate-600">
            Twin Trails Travel & Tours is a travel and tourism company dedicated to providing reliable, convenient and personalized travel services for guests who want memorable experiences without the stress of disjointed planning.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our major focus is on flight ticketing and tour packages, while also supporting trekking, sightseeing, transportation, hotel booking and customized travel solutions that suit different travel styles and budgets.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We believe that travel should be simple, well-organized and enjoyable. From choosing the right flight or route to planning the full holiday experience, our team keeps travelers informed, prepared and supported from the first step to the final destination.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink to="/contact" variant="primary">Contact Twin Trails</ButtonLink>
            <ButtonLink to="/services" variant="secondary">Explore Services</ButtonLink>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.18 }} className="rounded-[2rem] bg-brand-blue p-8 text-white shadow-soft">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-5 text-lg leading-8 text-blue-50">
              To provide trusted, affordable and professional travel services while creating memorable experiences for every traveler, whether they are exploring Nepal or flying to an international destination.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }} className="rounded-[2rem] bg-brand-deep p-8 text-white shadow-soft">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              To become a trusted travel partner in Nepal, connecting travelers with destinations, experiences and opportunities around the world through thoughtful planning and dependable service.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="mt-16 rounded-[2rem] bg-white p-8 shadow-soft sm:p-10">
        <p className="section-kicker">What we value</p>
        <h2 className="mt-4 text-3xl font-bold text-brand-dark sm:text-4xl">Travel planning built around trust, clarity and care</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-3xl border border-slate-200 bg-brand-light p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl text-brand-orange">✦</div>
              <h3 className="text-xl font-semibold text-brand-dark">{value.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
