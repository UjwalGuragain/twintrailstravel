import { Link, NavLink } from 'react-router-dom';
import { Menu, MessageCircle, PhoneCall, MapPin, Mail, Instagram, Facebook, Music2 } from 'lucide-react';
import { company, navigation, ctaLink } from '../data/company';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Tours & Packages', to: '/tours' },
  { label: 'Flight Ticketing', to: '/flight-ticketing' },
  { label: 'Trekking', to: '/trekking' },
  { label: 'Why Choose Us', to: '/why-choose-us' },
  { label: 'Contact', to: '/contact' },
];

const services = [
  'Flight Ticketing',
  'Tour Packages',
  'Trekking',
  'Sightseeing',
  'Hotel Booking',
  'Transportation',
  'Customized Travel',
  'International Tours',
];

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: Music2,
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="container-shell flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-xl font-bold text-white shadow-soft">
              TT
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">Twin Trails</div>
              <div className="text-xs font-medium text-slate-500">Travel & Tours</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={ctaLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-500"
            >
              Get a Quote
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-20 bg-brand-deep text-slate-100">
        <div className="container-shell grid gap-10 py-12 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="mb-4 text-xl font-bold text-white">{company.name}</div>
            <p className="text-sm text-slate-300">{company.tagline}</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <PhoneCall size={16} className="mt-0.5 text-brand-orange" />
                <div>
                  <a href={`tel:${company.phone[0]}`} className="hover:text-white">{company.phone[0]}</a>
                  <br />
                  <a href={`tel:${company.phone[1]}`} className="hover:text-white">{company.phone[1]}</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-brand-orange" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-brand-orange" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-shell flex flex-col gap-4 py-5 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
            <div>{company.hours.weekday}</div>
            <div>{company.hours.saturday}</div>
            <div className="flex items-center gap-3">
              {Object.entries({ instagram: company.instagram, facebook: company.facebook, tiktok: company.tiktok }).map(
                ([key, value]) => {
                  const Icon = socialIcons[key];
                  if (!Icon) return null;
                  return (
                    <a
                      key={key}
                      href={value}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-brand-orange hover:text-brand-orange"
                      aria-label={key}
                    >
                      <Icon size={16} />
                    </a>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </footer>

      <a
        href={ctaLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
