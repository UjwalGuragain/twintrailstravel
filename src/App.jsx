import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoaderScreen from './components/LoaderScreen';
import ScrollToTop from './components/ScrollToTop';
import SeoMeta from './components/SeoMeta';
import StructuredData from './components/StructuredData';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ToursPage from './pages/ToursPage';
import FlightTicketingPage from './pages/FlightTicketingPage';
import TrekkingPage from './pages/TrekkingPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import ContactPage from './pages/ContactPage';
import RegionDetailPage from './pages/RegionDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TourCategoryPage from './pages/TourCategoryPage';
import PackageDetailPage from './pages/PackageDetailPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <LoaderScreen />
      <BrowserRouter future={{ v7_startTransition: true }}>
        <ScrollToTop />
        <SeoMeta />
        <StructuredData />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/tours/:slug" element={<TourCategoryPage />} />
            <Route path="/packages/:slug" element={<PackageDetailPage />} />
            <Route path="/flight-ticketing" element={<FlightTicketingPage />} />
            <Route path="/trekking" element={<TrekkingPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/regions/:slug" element={<RegionDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
