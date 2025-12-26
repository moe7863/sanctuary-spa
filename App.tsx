import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Sections/Hero';
import { Rooms } from './components/Sections/Rooms';
import { Amenities } from './components/Sections/Amenities';
import { Testimonial } from './components/Sections/Testimonial';
import { Footer } from './components/Layout/Footer';
import { Concierge } from './components/Features/Concierge';
import { Gallery } from './components/Sections/Gallery';
import { FadeIn } from './components/UI/FadeIn';
import { RoomDetail } from './components/Pages/RoomDetail';
import { JournalPost } from './components/Pages/JournalPost';
import { OurStory, Dining, Activities, FAQ, Terms, Privacy, Contact } from './components/Pages/StaticPages';
import { PageView, Room } from './types';

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedJournalId, setSelectedJournalId] = useState<string | null>(null);

  const handleNavigate = (view: PageView) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentView(view);
    if (view !== 'room-detail') {
      setSelectedRoom(null);
    }
    if (view !== 'journal-detail') {
      setSelectedJournalId(null);
    }
  };

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
    handleNavigate('room-detail');
  };

  const handleJournalSelect = (id: string) => {
    setSelectedJournalId(id);
    handleNavigate('journal-detail');
  };

  const handleBackToRooms = () => {
    setCurrentView('home');
    setSelectedRoom(null);
    // Use setTimeout to allow the home page to render before scrolling
    setTimeout(() => {
      const roomsSection = document.getElementById('rooms');
      if (roomsSection) {
        roomsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    if (currentView === 'room-detail' && !selectedRoom) {
      handleNavigate('home');
    }
    if (currentView === 'journal-detail' && !selectedJournalId) {
      handleNavigate('home');
    }
  }, [currentView, selectedRoom, selectedJournalId]);

  const renderContent = () => {
    switch (currentView) {
      case 'room-detail':
        return selectedRoom ? (
          <RoomDetail room={selectedRoom} onBack={handleBackToRooms} />
        ) : null;
      case 'journal-detail':
        return selectedJournalId ? (
          <JournalPost postId={selectedJournalId} onBack={() => handleNavigate('home')} />
        ) : null;
      case 'our-story': return <OurStory />;
      case 'dining': return <Dining />;
      case 'activities': return <Activities />;
      case 'faq': return <FAQ />;
      case 'terms': return <Terms />;
      case 'privacy': return <Privacy />;
      case 'contact': return <Contact />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Gallery />
            <Rooms onRoomSelect={handleRoomSelect} />
            <Amenities />
            <Testimonial onSelectJournal={handleJournalSelect} />
            
            {/* CTA Section */}
            <section id="dining" className="py-32 px-6 relative overflow-hidden bg-zinc-950">
              <FadeIn>
                <div className="max-w-2xl mx-auto text-center relative z-10">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to unwind?</h2>
                  <p className="text-zinc-400 mb-10 text-lg">Book directly with us for the best rates and a complimentary bottle of local wine upon arrival.</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="w-full sm:w-auto px-10 py-4 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-all shadow-xl shadow-zinc-900/50 hover:shadow-2xl hover:-translate-y-1">
                      Check Availability
                    </button>
                    <button onClick={() => handleNavigate('contact')} className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
                      Contact Us
                    </button>
                  </div>
                </div>
              </FadeIn>
              
              {/* Background Decoration */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-zinc-800 to-transparent rounded-full opacity-20 blur-3xl -z-10 pointer-events-none"></div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />
      <Concierge />
    </div>
  );
}

export default App;