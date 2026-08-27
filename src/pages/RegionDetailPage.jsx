import { useParams } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';
import PageHero from '../components/PageHero';
import RegionCard from '../components/RegionCard';
import { company } from '../data/company';
import { regions } from '../data/regions';

export default function RegionDetailPage() {
  const { slug } = useParams();
  const region = regions.find((item) => item.slug === slug);

  if (!region) {
    return (
      <div className="container-shell py-16 sm:py-20">
        <PageHero
          eyebrow="Destination"
          title="This destination is not available yet"
          description="We may add more travel destinations soon. Please contact us to plan your next trip."
        />
        <div className="mt-8">
          <ButtonLink to="/contact" variant="primary">Contact Us</ButtonLink>
        </div>
      </div>
    );
  }

  const otherRegions = regions.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <div className="pb-20">
      <section className="relative overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('${region.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/50" />

        <div className="container-shell relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">{region.category}</p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">{region.name}</h1>
            <p className="mt-5 text-lg text-slate-200">{region.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello Twin Trails Travel & Tours, I am interested in exploring ${region.name}.`)}`}
                external
                variant="primary"
              >
                Get a Quote
              </ButtonLink>
              <ButtonLink href={company.googleMaps} external variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                View Map
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Overview</p>
            <h2 className="mt-4 text-3xl font-bold text-brand-dark sm:text-4xl">Discover {region.name}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{region.overview}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <h3 className="text-2xl font-semibold text-brand-dark">Why Visit</h3>
            <ul className="mt-6 space-y-4">
              {region.whyVisit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange/10 text-xs font-bold text-brand-orange">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-shell">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Popular places</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-dark">Highlights around {region.name}</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {region.popularPlaces.map((place) => (
              <span key={place} className="rounded-full border border-slate-200 bg-brand-light px-4 py-2 text-sm font-medium text-slate-700">
                {place}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Activities</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark">Things you can do</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {region.activities.map((activity) => (
            <div key={activity} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-2xl">✦</div>
              <h3 className="text-xl font-semibold text-brand-dark">{activity}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Best time to visit</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">{region.bestTime}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Travel information</p>
            <ul className="mt-4 space-y-3 text-slate-600">
              {region.travelInfo.map((info) => (
                <li key={info} className="flex gap-3">
                  <span className="text-brand-orange">•</span>
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="rounded-3xl bg-brand-deep p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Plan your trip</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Interested in exploring {region.name}?</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <ButtonLink href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello Twin Trails Travel & Tours, I would like to plan a trip to ${region.name}.`)}`} external variant="primary">
                WhatsApp Us
              </ButtonLink>
              <ButtonLink to="/contact" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {otherRegions.length ? (
        <section className="container-shell pt-4">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">More destinations</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-dark">Explore more journeys</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {otherRegions.map((item) => (
              <RegionCard
                key={item.slug}
                name={item.name}
                category={item.category}
                description={item.description}
                image={item.image}
                href={`/regions/${item.slug}`}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
