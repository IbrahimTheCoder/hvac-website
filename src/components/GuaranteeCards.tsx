import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { GUARANTEES } from '../constants';

export default function GuaranteeCards() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUARANTEES.map((guarantee, index) => {
            const IconComponent = (Icons as any)[guarantee.icon];
            return (
              <motion.div
                key={guarantee.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl group hover:border-amber-500/30 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-500">
                  <IconComponent size={28} className="text-amber-500 group-hover:text-slate-950 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors">{guarantee.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {guarantee.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
