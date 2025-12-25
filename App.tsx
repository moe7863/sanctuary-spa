import React from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Sections/Hero';
import { Rooms } from './components/Sections/Rooms';
import { Amenities } from './components/Sections/Amenities';
import { Testimonial } from './components/Sections/Testimonial';
import { Footer } from './components/Layout/Footer';
import { Concierge } from './components/Features/Concierge';
import { Gallery } from './components/Sections/Gallery';
import { FadeIn } from './components/UI/FadeIn';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      
      <main>
        <Hero />
        <Gallery />
        <Rooms />
        <Amenities />
        <Testimonial />
        
        {/* CTA Section */}
        <section id="dining" className="py-32 px-6 relative overflow-hidden bg-zinc-950">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to unwind?</h2>
              <p className="text-zinc-400 mb-10 text-lg">Book directly with us for the best rates and a complimentary bottle of local wine upon arrival.</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-10 py-4 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-all shadow-xl shadow-zinc-900/50 hover:shadow-2xl hover:-translate-y-1">
                  Check Availability
                </button>
                <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </FadeIn>
          
          {/* Background Decoration */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-zinc-800 to-transparent rounded-full opacity-20 blur-3xl -z-10 pointer-events-none"></div>
        </section>
      </main>

      <Footer />
      <Concierge />
    </div>
  );
}

export default App;