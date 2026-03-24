import { MENU_ITEMS } from '@/src/constants';
import { motion } from 'motion/react';

export default function Menu() {
  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'steaks', name: 'Prime Steaks' },
    { id: 'seafood', name: 'Fresh Seafood' },
    { id: 'pasta', name: 'Homemade Pasta' },
    { id: 'sides', name: 'Sides' },
    { id: 'desserts', name: 'Desserts' },
  ];

  return (
    <main className="pt-32 pb-24 bg-brand-cream">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-burgundy uppercase tracking-widest text-sm font-bold mb-4 block">Our Offerings</span>
          <h1 className="text-5xl md:text-7xl mb-8">The <span className="italic">Menu</span></h1>
          <p className="text-brand-charcoal/60 max-w-2xl mx-auto leading-relaxed">
            We take pride in sourcing the finest prime aged beef, fresh line-caught seafood, and authentic Italian ingredients for our homemade pastas.
          </p>
        </div>

        <div className="space-y-24">
          {categories.map((cat) => {
            const items = MENU_ITEMS.filter(item => item.category === cat.id);
            if (items.length === 0) return null;

            return (
              <section key={cat.id}>
                <div className="flex items-center space-x-6 mb-12">
                  <h2 className="text-3xl md:text-4xl uppercase tracking-widest whitespace-nowrap">{cat.name}</h2>
                  <div className="h-[1px] bg-brand-gold/30 w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex flex-col"
                    >
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-bold uppercase tracking-wide">{item.name}</h3>
                        <span className="text-brand-gold font-serif text-lg">${item.price}</span>
                      </div>
                      <p className="text-brand-charcoal/60 text-sm leading-relaxed italic">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-24 p-12 bg-brand-charcoal text-white text-center rounded-sm">
          <h3 className="text-2xl mb-4 italic text-brand-gold">Wine & Spirits</h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Our extensive wine cellar features rare vintages and classic pairings from around the world. Ask your server for our full wine list.
          </p>
          <button className="border border-brand-gold text-brand-gold px-8 py-3 rounded-sm uppercase tracking-widest text-xs font-bold hover:bg-brand-gold hover:text-brand-charcoal transition-all">
            View Wine List
          </button>
        </div>
      </div>
    </main>
  );
}
