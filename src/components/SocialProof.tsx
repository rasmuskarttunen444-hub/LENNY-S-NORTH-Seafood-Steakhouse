import { Star, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function SocialProof() {
  const stats = [
    {
      icon: <Clock className="w-6 h-6 text-brand-gold" />,
      label: "Serving Westchester",
      value: "25+ Years"
    },
    {
      icon: <Star className="w-6 h-6 text-brand-gold" />,
      label: "Average Rating",
      value: "4.8 Stars"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
      label: "Locally Owned",
      value: "Armonk Favorite"
    }
  ];

  return (
    <section className="bg-brand-charcoal py-12 border-y border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start space-x-4 text-center md:text-left"
            >
              <div className="p-3 bg-white/5 rounded-full">
                {stat.icon}
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-white text-xl font-serif">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
