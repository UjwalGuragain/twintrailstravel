import { motion } from 'framer-motion';
import ButtonLink from '../components/ButtonLink';
import PageHero from '../components/PageHero';

const flightHighlights = [
  {
    title: 'Domestic flight support',
    description: 'We help travelers compare routes between major Nepali hubs such as Kathmandu, Pokhara, Bharatpur, Bhairahawa, Janakpur and mountain access points like Lukla and Simikot.',
  },
  {
    title: 'International route planning',
    description: 'For overseas travel, we guide clients through major airlines, stopovers, baggage considerations and route timing so the ticket choice matches their actual travel needs.',
  },
  {
    title: 'Scenic and mountain flights',
    description: 'Nepal’s mountain flights are a memorable way to view the Himalayas from above, especially for travelers who want dramatic views without a long trek.',
  },
  {
    title: 'Flexible travel timing',
    description: 'We help clients align their ticketing decisions with seasons, weather, itinerary flow and personal priorities so travel feels smoother from the moment of departure.',
  },
];

const processSteps = [
  'Understand your route, budget and departure timing.',
  'Compare available flight options based on convenience and value.',
  'Recommend the most practical itinerary for your journey.',
  'Assist with the booking process and follow-up support.',
];

export default function FlightTicketingPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="container-shell py-16 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
        <PageHero
          eyebrow="Flight Ticketing"
          title="Domestic and international flight assistance"
          description="Twin Trails helps travelers organize convenient flight options, travel planning support and smart route guidance for both local and international journeys, making air travel easier to manage and more enjoyable from the start."
        />
      </motion.div>

      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }} className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
        <p className="section-kicker">Flight planning</p>
        <h2 className="mt-4 text-3xl font-bold text-brand-dark sm:text-4xl">Smart flight support for every trip style</h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
          Air travel is often the most important decision in any itinerary because it sets the pace, comfort, and practicality of the entire journey. Whether traveling for leisure, business, trekking, or a family holiday, Twin Trails helps clients review route choices carefully and choose flights that suit their real travel goals, schedule, and spending preference.
        </p>
      </motion.section>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {flightHighlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 + index * 0.07 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-xl text-brand-orange">✦</div>
            <h3 className="text-xl font-semibold text-brand-dark">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <p className="section-kicker">How we help</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark">A smoother air-travel process</h2>
          <div className="mt-6 space-y-5">
            {processSteps.map((step, idx) => (
              <div key={step} className="flex gap-4 rounded-2xl bg-brand-light p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">{idx + 1}</span>
                <p className="text-base leading-7 text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }} className="rounded-[2rem] bg-brand-deep p-8 text-white shadow-soft">
          <p className="section-kicker text-brand-orange">Why choose Twin Trails</p>
          <h2 className="mt-3 text-3xl font-bold">Travel assistance that keeps plans practical</h2>
          <ul className="mt-6 space-y-4 text-base leading-7 text-slate-200">
            <li>• Convenient options for domestic and international departures.</li>
            <li>• Support for route comparison, travel days and layover planning.</li>
            <li>• Advice designed around comfort, timing and practical value.</li>
            <li>• Better coordination for trekking, family holidays and multi-stop itineraries.</li>
          </ul>
          <div className="mt-8">
            <ButtonLink href="https://wa.me/9863944201?text=Hello%20Twin%20Trails%20Travel%20%26%20Tours%2C%20I%20would%20like%20a%20flight%20quote." external variant="secondary" className="bg-white text-brand-blue hover:text-brand-orange">
              Request a Flight Quote
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
