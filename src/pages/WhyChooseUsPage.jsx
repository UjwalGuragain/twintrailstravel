import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

export default function WhyChooseUsPage() {
  const features = [
    ['Reliable Service', 'We focus on providing dependable and professional travel services that keep your plans organized and easy to trust.'],
    ['Competitive Pricing', 'We help you find suitable travel options according to your budget without compromising on comfort or practicality.'],
    ['Personalized Assistance', 'Every traveler has different needs, so we shape each recommendation around your route, timing and travel preferences.'],
    ['Complete Travel Support', 'From flight tickets to tours, hotels and transportation, we help organize every part of the journey from start to finish.'],
    ['Easy Booking', 'Simple and convenient booking support for both domestic and international travel, with a focus on clarity and smooth coordination.'],
    ['Travel with Confidence', 'Your journey matters to us. We are committed to making your travel experience smooth, comfortable and memorable.'],
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="container-shell py-16 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
        <PageHero
          eyebrow="Why Choose Us"
          title="Why Choose Twin Trails?"
          description="We believe good travel planning should feel professional, personal and straightforward from the very beginning, with guidance that helps travelers feel prepared and confident."
        />
      </motion.div>

      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }} className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
        <p className="section-kicker">Our promise</p>
        <h2 className="mt-4 text-3xl font-bold text-brand-dark sm:text-4xl">Travel support that feels thoughtful, practical and dependable</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Great travel experiences are rarely built by chance. They happen when the route is planned carefully, the support is responsive, and the traveler feels guided rather than pressured. At Twin Trails, we focus on creating that sense of confidence from the first inquiry to the final return home.
        </p>
      </motion.section>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map(([title, description], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 + index * 0.07 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft"
          >
            <div className="mb-4 inline-flex rounded-xl bg-brand-orange/10 p-3 text-brand-orange">✓</div>
            <h2 className="text-2xl font-semibold text-brand-dark">{title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
