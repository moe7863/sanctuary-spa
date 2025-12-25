import React from 'react';
import { Quote } from 'lucide-react';
import { FadeIn } from '../UI/FadeIn';

export const Testimonial: React.FC = () => {
  return (
    <section id="reviews" className="py-32 px-6 bg-zinc-950 text-white text-center relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[2px]" 
        alt="Nature Background" 
      />
      <div className="absolute inset-0 bg-zinc-950/80"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn>
          <Quote className="mx-auto text-zinc-600 mb-10 w-12 h-12" strokeWidth={1} />
        </FadeIn>
        
        <FadeIn delay={150}>
          <blockquote className="text-2xl md:text-4xl font-serif italic leading-tight mb-10 text-zinc-100">
            "An absolute sanctuary in every sense of the word. The attention to detail is unmatched, providing a level of calm I haven't found elsewhere."
          </blockquote>
        </FadeIn>

        <FadeIn delay={300}>
          <cite className="not-italic text-sm font-medium tracking-widest text-zinc-400 uppercase flex flex-col gap-1 items-center">
            <span>Elena Fisher</span>
            <span className="text-[10px] text-zinc-600">Traveler Magazine</span>
          </cite>
        </FadeIn>
      </div>
    </section>
  );
};
