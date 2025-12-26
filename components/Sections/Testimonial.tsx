import React from 'react';
import { Quote, ArrowRight, Calendar } from 'lucide-react';
import { FadeIn } from '../UI/FadeIn';
import { JournalEntry } from '../../types';

interface TestimonialProps {
  onSelectJournal: (id: string) => void;
}

export const Testimonial: React.FC<TestimonialProps> = ({ onSelectJournal }) => {
  const journalEntries: JournalEntry[] = [
    {
      id: "forest-bathing",
      title: "The Art of Forest Bathing",
      date: "Oct 12",
      image: "/images/journal-forest.jpg",
      excerpt: "Why reconnecting with the silence of the woods is the ultimate luxury."
    },
    {
      id: "autumn-menu",
      title: "Autumn Menu Preview",
      date: "Oct 08",
      image: "/images/journal-food.jpg",
      excerpt: "Head Chef James shares his inspiration for this season's foraging."
    },
    {
      id: "fells-guide",
      title: "A Guide to the Fells",
      date: "Sep 24",
      image: "/images/journal-hike.jpg",
      excerpt: "Our favorite circular walks starting directly from the Sanctuary doorstep."
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Featured Testimonial */}
      <div className="relative mb-24">
        <div className="absolute inset-0 z-0">
             <img 
            src="/images/testimonial-bg.jpg" 
            className="w-full h-[600px] object-cover opacity-20 blur-[2px]" 
            alt="Nature Background" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center px-6 pt-24">
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
      </div>

      {/* Journal Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/5 pb-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">The Journal</h2>
              <p className="text-zinc-400">Stories from the estate, seasonal recipes, and guides to the wild.</p>
            </div>
            <button className="text-sm font-medium text-white flex items-center gap-1 hover:gap-2 transition-all group">
              Read all stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalEntries.map((entry, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div 
                className="group cursor-pointer rounded-3xl p-4 transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm border border-transparent hover:border-white/5"
                onClick={() => onSelectJournal(entry.id)}
              >
                <div className="aspect-[3/2] rounded-2xl overflow-hidden mb-6 relative shadow-md group-hover:shadow-xl transition-shadow">
                   <img 
                    src={entry.image} 
                    alt={entry.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-zinc-950/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 flex items-center gap-2 text-[10px] font-medium text-zinc-300">
                    <Calendar className="w-3 h-3" />
                    {entry.date}
                  </div>
                </div>
                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-emerald-400 transition-colors px-2">{entry.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 px-2">{entry.excerpt}</p>
                <div className="text-xs font-medium text-white uppercase tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 px-2">
                  Read Article <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};