import { motion } from 'motion/react';
import { Calendar, Clock, Users, ChevronRight } from 'lucide-react';

export default function Reservations() {
  return (
    <main className="pt-32 pb-24 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-burgundy uppercase tracking-widest text-sm font-bold mb-4 block">Join Us</span>
            <h1 className="text-5xl md:text-7xl mb-8">Reserve Your <span className="italic">Table</span></h1>
            <p className="text-brand-charcoal/60 text-lg mb-12 leading-relaxed">
              We recommend booking in advance, especially for weekend dining and special occasions. For parties larger than 8, please contact us directly at (914) 273-8686.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-8 border border-brand-gold/10 shadow-sm">
                <h3 className="text-xl mb-6 uppercase tracking-widest">Dining Policy</h3>
                <ul className="space-y-4 text-sm text-brand-charcoal/70">
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 text-brand-gold shrink-0" />
                    <span>Grace Period: We hold tables for up to 15 minutes past your reservation time.</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 mr-3 text-brand-gold shrink-0" />
                    <span>Large Parties: Parties of 8 or more require a credit card guarantee.</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="w-5 h-5 mr-3 text-brand-gold shrink-0" />
                    <span>Special Requests: Please let us know of any allergies or special occasions in your booking notes.</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center p-6 bg-brand-charcoal text-white">
                <div className="mr-6">
                  <p className="text-brand-gold uppercase tracking-widest text-xs mb-1">Prefer to call?</p>
                  <p className="text-2xl font-serif">(914) 273-8686</p>
                </div>
                <ChevronRight className="ml-auto text-brand-gold" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 shadow-2xl border border-brand-gold/10 flex flex-col items-center justify-center text-center"
          >
            {/* This would typically be an OpenTable or Resy Widget */}
            <div className="w-full max-w-md">
              <div className="mb-10">
                <h2 className="text-3xl mb-4">Online Booking</h2>
                <p className="text-brand-charcoal/50 text-sm">Powered by OpenTable</p>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-left">
                    <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 mb-2 block">Date</label>
                    <input type="date" className="w-full border-b border-brand-gold/30 py-2 focus:border-brand-gold outline-none" />
                  </div>
                  <div className="text-left">
                    <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 mb-2 block">Time</label>
                    <select className="w-full border-b border-brand-gold/30 py-2 focus:border-brand-gold outline-none bg-transparent">
                      <option>6:00 PM</option>
                      <option>6:30 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div className="text-left">
                  <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 mb-2 block">Guests</label>
                  <select className="w-full border-b border-brand-gold/30 py-2 focus:border-brand-gold outline-none bg-transparent">
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5 People</option>
                    <option>6 People</option>
                  </select>
                </div>

                <button className="w-full bg-brand-burgundy text-white py-4 rounded-sm uppercase tracking-widest font-bold hover:bg-brand-burgundy/90 transition-all mt-8">
                  Find a Table
                </button>
              </div>

              <p className="mt-12 text-xs text-brand-charcoal/40 leading-relaxed">
                By clicking "Find a Table", you agree to our terms and conditions. Reservations are subject to availability.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
