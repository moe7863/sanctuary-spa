import React from 'react';
import { ArrowRight, ChevronRight, Diamond } from 'lucide-react';
import { FadeIn } from '../UI/FadeIn';

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 md:h-[600px]">
          
          {/* Card 1: Lounge (Left, Tall) */}
          <FadeIn className="md:row-span-2 h-[400px] md:h-auto" delay={0}>
            <div className="relative w-full h-full rounded-[32px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1000&auto=format&fit=crop" 
                alt="Lounge" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute top-6 left-6">
                <span className="bg-[#4a3b32] text-[#d4bca5] text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase shadow-lg">Featured</span>
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-3xl font-serif text-white mb-3">Lakeside Lounge</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 max-w-[90%]">
                  Unwind after a hike in our exclusive lounge area featuring a roaring open fire.
                </p>
                <button className="flex items-center text-[10px] font-bold tracking-widest text-white hover:text-zinc-300 transition-colors uppercase gap-1">
                  Details <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Park (Top Right, Wide) */}
          <FadeIn className="md:col-span-2 h-[300px] md:h-auto" delay={100}>
             <div className="relative w-full h-full rounded-[32px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop" 
                alt="Park" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent"></div>
              
              <div className="absolute top-6 left-6">
                 <span className="text-white/90 text-[10px] font-bold tracking-widest uppercase mb-1 block shadow-sm">The Estate</span>
                 <h3 className="text-3xl font-serif text-white shadow-sm">Overlooking the Fells</h3>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Highlight Text (Bottom Middle) */}
          <FadeIn className="h-[250px] md:h-auto" delay={200}>
            <div className="relative w-full h-full bg-[#1c1c1f] rounded-[32px] p-8 flex flex-col justify-between border border-white/5 group hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start">
                 <h3 className="text-2xl font-serif text-white">Our Highlight</h3>
                 <Diamond className="w-5 h-5 text-white/50" />
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">24h Wine Lounge</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Taste and enjoy a curated selection of vintage wines. Available 24/7 via our state-of-the-art enomatic dispenser.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 4: Wine Dispenser (Bottom Right) */}
          <FadeIn className="h-[250px] md:h-auto" delay={300}>
             <div className="relative w-full h-full rounded-[32px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop" 
                alt="Wine" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              
              <div className="absolute bottom-6 left-6">
                 <span className="bg-[#4a3b32]/90 backdrop-blur-sm text-[#d4bca5] text-[10px] font-bold px-4 py-2 rounded-full tracking-wide shadow-lg">The Cellar</span>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};