import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { company } from '../data/company';

export default function ContactPage() {
  return (
    <div className="container-shell py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">Contact Us</p>
        <h1 className="mt-6 text-4xl font-bold text-brand-dark sm:text-5xl">Let’s plan your next journey</h1>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
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
          </div>
        </div>

        <div className="rounded-3xl bg-brand-deep p-8 text-white shadow-soft">
          <h2 className="text-2xl font-semibold">Get Directions</h2>
          <p className="mt-4 text-base leading-7 text-slate-200">Visit Twin Trails Travel & Tours Pvt Ltd in Thamel, Kathmandu, Nepal.</p>
          <a href={company.googleMaps} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-brand-orange px-6 py-3 font-semibold text-white">Open Google Maps</a>
        </div>
      </div>
    </div>
  );
}
