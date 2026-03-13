import React from 'react';
import { motion } from 'motion/react';
import { Phone, Star, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&q=80&w=2000" 
          alt="Cozy Calgary home in winter" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 cinematic-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 px-4 py-2 rounded-full mb-6"
          >
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs font-bold text-amber-100 uppercase tracking-widest">Calgary's Top Rated HVAC</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8"
          >
            Never Worry About <br />
            <span className="text-gradient-warm italic">The Cold Again.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed"
          >
            Premium heating and cooling solutions designed for Calgary's extreme climate. 
            Reliable service, fixed pricing, and 24/7 emergency support.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a 
              href="tel:4035550123" 
              className="group flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/30"
            >
              <Phone size={22} />
              <span>Book Emergency Service</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex flex-col px-4">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Average Response Time</span>
              <span className="text-2xl font-display font-bold text-white">Under 60 Minutes</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent" />
      </motion.div>
    </section>
  );
}
