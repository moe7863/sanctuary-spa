import React from 'react';
import { ChefHat, Waves, Bike, Map, Wifi, Zap, UtensilsCrossed } from 'lucide-react';
import { FadeIn } from '../UI/FadeIn';

export const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 px-6 border-y border-white/5 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="max-w-xl mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Curated Amenities</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">Every detail has been considered to ensure your stay is effortless and restorative.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 md:h-[600px]">
          
          {/* Large Feature - Farm to Table */}
          <FadeIn className="md:col-span-2 md:row-span-2 h-[400px] md:h-auto" delay={100}>
            <div className="w-full h-full bg-zinc-900 rounded-3xl p-8 relative overflow-hidden group border border-white/5 hover:border-white/10 transition-all duration-500">
              <img 
                src="/images/amenity-farm.jpg" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0 scale-110 group-hover:scale-100" 
                alt="Food" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-zinc-950/60 group-hover:bg-zinc-950/40 transition-colors z-0 duration-500"></div>
              
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity z-10">
                <UtensilsCrossed className="w-48 h-48 text-white" strokeWidth={0.5} />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <ChefHat className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Farm to Table</h3>
                <p className="text-zinc-400 mb-8 max-w-sm group-hover:text-zinc-200 transition-colors">Seasonal breakfast included with every stay, featuring ingredients from our organic garden and local partners.</p>
                <div className="flex gap-2">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 shadow-sm">Organic</span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 shadow-sm">Local</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Medium Feature - Spa */}
          <FadeIn className="md:col-span-2 h-[300px] md:h-auto" delay={200}>
            <div className="w-full h-full bg-zinc-900 text-white rounded-3xl p-8 relative overflow-hidden group border border-white/5 hover:border-white/10 transition-all duration-500">
              <img 
                src="/images/amenity-spa.jpg" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" 
                alt="Spa" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/50 to-transparent z-0"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/10 group-hover:bg-white/20 transition-colors">
                  <Waves className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-semibold mb-2">The Spa</h3>
                  <p className="text-zinc-300 text-sm max-w-xs">Nordic sauna and cold plunge available for private booking.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Small Feature 1 */}
          <FadeIn className="h-[250px] md:h-auto" delay={300}>
            <div className="w-full h-full bg-zinc-900 rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-white/10 hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-between items-start">
                <Bike className="w-8 h-8 text-white mb-4" strokeWidth={1.5} />
                <Map className="w-5 h-5 text-zinc-600 group-hover:text-emerald-500 transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Exploration</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">Complimentary bicycles and curated trail maps.</p>
              </div>
            </div>
          </FadeIn>

          {/* Small Feature 2 */}
          <FadeIn className="h-[250px] md:h-auto" delay={400}>
            <div className="w-full h-full bg-zinc-900 rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-white/10 hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-between items-start">
                <Wifi className="w-8 h-8 text-white mb-4" strokeWidth={1.5} />
                <Zap className="w-5 h-5 text-zinc-600 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Fiber Wifi</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">High-speed connection throughout the property.</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};