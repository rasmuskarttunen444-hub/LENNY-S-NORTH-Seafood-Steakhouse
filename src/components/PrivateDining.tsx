import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Utensils } from 'lucide-react';

export default function PrivateDining() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-burgundy uppercase tracking-widest text-sm font-semibold mb-4 block">Events & Celebrations</span>
            <h2 className="text-4xl md:text-6xl mb-8">Elevated <span className="italic">Private Dining</span></h2>
            <p className="text-brand-charcoal/70 text-lg mb-10 leading-relaxed">
              From intimate family celebrations to corporate events, Lenny's North provides the perfect backdrop for your most important moments. Our private rooms offer a secluded, upscale atmosphere with customized menus tailored to your needs.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-brand-cream rounded-sm">
                  <Users className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal">Custom Capacity</h4>
                  <p className="text-sm text-brand-charcoal/60">Accommodating groups from 10 to 100 guests.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-brand-cream rounded-sm">
                  <Utensils className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal">Bespoke Menus</h4>
                  <p className="text-sm text-brand-charcoal/60">Curated steak, seafood, and Italian courses.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-brand-cream rounded-sm">
                  <Calendar className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal">Full Planning</h4>
                  <p className="text-sm text-brand-charcoal/60">Dedicated event coordinators for every detail.</p>
                </div>
              </div>
            </div>

            <Link
              to="/private-dining"
              className="inline-block bg-brand-charcoal hover:bg-brand-charcoal/90 text-white px-10 py-4 rounded-sm text-sm uppercase tracking-widest transition-all shadow-lg"
            >
              Inquire About an Event
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative z-10">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000"
                alt="Private Dining Room"
                className="w-full h-full object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-gold/10 -z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-burgundy/5 -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
