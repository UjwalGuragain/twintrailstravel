import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle, PhoneCall, MapPin, Mail, Instagram, Facebook, Music2 } from 'lucide-react';
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

const footerServices = [
  'Flight Ticketing',
  'Tour Packages',
  'Trekking',
  'Sightseeing',
  'Hotel Booking',
  'Transportation',
  'Customized Travel',
  'International Tours',
];

const servicesMenu = [
  { label: 'Flight Ticketing', to: '/flight-ticketing' },
  { label: 'Tour Packages', to: '/tours' },
  { label: 'Trekking', to: '/trekking' },
  { label: 'Nepal Sightseeing', to: '/services' },
  { label: 'Hotel Booking', to: '/services' },
  { label: 'Transportation', to: '/services' },
  { label: 'Customized Travel', to: '/services' },
  { label: 'International Tours', to: '/tours' },
  { label: 'Bike Tours', to: '/tours' },
  { label: 'Mountain Flights', to: '/tours' },
];

const toursMenu = [
  { label: 'Nepal Tours', to: '/tours' },
  { label: 'Trekking Packages', to: '/tours' },
  { label: 'International Tours', to: '/tours' },
  { label: 'Bike Tours', to: '/tours' },
  { label: 'Customized Packages', to: '/tours' },
];

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: Music2,
};

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState('');

  useEffect(() => {
    setMobileOpen(false);
    setOpenSection('');
  }, [location.pathname]);

  const toggleSection = (section) => {
    setOpenSection((current) => (current === section ? '' : section));
  };

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
            <NavLink to="/" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'}`}>About Us</NavLink>

            <div className="group relative">
              <button type="button" className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors hover:text-brand-blue">
                Our Services <ChevronDown size={15} />
              </button>
              <div className="invisible absolute left-0 top-full z-30 w-64 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100">
                {servicesMenu.map((item) => (
                  <Link key={item.label} to={item.to} className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-brand-blue">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="group relative">
              <button type="button" className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors hover:text-brand-blue">
                Tours & Packages <ChevronDown size={15} />
              </button>
              <div className="invisible absolute left-0 top-full z-30 w-60 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100">
                {toursMenu.map((item) => (
                  <Link key={item.label} to={item.to} className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-brand-blue">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/flight-ticketing" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'}`}>Flight Ticketing</NavLink>
            <NavLink to="/trekking" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'}`}>Trekking</NavLink>
            <NavLink to="/why-choose-us" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'}`}>Why Choose Us</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'}`}>Contact Us</NavLink>
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
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="container-shell py-4">
              <div className="space-y-1">
                <NavLink to="/" className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Home</NavLink>
                <NavLink to="/about" className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">About Us</NavLink>

                <button type="button" onClick={() => toggleSection('services')} className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Our Services <ChevronDown size={16} className={openSection === 'services' ? 'rotate-180 transition' : 'transition'} />
                </button>
                {openSection === 'services' ? (
                  <div className="ml-3 space-y-1 border-l border-slate-200 pl-3">
                    {servicesMenu.map((item) => (
                      <Link key={item.label} to={item.to} className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-blue">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}

                <button type="button" onClick={() => toggleSection('tours')} className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Tours & Packages <ChevronDown size={16} className={openSection === 'tours' ? 'rotate-180 transition' : 'transition'} />
                </button>
                {openSection === 'tours' ? (
                  <div className="ml-3 space-y-1 border-l border-slate-200 pl-3">
                    {toursMenu.map((item) => (
                      <Link key={item.label} to={item.to} className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-blue">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}

                {navigation.slice(4).map((item) => (
                  <NavLink key={item.to} to={item.to} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <a
                href={ctaLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white"
              >
                Get a Quote
              </a>
            </div>
          </div>
        ) : null}
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
              {footerServices.map((service) => (
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
