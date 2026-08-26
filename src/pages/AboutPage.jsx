export default function AboutPage() {
  return (
    <div className="container-shell py-16 sm:py-20">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">About Us</p>
        <h1 className="mt-6 text-4xl font-bold text-brand-dark sm:text-5xl">About Twin Trails Travel & Tours</h1>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <p className="text-lg leading-8 text-slate-600">
            Twin Trails Travel & Tours is a travel and tourism company dedicated to providing reliable, convenient and personalized travel services.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our major focus is on flight ticketing and tour packages, while also offering trekking, sightseeing, transportation, hotel booking and customized travel solutions.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We believe that travel should be simple and enjoyable. From choosing the right ticket to planning your complete holiday, our team assists you throughout your journey.
          </p>
        </div>

        <div className="rounded-3xl bg-brand-blue p-8 text-white shadow-soft">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-5 text-lg leading-8 text-blue-50">
            To provide trusted, affordable and professional travel services while creating memorable experiences for every traveler.
          </p>

          <h2 className="mt-10 text-2xl font-bold">Our Vision</h2>
          <p className="mt-5 text-lg leading-8 text-blue-50">
            To become a trusted travel partner in Nepal, connecting travelers with destinations, experiences and opportunities around the world.
          </p>
        </div>
      </div>
    </div>
  );
}
