import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { company } from '../data/company';
import { regions } from '../data/regions';

const routeNames = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/tours': 'Tours & Packages',
  '/flight-ticketing': 'Flight Ticketing',
  '/trekking': 'Trekking',
  '/why-choose-us': 'Why Choose Us',
  '/contact': 'Contact',
};

export default function StructuredData() {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = window.location.origin;
    const pathname = location.pathname || '/';
    const breadcrumbItems = [...Object.entries(routeNames).map(([path, name], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: `${baseUrl}${path === '/' ? '' : path}`,
    }))];

    if (pathname.startsWith('/regions/')) {
      const regionSlug = pathname.split('/regions/')[1];
      const region = regions.find((item) => item.slug === regionSlug);
      if (region) {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: breadcrumbItems.length + 1,
          name: region.name,
          item: `${baseUrl}${pathname}`,
        });
      }
    }

    const data = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          name: company.name,
          url: baseUrl,
          description:
            'Twin Trails Travel & Tours Pvt Ltd offers travel, tours, trekking, sightseeing and flight ticketing services in Nepal and beyond.',
        },
        {
          '@type': 'TravelAgency',
          name: company.name,
          url: baseUrl,
          image: `${baseUrl}/assets/twin-trails-logo.png`,
          description:
            'Twin Trails Travel & Tours Pvt Ltd provides flight ticketing, tour packages, trekking, sightseeing, hotel booking, transportation and customized travel experiences.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: company.address,
            addressLocality: 'Kathmandu',
            addressCountry: 'Nepal',
          },
          telephone: company.phone[0],
          email: company.email,
          sameAs: [company.instagram, company.facebook, company.tiktok],
          openingHours: 'Su-FR 10:00-18:00',
          areaServed: 'Nepal',
          priceRange: 'Contact for current pricing',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems,
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.setAttribute('data-schema', 'twin-trails');

    const previous = document.head.querySelector('script[data-schema="twin-trails"]');
    if (previous) {
      previous.remove();
    }

    document.head.appendChild(script);
    return () => script.remove();
  }, [location.pathname]);

  return null;
}
