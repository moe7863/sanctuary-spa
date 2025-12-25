import React, { useState } from 'react';
import { TentTree, ArrowRight, Instagram, Twitter, Facebook, Check } from 'lucide-react';
import { PageView } from '../../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-24 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <button onClick={() => onNavigate('home')} className="text-lg font-bold tracking-tighter flex items-center gap-2 mb-6 text-white">
              <TentTree className="w-5 h-5" strokeWidth={1.5} />
              SANCTUARY
            </button>
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
              Forest Side Estate<br />
              Ambleside, Lake District<br />
              LA22 9ET, United Kingdom
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all border border-white/5">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all border border-white/5">
                <Twitter className="w-4 h-4" />
              </a>
               <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all border border-white/5">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><button onClick={() => onNavigate('our-story')} className="hover:text-white transition-colors text-left">Our Story</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">The Rooms</button></li>
              <li><button onClick={() => onNavigate('dining')} className="hover:text-white transition-colors text-left">Dining</button></li>
              <li><button onClick={() => onNavigate('activities')} className="hover:text-white transition-colors text-left">Activities</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors text-left">FAQ</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors text-left">Terms of Service</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Newsletter</h4>
            <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Subscribe for seasonal updates and exclusive offers from the lakes.</p>
            <form className="flex gap-2" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address" 
                className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-zinc-700 transition-all text-white placeholder-zinc-600"
                required
              />
              <button 
                type="submit"
                className={`text-zinc-950 rounded-xl px-4 py-2 transition-all duration-300 ${subscribed ? 'bg-emerald-500 text-white' : 'bg-white hover:bg-zinc-200'}`}
              >
                {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-xs text-zinc-500">
          <p>© 2024 Sanctuary B&B. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms</button>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};