export default function FlightTicketingPage() {
  return (
    <div className="container-shell py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Flight Ticketing</p>
        <h1 className="mt-6 text-4xl font-bold text-brand-dark sm:text-5xl">Domestic and international flight assistance</h1>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-brand-dark">Why book with Twin Trails?</h2>
          <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
            <li>• Convenient assistance for both domestic and international flights.</li>
            <li>• Professional support for suitable travel options and planning.</li>
            <li>• Flexible guidance for customer-requested flight preferences.</li>
            <li>• Travel planning support from start to finish.</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-brand-blue p-8 text-white shadow-soft">
          <h2 className="text-2xl font-semibold">Request a Flight Quote</h2>
          <p className="mt-4 text-base leading-7 text-blue-50">
            Share your route, dates and travel preferences and our team can help you find suitable options.
          </p>
          <a href="https://wa.me/9863944201?text=Hello%20Twin%20Trails%20Travel%20%26%20Tours%2C%20I%20would%20like%20a%20flight%20quote." target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-brand-blue">Request a Flight Quote</a>
        </div>
      </div>
    </div>
  );
}
