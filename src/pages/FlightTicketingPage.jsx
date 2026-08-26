import ButtonLink from '../components/ButtonLink';
import PageHero from '../components/PageHero';

export default function FlightTicketingPage() {
  return (
    <div className="container-shell py-16 sm:py-20">
      <PageHero
        eyebrow="Flight Ticketing"
        title="Domestic and international flight assistance"
        description="Twin Trails helps travelers organize convenient flight options, travel planning support and route guidance for both local and international journeys."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-brand-dark">Domestic Flights</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">Support for travelers planning local routes and regional connections with a focus on convenience and availability.</p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-brand-dark">International Flights</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">Travel assistance for international itineraries, route selection and itinerary planning based on your travel needs.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-brand-dark">Mountain / Scenic Flights</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">Options for scenic aerial experiences that showcase Nepal’s dramatic landscapes from above.</p>
        </div>

        <div className="rounded-3xl bg-brand-blue p-8 text-white shadow-soft">
          <h2 className="text-2xl font-semibold">Why Book Through Twin Trails?</h2>
          <ul className="mt-5 space-y-3 text-base leading-7 text-blue-50">
            <li>• Convenient assistance for domestic and international travel.</li>
            <li>• Professional support and suitable flight options.</li>
            <li>• Travel planning support tailored to your route and schedule.</li>
          </ul>
          <div className="mt-8">
            <ButtonLink href="https://wa.me/9863944201?text=Hello%20Twin%20Trails%20Travel%20%26%20Tours%2C%20I%20would%20like%20a%20flight%20quote." external variant="secondary" className="bg-white text-brand-blue hover:text-brand-orange">
              Request a Flight Quote
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
