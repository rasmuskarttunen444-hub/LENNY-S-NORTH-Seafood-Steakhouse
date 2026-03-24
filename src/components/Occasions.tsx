import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Occasions() {
  const occasions = [
    {
      title: "Date Night",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      description: "Intimate booths and candlelit tables for the perfect evening."
    },
    {
      title: "Family Gatherings",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
      description: "Generous portions and a warm atmosphere for the whole family."
    },
    {
      title: "Business Dinners",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
      description: "Professional service and quiet corners for client meetings."
    }
  ];

  return (
    <section className="py-24 bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-gold uppercase tracking-widest text-sm mb-4 block">The Perfect Setting</span>
            <h2 className="text-4xl md:text-6xl">Designed for <span className="italic">Every Occasion</span></h2>
          </div>
          <Link
            to="/reservations"
            className="bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal px-8 py-3 rounded-sm uppercase tracking-widest text-sm font-bold transition-all"
          >
            Book Your Table
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {occasions.map((occ, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden aspect-[3/4]"
            >
              <img
                src={occ.image}
                alt={occ.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl mb-2 text-brand-gold">{occ.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {occ.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
