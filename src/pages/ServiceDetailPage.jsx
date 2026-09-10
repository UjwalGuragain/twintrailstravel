import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';
import PageHero from '../components/PageHero';
import { servicesCatalog } from '../data/services';
import { company } from '../data/company';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesCatalog.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="container-shell py-16 sm:py-20">
        <PageHero
          eyebrow="Service"
          title="This service page is not available yet"
          description="Please contact Twin Trails for personalized travel planning and the latest service availability."
        />
        <div className="mt-8">
          <ButtonLink to="/contact" variant="primary">Contact Us</ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <div className="container-shell py-16 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <PageHero
          eyebrow="Our Services"
          title={service.title}
          description={service.description}
        />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Service overview</p>
        <p className="mt-4 text-lg leading-8 text-slate-600">{service.intro}</p>
      </motion.section>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {service.sections.map((section, index) => (
          <motion.div
            key={section.heading}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-brand-dark">{section.heading}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{section.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.18 }}
        className="mt-10 rounded-3xl bg-brand-deep p-8 text-white shadow-soft"
      >
        <h2 className="text-3xl font-bold">Why choose Twin Trails for this service?</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-3 text-base text-slate-200">
              <span className="text-brand-orange">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello Twin Trails Travel & Tours, I would like to know more about ${service.title}.`)}`} external variant="primary">
            Get a Quote
          </ButtonLink>
          <ButtonLink to="/contact" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white">
            Contact Us
          </ButtonLink>
        </div>
      </motion.div>
    </div>
  );
}
