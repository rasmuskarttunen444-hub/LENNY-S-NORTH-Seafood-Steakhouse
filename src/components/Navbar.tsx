import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Private Dining', path: '/private-dining' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-brand-charcoal/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col items-center">
          <span className={cn(
            "font-serif text-2xl tracking-widest uppercase leading-none",
            isScrolled ? "text-brand-gold" : "text-white"
          )}>
            Lenny's North
          </span>
          <span className={cn(
            "text-[10px] uppercase tracking-[0.3em] mt-1",
            isScrolled ? "text-white/70" : "text-white/80"
          )}>
            Seafood & Steakhouse
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest hover:text-brand-gold transition-colors",
                isScrolled ? "text-white" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+19142738686"
            className="flex items-center text-brand-gold hover:text-brand-gold-light transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">(914) 273-8686</span>
          </a>
          <Link
            to="/reservations"
            className="bg-brand-burgundy hover:bg-brand-burgundy/90 text-white px-6 py-2.5 rounded-sm text-sm uppercase tracking-widest transition-all shadow-lg"
          >
            Reserve
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-charcoal border-t border-white/10 p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white text-lg uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservations"
              className="bg-brand-burgundy text-white text-center py-3 rounded-sm uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reserve Table
            </Link>
            <a
              href="tel:+19142738686"
              className="flex items-center justify-center text-brand-gold py-3 border border-brand-gold/30 rounded-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>(914) 273-8686</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
