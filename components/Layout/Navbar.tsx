import React, { useState, useEffect } from 'react';
import { TentTree, ArrowRight, Menu, X } from 'lucide-react';
import { PageView } from '../../types';

interface NavbarProps {
  onNavigate: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageView, hash?: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    if (hash && page === 'home') {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-white/5 shadow-sm' : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => handleNav('home')} className="text-lg font-semibold tracking-tighter flex items-center gap-2 text-white">
            <TentTree className="w-5 h-5" strokeWidth={1.5} />
            SANCTUARY
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <button onClick={() => handleNav('home', 'rooms')} className="hover:text-white transition-colors">Rooms</button>
            <button onClick={() => handleNav('home', 'amenities')} className="hover:text-white transition-colors">Experience</button>
            <button onClick={() => handleNav('dining')} className="hover:text-white transition-colors">Dining</button>
            <button onClick={() => handleNav('home', 'reviews')} className="hover:text-white transition-colors">Journal</button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => handleNav('home', 'rooms')} className="bg-white text-zinc-950 text-xs font-medium px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg shadow-zinc-900/20">
              Book Stay
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950 pt-24 px-6 md:hidden animate-fade-in-up border-b border-zinc-800">
           <div className="flex flex-col gap-6 text-xl font-medium text-white">
            <button className="text-left" onClick={() => handleNav('home', 'rooms')}>Rooms</button>
            <button className="text-left" onClick={() => handleNav('home', 'amenities')}>Experience</button>
            <button className="text-left" onClick={() => handleNav('dining')}>Dining</button>
            <button className="text-left" onClick={() => handleNav('home', 'reviews')}>Journal</button>
            <hr className="border-zinc-800" />
            <button onClick={() => handleNav('home', 'rooms')} className="bg-white text-zinc-950 text-sm font-medium px-5 py-3 rounded-full flex items-center justify-center gap-2">
              Book Stay
              <ArrowRight className="w-4 h-4" />
            </button>
           </div>
        </div>
      )}
    </>
  );
};