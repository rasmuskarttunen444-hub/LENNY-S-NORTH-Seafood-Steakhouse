import Hero from '@/src/components/Hero';
import SocialProof from '@/src/components/SocialProof';
import SignatureExperience from '@/src/components/SignatureExperience';
import Occasions from '@/src/components/Occasions';
import PrivateDining from '@/src/components/PrivateDining';
import Testimonials from '@/src/components/Testimonials';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <SignatureExperience />
      
      {/* Mid-Page Reservation CTA */}
      <section className="py-20 bg-brand-burgundy text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl mb-8 italic">Join us for an unforgettable dining experience.</h2>
          <Link
            to="/reservations"
            className="inline-block bg-white text-brand-burgundy px-12 py-4 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-brand-cream transition-all shadow-xl"
          >
            Book Your Table Tonight
          </Link>
        </div>
      </section>

      <Occasions />
      <PrivateDining />
      <Testimonials />
      
      {/* Final CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1550966841-3ee3ad359051?auto=format&fit=crop&q=80&w=1920"
          alt="Dining Room"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-burgundy uppercase tracking-widest text-sm font-bold mb-4 block">Experience Armonk's Finest</span>
          <h2 className="text-4xl md:text-7xl mb-10">Ready to <span className="italic">Dine?</span></h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/reservations"
              className="w-full sm:w-auto bg-brand-burgundy text-white px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-brand-burgundy/90 transition-all shadow-2xl"
            >
              Reserve Now
            </Link>
            <a
              href="tel:+19142738686"
              className="w-full sm:w-auto border-2 border-brand-charcoal text-brand-charcoal px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-brand-charcoal hover:text-white transition-all"
            >
              Call (914) 273-8686
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
