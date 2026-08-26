export default function TrekkingPage() {
  const treks = ['Everest', 'Everest Base Camp', 'Annapurna Base Camp', 'Langtang', 'Mardi Himal', 'Gosaikunda'];

  return (
    <div className="container-shell py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Trekking</p>
        <h1 className="mt-6 text-4xl font-bold text-brand-dark sm:text-5xl">Discover the Himalayas</h1>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {treks.map((trek) => (
          <div key={trek} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <div className="mb-4 inline-flex rounded-xl bg-brand-blue/10 p-3 text-brand-blue">⛰</div>
            <h2 className="text-2xl font-semibold text-brand-dark">{trek}</h2>
            <p className="mt-3 text-base text-slate-600">Explore trekking routes, scenic landscapes and personalized support built around your adventure goals.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
