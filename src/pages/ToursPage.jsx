export default function ToursPage() {
  return (
    <div className="container-shell py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Tours & Packages</p>
        <h1 className="mt-6 text-4xl font-bold text-brand-dark sm:text-5xl">Nepal and international travel experiences</h1>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[
          'Nepal Tours',
          'Trekking Packages',
          'International Tours',
          'Bike Tours',
          'Customized Packages',
          'Mountain Flights',
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <h2 className="text-2xl font-semibold text-brand-dark">{item}</h2>
            <p className="mt-3 text-base text-slate-600">Explore thoughtfully planned journeys, flexible itineraries and destination support tailored to your travel goals.</p>
            <a href="/contact" className="mt-6 inline-flex rounded-full border border-slate-200 px-4 py-2 font-semibold text-brand-blue">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
}
