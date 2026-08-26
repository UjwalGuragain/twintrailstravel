import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const defaultMeta = {
  title: 'Twin Trails Travel & Tours | Nepal Travel, Tours & Flight Ticketing',
  description:
    'Twin Trails Travel & Tours Pvt Ltd offers flight ticketing, tours, trekking, sightseeing, hotel booking, transportation and customized travel services from Kathmandu, Nepal.',
  robots: 'index, follow',
};

const pageMeta = {
  '/': defaultMeta,
  '/about': {
    title: 'About Twin Trails Travel & Tours | Kathmandu, Nepal',
    description:
      'Learn about Twin Trails Travel & Tours Pvt Ltd, our mission, vision and travel services across Nepal and international destinations.',
    robots: 'index, follow',
  },
  '/services': {
    title: 'Travel Services in Nepal | Twin Trails Travel & Tours',
    description:
      'Explore Twin Trails travel services including flight ticketing, tour packages, trekking, sightseeing, hotel booking, transportation and customized travel.',
    robots: 'index, follow',
  },
  '/tours': {
    title: 'Tours & Packages | Twin Trails Travel & Tours',
    description:
      'Discover Nepal tours, trekking packages, international tours, bike tours, mountain flights and customized travel packages by Twin Trails.',
    robots: 'index, follow',
  },
  '/flight-ticketing': {
    title: 'Domestic & International Flight Ticketing Nepal | Twin Trails',
    description:
      'Get domestic and international flight ticketing assistance in Nepal with Twin Trails Travel & Tours.',
    robots: 'index, follow',
  },
  '/trekking': {
    title: 'Nepal Trekking Packages | Twin Trails Travel & Tours',
    description:
      'Explore Himalayan trekking destinations including Everest, Annapurna, Langtang, Mardi Himal and Gosaikunda with Twin Trails.',
    robots: 'index, follow',
  },
  '/why-choose-us': {
    title: 'Why Choose Twin Trails | Trusted Nepal Travel Partner',
    description:
      'See why travelers choose Twin Trails Travel & Tours for reliable service, personalized assistance and complete travel support.',
    robots: 'index, follow',
  },
  '/contact': {
    title: 'Contact Twin Trails Travel & Tours | Thamel, Kathmandu',
    description:
      'Contact Twin Trails Travel & Tours Pvt Ltd in Thamel, Kathmandu via phone, WhatsApp, email or Google Maps directions.',
    robots: 'index, follow',
  },
};

function upsertMeta(selector, attrs, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function SeoMeta() {
  const location = useLocation();

  useEffect(() => {
    const current = pageMeta[location.pathname] || {
      title: 'Lost Your Trail? | Twin Trails Travel & Tours',
      description: 'We could not find the page you were looking for.',
      robots: 'noindex, nofollow',
    };

    const absoluteUrl = `${window.location.origin}${location.pathname}`;
    const ogImage = `${window.location.origin}/assets/twin-trails-logo.png`;

    document.title = current.title;
    upsertMeta('meta[name="description"]', { name: 'description' }, current.description);
    upsertMeta('meta[name="robots"]', { name: 'robots' }, current.robots);
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, current.title);
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, current.description);
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'website');
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, absoluteUrl);
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, ogImage);
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, current.title);
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, current.description);
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, ogImage);
    upsertCanonical(absoluteUrl);
  }, [location.pathname]);

  return null;
}
