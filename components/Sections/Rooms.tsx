import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RoomCard } from '../UI/RoomCard';
import { Room } from '../../types';
import { FadeIn } from '../UI/FadeIn';

const roomsData: Room[] = [
  {
    id: '1',
    name: 'The Loft',
    description: 'A cozy retreat.',
    price: 240,
    image: 'https://images.unsplash.com/photo-1590490360182-f33fb0d41386?q=80&w=800&auto=format&fit=crop',
    guests: 2,
    size: '35m²',
    features: ['2 Guests', '35m²', 'Mountain View'],
    amenities: ['Wifi', 'Coffee', 'Bath']
  },
  {
    id: '2',
    name: 'Garden Suite',
    description: 'Direct access to nature.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop',
    guests: 2,
    size: '45m²',
    features: ['2 Guests', '45m²', 'Private Terrace'],
    amenities: ['Wifi', 'Coffee', 'Sun']
  },
  {
    id: '3',
    name: 'The Residence',
    description: 'Ultimate luxury.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
    guests: 4,
    size: '80m²',
    features: ['4 Guests', '80m²', 'Full Kitchen'],
    amenities: ['Wifi', 'Utensils', 'Monitor']
  }
];

export const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Our Suites</h2>
              <p className="text-zinc-400">Thoughtfully designed spaces for rest and reflection.</p>
            </div>
            <a href="#" className="text-sm font-medium text-white flex items-center gap-1 hover:gap-2 transition-all group">
              View all availability
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomsData.map((room, index) => (
            <FadeIn key={room.id} delay={index * 100}>
              <RoomCard room={room} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};