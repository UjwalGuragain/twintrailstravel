import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ToursPage from './pages/ToursPage';
import FlightTicketingPage from './pages/FlightTicketingPage';
import TrekkingPage from './pages/TrekkingPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/flight-ticketing" element={<FlightTicketingPage />} />
          <Route path="/trekking" element={<TrekkingPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
