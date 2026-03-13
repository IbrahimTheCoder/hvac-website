import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Complete Comfort Solutions</h3>
          <p className="text-slate-400 text-lg">
            From emergency repairs to precision installations, we provide the full spectrum of HVAC services 
            tailored for the Calgary environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative h-[400px] rounded-[2rem] overflow-hidden"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
                    <IconComponent size={24} className="text-slate-950" />
                  </div>
                  <h4 className="text-3xl font-display font-bold mb-4 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-300 mb-6 max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-white font-bold group-hover:text-amber-500 transition-colors">
                    Learn More
                    <Icons.ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
