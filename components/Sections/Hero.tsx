import React from 'react';
import { Calendar, Users, Search } from 'lucide-react';
import { FadeIn } from '../UI/FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop" 
          alt="Sanctuary Exterior" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/50 to-zinc-950"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur text-xs font-medium text-zinc-300 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Now accepting reservations for Winter 2024
          </div>
        </FadeIn>
        
        <FadeIn delay={100}>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
            The art of <span className="text-zinc-400 font-serif italic pr-2">slow living</span><br />
            in the heart of nature.
          </h1>
        </FadeIn>
        
        <FadeIn delay={200}>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed">
            A minimal retreat designed for disconnecting. Experience curated luxury, organic dining, and silence just two hours from the city.
          </p>
        </FadeIn>

        {/* Search Bar Component */}
        <FadeIn delay={300}>
          <div className="max-w-3xl mx-auto bg-zinc-900 rounded-2xl shadow-2xl border border-white/5 p-2 flex flex-col md:flex-row items-center gap-2 transition-transform hover:scale-[1.01] duration-300">
            
            <div className="flex-1 w-full md:w-auto p-2 hover:bg-zinc-800 rounded-xl transition-colors cursor-pointer group">
              <label className="block text-xs font-medium text-zinc-500 mb-1 ml-1 group-hover:text-zinc-400">Check In</label>
              <div className="flex items-center gap-2 text-sm font-medium text-white px-1">
                <Calendar className="w-4 h-4 text-zinc-400 group-hover:text-zinc-300 transition-colors" />
                <span>Oct 24, 2023</span>
              </div>
            </div>

            <div className="w-px h-8 bg-zinc-800 hidden md:block"></div>

            <div className="flex-1 w-full md:w-auto p-2 hover:bg-zinc-800 rounded-xl transition-colors cursor-pointer group">
              <label className="block text-xs font-medium text-zinc-500 mb-1 ml-1 group-hover:text-zinc-400">Check Out</label>
              <div className="flex items-center gap-2 text-sm font-medium text-white px-1">
                <Calendar className="w-4 h-4 text-zinc-400 group-hover:text-zinc-300 transition-colors" />
                <span>Oct 28, 2023</span>
              </div>
            </div>

            <div className="w-px h-8 bg-zinc-800 hidden md:block"></div>

            <div className="flex-1 w-full md:w-auto p-2 hover:bg-zinc-800 rounded-xl transition-colors cursor-pointer group">
              <label className="block text-xs font-medium text-zinc-500 mb-1 ml-1 group-hover:text-zinc-400">Guests</label>
              <div className="flex items-center gap-2 text-sm font-medium text-white px-1">
                <Users className="w-4 h-4 text-zinc-400 group-hover:text-zinc-300 transition-colors" />
                <span>2 Adults, 0 Children</span>
              </div>
            </div>

            <button className="w-full md:w-auto bg-white hover:bg-zinc-200 text-zinc-950 p-4 md:px-6 rounded-xl transition-all shadow-lg shadow-black/20 flex items-center justify-center gap-2 group">
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="md:hidden">Search Availability</span>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};