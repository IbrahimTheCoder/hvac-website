import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center">
                <span className="text-slate-950 font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tight">FROST & FLAME</span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Calgary's premier HVAC service provider. Dedicated to keeping your home comfortable 
              through every season with integrity and expertise.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="flex flex-col gap-4">
              {['Furnace Repair', 'AC Installation', 'Heat Pumps', 'Air Quality', 'Maintenance Plans', 'Emergency Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About Us', 'Our Process', 'Neighbourhoods', 'Reviews', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-500 shrink-0">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Call 24/7</span>
                  <a href="tel:4035550123" className="text-white font-bold hover:text-amber-500 transition-colors">(403) 555-0123</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-500 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email Us</span>
                  <a href="mailto:hello@frostflame.ca" className="text-white font-bold hover:text-amber-500 transition-colors">hello@frostflame.ca</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-500 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Our Office</span>
                  <span className="text-white font-bold">123 Calgary Trail NW, Calgary, AB</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © 2026 Frost & Flame HVAC Calgary. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
