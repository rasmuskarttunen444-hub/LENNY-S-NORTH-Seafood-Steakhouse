import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col mb-8">
              <span className="font-serif text-2xl tracking-widest uppercase text-brand-gold">Lenny's North</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Seafood & Steakhouse</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Armonk's premier destination for prime aged steaks, fresh seafood, and classic Italian-influenced dining.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/menu" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link to="/reservations" className="hover:text-white transition-colors">Reservations</Link></li>
              <li><Link to="/private-dining" className="hover:text-white transition-colors">Private Dining</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-8">Contact</h4>
            <ul className="space-y-6 text-sm text-white/60">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-gold shrink-0" />
                <span>386 Main St,<br />Armonk, NY 10504</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-gold shrink-0" />
                <a href="tel:+19142738686" className="hover:text-white transition-colors">(914) 273-8686</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-gold shrink-0" />
                <a href="mailto:tonyln1201@gmail.com" className="hover:text-white transition-colors">tonyln1201@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-8">Hours</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span>12:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span>12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>1:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Lenny's North Seafood & Steakhouse. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-white/30 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-burgundy p-4 flex gap-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <Link
          to="/reservations"
          className="flex-1 bg-white text-brand-burgundy py-3 rounded-sm text-center font-bold uppercase tracking-widest text-sm"
        >
          Reserve Now
        </Link>
        <a
          href="tel:+19142738686"
          className="flex items-center justify-center bg-brand-charcoal text-white px-6 rounded-sm"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
