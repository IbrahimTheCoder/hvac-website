import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Star } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-3 shadow-xl border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
            <span className="text-slate-950 font-bold text-xl">F</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-display font-bold tracking-tight">FROST & FLAME</span>
            <span className="text-[10px] tracking-[0.2em] text-amber-500 font-bold uppercase">Calgary HVAC</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {['Services', 'Maintenance', 'Neighbourhoods', 'About', 'Reviews'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end mr-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">1,500+ Google Reviews</span>
          </div>
          
          <a 
            href="tel:4035550123" 
            className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
          >
            <Phone size={18} />
            <span>(403) 555-0123</span>
          </a>

          <button 
            className="lg:hidden text-slate-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {['Services', 'Maintenance', 'Neighbourhoods', 'About', 'Reviews'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-slate-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="tel:4035550123" 
                className="flex items-center justify-center gap-2 bg-amber-500 text-slate-950 p-4 rounded-xl font-bold mt-4"
              >
                <Phone size={20} />
                <span>Call Now: (403) 555-0123</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
