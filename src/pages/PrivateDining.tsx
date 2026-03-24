import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function PrivateDiningPage() {
  return (
    <main className="pt-32 pb-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-burgundy uppercase tracking-widest text-sm font-bold mb-4 block">Host Your Event</span>
            <h1 className="text-5xl md:text-7xl mb-8">Private <span className="italic">Events</span></h1>
            <p className="text-brand-charcoal/60 text-lg mb-12 leading-relaxed">
              Lenny's North offers a sophisticated setting for corporate meetings, rehearsal dinners, holiday parties, and family celebrations. Our team will work with you to create a custom menu that impresses your guests.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 border border-brand-gold/10 shadow-sm">
                <h3 className="text-lg mb-2 text-brand-gold">The Wine Room</h3>
                <p className="text-xs text-brand-charcoal/50 mb-4 uppercase tracking-widest">Up to 24 Guests</p>
                <p className="text-sm text-brand-charcoal/70">An intimate space surrounded by our curated wine collection.</p>
              </div>
              <div className="bg-white p-6 border border-brand-gold/10 shadow-sm">
                <h3 className="text-lg mb-2 text-brand-gold">The North Room</h3>
                <p className="text-xs text-brand-charcoal/50 mb-4 uppercase tracking-widest">Up to 60 Guests</p>
                <p className="text-sm text-brand-charcoal/70">A grand dining space with classic steakhouse ambiance.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center text-brand-charcoal/70">
                <Phone className="w-5 h-5 mr-4 text-brand-gold" />
                <span>Event Coordinator: (914) 273-8686</span>
              </div>
              <div className="flex items-center text-brand-charcoal/70">
                <Mail className="w-5 h-5 mr-4 text-brand-gold" />
                <span>tonyln1201@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 shadow-2xl border border-brand-gold/10"
          >
            <h2 className="text-3xl mb-8">Event Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 mb-2 block">First Name</label>
                  <input type="text" className="w-full border-b border-brand-gold/30 py-2 focus:border-brand-gold outline-none" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 mb-2 block">Last Name</label>
                  <input type="text" className="w-full border-b border-brand-gold/30 py-2 focus:border-brand-gold outline-none" />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 mb-2 block">Email Address</label>
                <input type="email" className="w-full border-b border-brand-gold/30 py-2 focus:border-brand-gold outline-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 mb-2 block">Event Date</label>
                  <input type="date" className="w-full border-b border-brand-gold/30 py-2 focus:border-brand-gold outline-none" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 mb-2 block">Guest Count</label>
                  <input type="number" className="w-full border-b border-brand-gold/30 py-2 focus:border-brand-gold outline-none" />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 mb-2 block">Tell us about your event</label>
                <textarea rows={4} className="w-full border-b border-brand-gold/30 py-2 focus:border-brand-gold outline-none resize-none" />
              </div>

              <button className="w-full bg-brand-charcoal text-white py-4 rounded-sm uppercase tracking-widest font-bold hover:bg-brand-charcoal/90 transition-all flex items-center justify-center">
                Send Inquiry
                <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
