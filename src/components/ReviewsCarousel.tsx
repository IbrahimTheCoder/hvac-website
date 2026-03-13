import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function ReviewsCarousel() {
  return (
    <section id="reviews" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">What Calgary is Saying</h3>
          </div>
          <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-2xl border border-white/5">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">4.9/5 Based on 1,500+ Reviews</span>
            </div>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_&#34;G&#34;_logo.svg" 
              alt="Google" 
              className="w-8 h-8"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-950 p-8 rounded-3xl border border-white/5 relative group"
            >
              <Quote className="absolute top-6 right-8 text-white/5 group-hover:text-amber-500/10 transition-colors" size={60} />
              
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed mb-8 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-white">{review.author}</span>
                  <span className="text-xs text-slate-500">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-amber-500 font-bold hover:text-amber-400 transition-colors flex items-center gap-2 mx-auto">
            View All Google Reviews
            <Star size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
