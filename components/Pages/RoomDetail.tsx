import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Wifi, Coffee, Bath, Sun, Utensils, Monitor, Check, X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Room } from '../../types';
import { FadeIn } from '../UI/FadeIn';

interface RoomDetailProps {
  room: Room;
  onBack: () => void;
}

export const RoomDetail: React.FC<RoomDetailProps> = ({ room, onBack }) => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState<'form' | 'processing' | 'success'>('form');

  // Booking Form State
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Combined images array (main image + extra images)
  const allImages = [room.image, ...(room.images || [])];

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'coffee': return <Coffee className="w-4 h-4" />;
      case 'bath': return <Bath className="w-4 h-4" />;
      case 'sun': return <Sun className="w-4 h-4" />;
      case 'utensils': return <Utensils className="w-4 h-4" />;
      case 'monitor': return <Monitor className="w-4 h-4" />;
      default: return <Check className="w-4 h-4" />;
    }
  };

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (galleryIndex !== null) {
        if (e.key === 'Escape') setGalleryIndex(null);
        if (e.key === 'ArrowLeft') setGalleryIndex(prev => (prev !== null && prev > 0 ? prev - 1 : allImages.length - 1));
        if (e.key === 'ArrowRight') setGalleryIndex(prev => (prev !== null && prev < allImages.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryIndex, allImages.length]);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep('processing');
    
    // Simulate API call
    setTimeout(() => {
      setBookingStep('success');
    }, 2000);
  };

  const calculateTotal = () => {
    // Basic calculation simulation
    return room.price * 2; // Default 2 nights for demo
  };

  return (
    <div className="bg-zinc-950 min-h-screen pt-24 pb-12 animate-fade-in-up relative">
      <div className="max-w-6xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-zinc-400 hover:text-white mb-8 text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Rooms
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image Grid */}
          <div className="space-y-4">
            <div 
              className="aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-900 cursor-zoom-in hover:opacity-95 transition-opacity"
              onClick={() => setGalleryIndex(0)}
            >
              <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
            </div>
            {room.images && (
              <div className="grid grid-cols-2 gap-4">
                {room.images.slice(0, 2).map((img, idx) => (
                  <div 
                    key={idx} 
                    className="aspect-video rounded-2xl overflow-hidden bg-zinc-900 cursor-zoom-in hover:opacity-95 transition-opacity relative group"
                    onClick={() => setGalleryIndex(idx + 1)}
                  >
                    <img src={img} alt="Room detail" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-medium tracking-wider uppercase bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">View</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <FadeIn>
              <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-zinc-300 mb-6">
                {room.size} · Sleeps {room.guests}
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">{room.name}</h1>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">{room.description}</p>
              
              <div className="border-t border-b border-white/5 py-8 mb-8">
                <h3 className="text-white font-medium mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3 text-zinc-400">
                      <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-zinc-300 border border-white/5">
                        {getIcon(amenity)}
                      </div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3 text-zinc-400">
                     <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-zinc-300 border border-white/5">
                        <Check className="w-4 h-4" />
                     </div>
                     <span>Aesop Toiletries</span>
                  </div>
                   <div className="flex items-center gap-3 text-zinc-400">
                     <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-zinc-300 border border-white/5">
                        <Check className="w-4 h-4" />
                     </div>
                     <span>Egyptian Cotton Sheets</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-3xl font-semibold text-white">£{room.price}</span>
                    <span className="text-zinc-500"> / night</span>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-400 text-sm font-medium flex items-center justify-end gap-1">
                      <Check className="w-3 h-3" /> Available
                    </div>
                    <div className="text-zinc-500 text-xs">Free cancellation</div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full bg-white text-zinc-950 py-4 rounded-xl font-medium hover:bg-zinc-200 transition-colors shadow-lg"
                >
                  Book This Suite
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Gallery Lightbox - PORTAL */}
      {galleryIndex !== null && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/98 flex flex-col items-center justify-center animate-in fade-in duration-300">
          
          {/* Close Button */}
          <button 
            type="button"
            className="fixed top-6 right-6 z-[10000] p-4 text-white/70 hover:text-white bg-black/20 hover:bg-white/10 rounded-full backdrop-blur-md transition-all cursor-pointer border border-white/5 hover:border-white/20"
            onClick={(e) => {
              e.preventDefault();
              setGalleryIndex(null);
            }}
            aria-label="Close gallery"
          >
            <X className="w-8 h-8 pointer-events-none" />
          </button>

          {/* Navigation - Left */}
          <button 
            className="fixed left-4 top-1/2 -translate-y-1/2 z-[10000] p-4 text-white/50 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setGalleryIndex(prev => (prev !== null && prev > 0 ? prev - 1 : allImages.length - 1));
            }}
          >
            <ChevronLeft className="w-10 h-10 drop-shadow-lg" />
          </button>

          {/* Navigation - Right */}
          <button 
            className="fixed right-4 top-1/2 -translate-y-1/2 z-[10000] p-4 text-white/50 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setGalleryIndex(prev => (prev !== null && prev < allImages.length - 1 ? prev + 1 : 0));
            }}
          >
            <ChevronRight className="w-10 h-10 drop-shadow-lg" />
          </button>

          {/* Counter */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10000] text-zinc-400 text-sm tracking-widest bg-black/50 px-6 py-2 rounded-full backdrop-blur-md border border-white/5 pointer-events-none select-none">
            {galleryIndex + 1} <span className="text-zinc-600 mx-2">/</span> {allImages.length}
          </div>

          {/* Image Container (Backdrop click closes) */}
          <div 
            className="w-full h-full flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setGalleryIndex(null)}
          >
            <img 
              src={allImages[galleryIndex]} 
              alt="Gallery view" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm cursor-default select-none animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>,
        document.body
      )}

      {/* Booking Modal - PORTAL */}
      {isBookingOpen && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 animate-in fade-in duration-200">
          <div className="bg-zinc-900/90 backdrop-blur-xl w-full max-w-lg rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5 backdrop-blur-md sticky top-0 z-10">
              <h3 className="text-xl font-serif text-white">Complete Reservation</h3>
              <button onClick={() => setIsBookingOpen(false)} className="text-zinc-500 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {bookingStep === 'form' && (
              <div className="p-6">
                <div className="flex gap-4 mb-6">
                  <img src={room.image} alt="Tiny preview" className="w-20 h-20 rounded-lg object-cover" />
                  <div>
                    <h4 className="font-semibold text-white">{room.name}</h4>
                    <p className="text-sm text-zinc-400">£{room.price} per night</p>
                  </div>
                </div>

                <form onSubmit={handleBook} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-500 mb-1.5">Check In</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          required
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 backdrop-blur-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-500 mb-1.5">Check Out</label>
                      <div className="relative">
                         <input 
                          type="date" 
                          required
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 backdrop-blur-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                     <label className="block text-xs font-medium text-zinc-500 mb-1.5">Full Name</label>
                     <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 backdrop-blur-sm"
                      />
                  </div>

                   <div>
                     <label className="block text-xs font-medium text-zinc-500 mb-1.5">Email Address</label>
                     <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 backdrop-blur-sm"
                      />
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-zinc-400 text-sm">Total (approx. 2 nights)</span>
                      <span className="text-xl font-semibold text-white">£{calculateTotal()}</span>
                    </div>
                    <button type="submit" className="w-full bg-white text-zinc-950 py-3.5 rounded-xl font-medium hover:bg-zinc-200 transition-colors">
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            )}

            {bookingStep === 'processing' && (
              <div className="p-12 flex flex-col items-center justify-center text-center">
                <Loader2 className="w-12 h-12 animate-spin text-zinc-500 mb-6" />
                <h3 className="text-lg font-medium text-white mb-2">Processing Reservation</h3>
                <p className="text-zinc-500 text-sm">Please wait while we secure your dates...</p>
              </div>
            )}

            {bookingStep === 'success' && (
              <div className="p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Reservation Confirmed</h3>
                <p className="text-zinc-400 mb-8 max-w-xs">
                  Thank you, {name}. A confirmation email has been sent to {email}. We look forward to welcoming you.
                </p>
                <button 
                  onClick={() => { setIsBookingOpen(false); setBookingStep('form'); onBack(); }}
                  className="bg-white/10 text-white px-8 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/5 backdrop-blur-md"
                >
                  Return to Home
                </button>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};