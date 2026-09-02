import { motion } from 'framer-motion';
import ButtonLink from '../components/ButtonLink';
import PageHero from '../components/PageHero';
import { servicesCatalog } from '../data/services';

export default function ServicesPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="container-shell py-16 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
        <PageHero
          eyebrow="Our Services"
          title="Travel services designed around your journey"
          description="From flight arrangements to tailored holiday plans, Twin Trails helps travelers move smoothly from planning to arrival with practical support, strong route coordination and a personalized approach."
        />
      </motion.div>

      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }} className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-kicker">Why travel with us</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">A complete travel support system from start to finish</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether you are planning a domestic flight, a family holiday, a Himalayan trek, or a fully customized route, Twin Trails focuses on the details that make travel feel easy and memorable.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              { value: 'Flight', label: 'Support' },
              { value: 'Tours', label: 'Planning' },
              { value: 'Trips', label: 'Tailored' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-brand-light p-5 text-center">
                <div className="text-2xl font-bold text-brand-blue">{item.value}</div>
                <div className="mt-1 text-sm text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {servicesCatalog.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 + index * 0.07 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 inline-flex rounded-xl bg-brand-orange/10 p-3 text-2xl">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-brand-dark">{service.title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
            <div className="mt-6">
              <ButtonLink to={`/services/${service.slug}`} variant="secondary">Explore Service</ButtonLink>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
