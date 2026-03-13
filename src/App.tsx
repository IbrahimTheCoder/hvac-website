/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GuaranteeCards from './components/GuaranteeCards';
import ServicesGrid from './components/ServicesGrid';
import ReviewsCarousel from './components/ReviewsCarousel';
import Neighbourhoods from './components/Neighbourhoods';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <GuaranteeCards />
          <ServicesGrid />
          <ReviewsCarousel />
          <Neighbourhoods />
        </motion.div>

        {/* Final CTA Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=2000" 
              alt="Cozy home interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-950" />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Ready to feel <span className="text-gradient-warm">truly comfortable?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Don't wait for your system to fail. Join thousands of Calgary homeowners 
               who trust Frost & Flame for their year-round comfort.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="tel:4035550123" 
                className="w-full sm:w-auto bg-amber-500 text-slate-950 px-10 py-5 rounded-full font-bold text-xl hover:bg-amber-600 transition-all shadow-2xl shadow-amber-500/20"
              >
                Call (403) 555-0123
              </a>
              <button className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
                Book Online Now
              </button>
            </div>
            <p className="mt-8 text-slate-500 font-medium uppercase tracking-widest text-sm">
              No Dispatch Fees for Maintenance Plan Members
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

