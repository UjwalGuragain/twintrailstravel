import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';
import PageHero from '../components/PageHero';

export default function TrekkingPage() {
  const treks = [
    {
      slug: 'everest',
      name: 'Everest Region',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      difficulty: 'Challenging',
      duration: '11–14 days',
      altitude: 'Up to 5,364m',
      summary: 'A legendary Himalayan route with glacier views, Sherpa culture and unforgettable high-altitude adventure.',
      description:
        'The Everest trekking experience is for travelers seeking iconic mountain scenery, vast ridgelines, and the thrill of moving through some of the world’s highest terrain. From the trail to the tea houses, every section offers a different perspective of the Khumbu region.',
      highlights: ['Sherpa villages', 'Everest viewpoints', 'Glacier landscapes', 'High-altitude adventure'],
    },
    {
      slug: 'annapurna',
      name: 'Annapurna Base Camp',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      difficulty: 'Moderate to challenging',
      duration: '7–10 days',
      altitude: 'Up to 4,130m',
      summary: 'A classic mountain circuit with sweeping views, lush valleys, and unforgettable sunrise panoramas.',
      description:
        'Annapurna Base Camp is one of Nepal’s most rewarding trekking journeys, blending mountain scenery with forest trails, village stops, and dramatic high-altitude landscapes. It is ideal for travelers who want a rich mountain experience without going to extreme expedition levels.',
      highlights: ['Scenic ridgelines', 'Base camp trekking', 'Valley landscapes', 'Strong views of Annapurna'],
    },
    {
      slug: 'langtang',
      name: 'Langtang Valley',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      difficulty: 'Moderate',
      duration: '6–8 days',
      altitude: 'Up to 3,900m',
      summary: 'A quieter Himalayan route filled with alpine scenery, Tamang culture, and sweeping valley views.',
      description:
        'Langtang provides a peaceful trekking experience with dramatic mountain backdrop, beautiful rivers, and warm Himalayan villages. It is a strong choice for travelers who want a more serene yet scenic Himalayan journey.',
      highlights: ['Alpine valleys', 'Tamang villages', 'Peaceful trails', 'Strong natural scenery'],
    },
    {
      slug: 'mardi-himal',
      name: 'Mardi Himal',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      difficulty: 'Moderate',
      duration: '4–6 days',
      altitude: 'Up to 4,500m',
      summary: 'A scenic, shorter trek offering sweeping Annapurna panoramas and a rewarding ridge experience.',
      description:
        'Mardi Himal is perfect for travelers who want a shorter route with dramatic views, forested sections, and an unforgettable ridge viewpoint. It is one of the most photogenic trekking areas in the Annapurna region, offering a striking balance of accessibility and wow-factor.',
      highlights: ['Annapurna panoramas', 'Shorter trekking route', 'Forest-to-ridge trail', 'Photogenic viewpoints'],
    },
    {
      slug: 'gosaikunda',
      name: 'Gosaikunda',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      difficulty: 'Moderate to challenging',
      duration: '5–7 days',
      altitude: 'Up to 4,380m',
      summary: 'A spiritual alpine trek centered on sacred lakes, harsh mountain beauty, and memorable high-altitude scenery.',
      description:
        'Gosaikunda is a culturally significant and visually rich trek where travelers can experience prestigious alpine lakes and high Himalayan terrain. The route feels more remote and adventurous, making it a favorite for explorers looking for a true mountain challenge.',
      highlights: ['Sacred alpine lakes', 'Remote mountain trails', 'High-altitude adventure', 'Spiritual atmosphere'],
    },
  ];

  return (
    <div className="container-shell py-16 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <PageHero
          eyebrow="Trekking"
          title="Discover the Himalayas"
          description="Twin Trails helps travelers explore Nepal’s most iconic trekking routes with route guidance, practical planning, and destination expertise built around adventure, comfort, and memorable stories."
        />
      </motion.div>

      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }} className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Why trek with us</p>
            <h2 className="mt-4 text-3xl font-bold text-brand-dark sm:text-4xl">Trekking experiences shaped for real travelers</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you are looking for a classic Himalayan route, a quieter valley journey, or a spiritual alpine trek, we help plan each experience around your pace, comfort, and travel goals.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              { label: 'Routes', value: '5+' },
              { label: 'Style', value: 'Tailored' },
              { label: 'Support', value: 'Guided' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-brand-light p-5 text-center">
                <div className="text-2xl font-bold text-brand-blue">{item.value}</div>
                <div className="mt-1 text-sm text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="mt-12 grid gap-8 xl:grid-cols-2">
        {treks.map((trek, index) => (
          <motion.article
            key={trek.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img src={trek.image} alt={trek.name} className="h-64 w-full object-cover" />
            <div className="p-7">
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                <span>{trek.difficulty}</span>
                <span className="text-slate-300">•</span>
                <span>{trek.duration}</span>
                <span className="text-slate-300">•</span>
                <span>{trek.altitude}</span>
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-brand-dark">{trek.name}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{trek.summary}</p>
              <p className="mt-4 text-base leading-7 text-slate-600">{trek.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {trek.highlights.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-brand-light px-3 py-1.5 text-xs font-medium text-slate-700">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link to={`/regions/${trek.slug}`} className="inline-flex font-semibold text-brand-blue">
                  Explore this route →
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }} className="mt-12 rounded-[2rem] bg-brand-deep p-8 text-white sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Ready to trek</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Let’s plan the route that matches your adventure.</h2>
          </div>
          <ButtonLink href="https://wa.me/9863944201?text=Hello%20Twin%20Trails%20Travel%20%26%20Tours%2C%20I%20would%20like%20to%20plan%20my%20trek." external variant="primary">
            Plan Your Trek
          </ButtonLink>
        </div>
      </motion.div>
    </div>
  );
}
