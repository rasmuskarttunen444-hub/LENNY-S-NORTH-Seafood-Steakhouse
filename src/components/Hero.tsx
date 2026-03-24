import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Background Image/Video Placeholder */}
      <img
        src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1920"
        alt="Lenny's North Signature Steak"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-brand-gold uppercase tracking-[0.4em] text-sm md:text-base mb-4 block">
            Armonk's Premier Steakhouse
          </span>
          <h1 className="text-5xl md:text-8xl text-white mb-6 leading-tight">
            A Classic <br />
            <span className="italic">Experience.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Prime aged steaks. Fresh line-caught seafood. <br className="hidden md:block" />
            Exceptional service in the heart of Westchester.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reservations"
              className="w-full sm:w-auto bg-brand-burgundy hover:bg-brand-burgundy/90 text-white px-10 py-4 rounded-sm text-base uppercase tracking-widest transition-all shadow-xl flex items-center justify-center group"
            >
              Reserve a Table
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/menu"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-sm text-base uppercase tracking-widest transition-all"
            >
              View Menu
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}
