import ButtonLink from '../components/ButtonLink';
import PageHero from '../components/PageHero';

export default function TrekkingPage() {
  const treks = ['Everest', 'Everest Base Camp', 'Annapurna Base Camp', 'Langtang', 'Mardi Himal', 'Gosaikunda'];

  return (
    <div className="container-shell py-16 sm:py-20">
      <PageHero
        eyebrow="Trekking"
        title="Discover the Himalayas"
        description="Twin Trails helps travelers explore some of Nepal’s most memorable trekking routes with route guidance, practical support and tailored planning."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {treks.map((trek) => (
          <div key={trek} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <div className="mb-4 inline-flex rounded-xl bg-brand-blue/10 p-3 text-2xl">⛰</div>
            <h2 className="text-2xl font-semibold text-brand-dark">{trek}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">Explore trekking routes, scenic landscapes and personalized support built around your adventure goals.</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <ButtonLink href="https://wa.me/9863944201?text=Hello%20Twin%20Trails%20Travel%20%26%20Tours%2C%20I%20would%20like%20to%20plan%20my%20trek." external variant="primary">
          Plan Your Trek
        </ButtonLink>
      </div>
    </div>
  );
}
