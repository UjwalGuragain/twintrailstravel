import { Mail, MapPin, Phone, MessageCircle, Clock3 } from 'lucide-react';
import { company } from '../data/company';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  return (
    <div className="container-shell py-16 sm:py-20">
      <PageHero
        eyebrow="Contact Us"
        title="Let’s plan your next journey"
        description="Tell us where you want to go and we will help you find the right travel options, timing and support for your plans."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <div className="space-y-6 text-base text-slate-600">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-brand-orange" size={20} />
              <div>
                <div className="font-semibold text-brand-dark">Address</div>
                <div>{company.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 text-brand-orange" size={20} />
              <div>
                <div className="font-semibold text-brand-dark">Phone</div>
                <div><a href={`tel:${company.phone[0]}`} className="hover:text-brand-blue">{company.phone[0]}</a></div>
                <div><a href={`tel:${company.phone[1]}`} className="hover:text-brand-blue">{company.phone[1]}</a></div>
                <div><a href={`tel:${company.phone[2]}`} className="hover:text-brand-blue">{company.phone[2]}</a></div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle className="mt-1 text-brand-orange" size={20} />
              <div>
                <div className="font-semibold text-brand-dark">WhatsApp</div>
                <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-brand-blue">{company.whatsapp}</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 text-brand-orange" size={20} />
              <div>
                <div className="font-semibold text-brand-dark">Email</div>
                <a href={`mailto:${company.email}`} className="hover:text-brand-blue">{company.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 text-brand-orange" size={20} />
              <div>
                <div className="font-semibold text-brand-dark">Opening Hours</div>
                <div>{company.hours.weekday}</div>
                <div>{company.hours.saturday}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-soft">
          <iframe
            title="Twin Trails Travel & Tours map"
            src="https://www.google.com/maps?q=Kaldhara%20Height%2C%20Thamel%2C%20Kathmandu%2C%20Nepal&output=embed"
            width="100%"
            height="520"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
