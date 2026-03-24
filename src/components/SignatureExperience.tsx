import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '@/src/constants';

export default function SignatureExperience() {
  const featured = MENU_ITEMS.filter(item => item.featured);

  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-burgundy uppercase tracking-widest text-sm font-semibold mb-4 block">Our Signature Dishes</span>
          <h2 className="text-4xl md:text-6xl mb-6">The Art of the <span className="italic">Steakhouse</span></h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {featured.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={
                    index === 0 ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" :
                    index === 1 ? "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800" :
                    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800"
                  }
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <h3 className="text-2xl mb-2">{item.name}</h3>
              <p className="text-brand-charcoal/60 mb-4 leading-relaxed">
                {item.description}
              </p>
              <span className="text-brand-gold font-serif text-xl">${item.price}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/menu"
            className="inline-block border-b-2 border-brand-burgundy text-brand-burgundy uppercase tracking-widest text-sm font-bold pb-1 hover:text-brand-gold hover:border-brand-gold transition-all"
          >
            Explore Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
