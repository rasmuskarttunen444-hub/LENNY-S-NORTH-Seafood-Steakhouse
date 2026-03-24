import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/src/constants';

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-cream border-y border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-brand-gold/30 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl mb-4 italic">What Our Guests Say</h2>
          <p className="text-brand-charcoal/50 uppercase tracking-widest text-sm">A Westchester Tradition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 shadow-sm border border-brand-gold/5 relative"
            >
              <div className="flex mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-brand-charcoal/80 italic mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <p className="font-bold text-brand-charcoal uppercase tracking-widest text-xs">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
