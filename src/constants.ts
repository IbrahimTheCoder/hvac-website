import { Service, Review, Neighbourhood, Guarantee } from './types';

export const SERVICES: Service[] = [
  {
    id: 'furnace-repair',
    title: 'Furnace Repair',
    description: 'Expert diagnostics and rapid repair for all furnace makes and models. We keep Calgary warm.',
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ac-installation',
    title: 'AC Installation',
    description: 'Stay cool during Calgary summers with high-efficiency air conditioning systems tailored to your home.',
    icon: 'Snowflake',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'heat-pumps',
    title: 'Heat Pumps',
    description: 'Energy-efficient heating and cooling solutions that work perfectly in our unique climate.',
    icon: 'Wind',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'air-quality',
    title: 'Indoor Air Quality',
    description: 'Breathe easier with advanced filtration, humidifiers, and air purification systems.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1595841055318-5614619702e2?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    rating: 5,
    text: 'Our furnace died in the middle of a -30 cold snap. Frost & Flame arrived within 2 hours and had us back to cozy in no time. Incredible service!',
    date: '2 weeks ago',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    author: 'Mark Thompson',
    rating: 5,
    text: 'Professional, clean, and honest. They explained exactly what was wrong and didn\'t try to upsell me on things I didn\'t need.',
    date: '1 month ago',
    avatar: 'https://i.pravatar.cc/150?u=mark'
  },
  {
    id: '3',
    author: 'Elena Rodriguez',
    rating: 5,
    text: 'Best HVAC company in Calgary. We had a full AC installation done and the team was respectful of our home and very efficient.',
    date: '3 months ago',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export const NEIGHBOURHOODS: Neighbourhood[] = [
  { id: '1', name: 'Beltline', slug: 'beltline' },
  { id: '2', name: 'Bridgeland', slug: 'bridgeland' },
  { id: '3', name: 'Mount Royal', slug: 'mount-royal' },
  { id: '4', name: 'Altadore', slug: 'altadore' },
  { id: '5', name: 'Aspen Woods', slug: 'aspen-woods' },
  { id: '6', name: 'Signal Hill', slug: 'signal-hill' },
  { id: '7', name: 'Tuscany', slug: 'tuscany' },
  { id: '8', name: 'Mahogany', slug: 'mahogany' }
];

export const GUARANTEES: Guarantee[] = [
  {
    id: '1',
    title: '24/7 Emergency Response',
    description: 'Calgary winters don\'t wait, and neither do we. We\'re always on call.',
    icon: 'Clock'
  },
  {
    id: '2',
    title: 'Fixed Price Guarantee',
    description: 'The price we quote is the price you pay. No hidden fees, ever.',
    icon: 'DollarSign'
  },
  {
    id: '3',
    title: 'Lifetime Workmanship',
    description: 'We stand by our work for as long as you own your home.',
    icon: 'Award'
  }
];
