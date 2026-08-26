export default function WhyChooseUsPage() {
  const features = [
    ['Reliable Service', 'We focus on providing dependable and professional travel services.'],
    ['Competitive Pricing', 'We help you find suitable travel options according to your budget.'],
    ['Personalized Assistance', 'Every traveler has different needs. We provide travel solutions based on your requirements.'],
    ['Complete Travel Support', 'From flight tickets to tours, hotels and transportation, we help organize your journey from start to finish.'],
    ['Easy Booking', 'Simple and convenient booking assistance for both domestic and international travel.'],
    ['Travel with Confidence', 'Your journey matters to us. We are committed to making your travel experience smooth, comfortable and memorable.'],
  ];

  return (
    <div className="container-shell py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Why Choose Us</p>
        <h1 className="mt-6 text-4xl font-bold text-brand-dark sm:text-5xl">Why Choose Twin Trails?</h1>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map(([title, description]) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <div className="mb-4 inline-flex rounded-xl bg-brand-orange/10 p-3 text-brand-orange">✓</div>
            <h2 className="text-2xl font-semibold text-brand-dark">{title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
