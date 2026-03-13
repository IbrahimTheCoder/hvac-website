import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { NEIGHBOURHOODS } from '../constants';

export default function Neighbourhoods() {
  return (
    <section id="neighbourhoods" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">Local Service</h2>
            <h3 className="text-4xl font-display font-bold">Serving All of Calgary</h3>
          </div>
          <p className="text-slate-400 max-w-md">
            We have technicians stationed across the city to ensure rapid response times 
            no matter where you live.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {NEIGHBOURHOODS.map((area) => (
            <a
              key={area.id}
              href={`/neighbourhood/${area.slug}`}
              className="group bg-slate-900/50 hover:bg-slate-900 p-6 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-slate-500 group-hover:text-amber-500 transition-colors" />
                <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{area.name}</span>
              </div>
              <ChevronRight size={16} className="text-slate-700 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>

        <div className="mt-16 p-10 rounded-[2.5rem] bg-gradient-to-r from-amber-500 to-orange-600 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-amber-500/20">
          <div className="text-slate-950">
            <h4 className="text-3xl font-display font-bold mb-2">Don't see your area?</h4>
            <p className="font-medium opacity-80">We service the entire Calgary Metropolitan Area including Airdrie and Okotoks.</p>
          </div>
          <a 
            href="tel:4035550123" 
            className="bg-slate-950 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-900 transition-colors flex items-center gap-2"
          >
            Check Availability
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
