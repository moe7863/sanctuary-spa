import React, { useState, useEffect } from 'react';
import { TentTree, ArrowRight, Menu, X, CloudFog, CloudRain, Sun, CloudSnow } from 'lucide-react';
import { PageView } from '../../types';

interface NavbarProps {
  onNavigate: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [weather, setWeather] = useState({ temp: 11, condition: 'Mist' });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Fetch real weather for Ambleside, UK
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=54.4284&longitude=-2.9621&current=temperature_2m,weather_code&timezone=Europe%2FLondon'
        );
        const data = await response.json();
        
        if (data.current) {
          const code = data.current.weather_code;
          let conditionText = 'Cloudy';
          
          // Simple WMO code mapping
          if (code === 0 || code === 1) conditionText = 'Clear';
          else if (code <= 3) conditionText = 'Cloudy';
          else if (code <= 48) conditionText = 'Fog';
          else if (code <= 67) conditionText = 'Rain';
          else if (code <= 77) conditionText = 'Snow';
          else if (code <= 82) conditionText = 'Showers';
          else conditionText = 'Storm';

          setWeather({
            temp: Math.round(data.current.temperature_2m),
            condition: conditionText
          });
        }
      } catch (error) {
        console.error('Failed to fetch weather', error);
      }
    };

    fetchWeather();

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

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'Clear': return <Sun className="w-3.5 h-3.5" />;
      case 'Rain': 
      case 'Showers': return <CloudRain className="w-3.5 h-3.5" />;
      case 'Snow': return <CloudSnow className="w-3.5 h-3.5" />;
      default: return <CloudFog className="w-3.5 h-3.5" />;
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-white/5 shadow-sm' : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={() => handleNav('home')} className="text-lg font-semibold tracking-tighter flex items-center gap-2 text-white">
              <TentTree className="w-5 h-5" strokeWidth={1.5} />
              SANCTUARY
            </button>
            
            {/* Weather Widget (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
              {getWeatherIcon()}
              <span>Lake District {weather.temp}°C</span>
              <span className="w-1 h-1 rounded-full bg-zinc-600 mx-1"></span>
              <span>{weather.condition}</span>
            </div>
          </div>

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