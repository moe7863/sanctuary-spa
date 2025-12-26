import React from 'react';
import { Wifi, Coffee, Bath, Sun, Utensils, Monitor } from 'lucide-react';
import { Room } from '../../types';

interface RoomCardProps {
  room: Room;
  onClick: (room: Room) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onClick }) => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'coffee': return <Coffee className="w-4 h-4" />;
      case 'bath': return <Bath className="w-4 h-4" />;
      case 'sun': return <Sun className="w-4 h-4" />;
      case 'utensils': return <Utensils className="w-4 h-4" />;
      case 'monitor': return <Monitor className="w-4 h-4" />;
      default: return <Wifi className="w-4 h-4" />;
    }
  };

  return (
    <div 
      className="group relative bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(room)}
    >
      <div className="aspect-[4/3] bg-zinc-800 relative overflow-hidden">
        <img 
          src={room.image} 
          alt={room.name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
        />
        <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md text-xs font-semibold px-3 py-1.5 rounded-md border border-white/10 text-white shadow-sm">
          £{room.price} <span className="text-zinc-400 font-normal">/ night</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-white mb-1 text-lg">{room.name}</h3>
            <p className="text-xs text-zinc-500 font-medium tracking-wide uppercase">{room.features.join(' · ')}</p>
          </div>
        </div>
        <div className="flex gap-4 text-zinc-500 mb-6">
          {room.amenities.map((amenity, i) => (
            <div key={i} title={amenity} className="hover:text-zinc-300 transition-colors">
              {getIcon(amenity)}
            </div>
          ))}
        </div>
        <button className="w-full py-3 rounded-xl border border-white/10 text-sm font-medium text-zinc-400 hover:text-white hover:border-white/20 transition-colors bg-gradient-to-b from-transparent to-white/5 hover:to-white/10">
          View Details
        </button>
      </div>
    </div>
  );
};