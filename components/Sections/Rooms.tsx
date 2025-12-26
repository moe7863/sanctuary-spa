import React from "react";
import { ArrowRight } from "lucide-react";
import { RoomCard } from "../UI/RoomCard";
import { Room } from "../../types";
import { FadeIn } from "../UI/FadeIn";

const roomsData: Room[] = [
  {
    id: "1",
    name: "The Loft",
    description:
      "A cozy retreat nestled in the eaves, offering panoramic views of the rolling fells. Perfect for solo travelers or couples seeking intimacy.",
    price: 240,
    image: "/images/room-loft-1.jpg",
    images: ["/images/room-loft-2.jpg", "/images/room-loft-3.jpg"],
    guests: 2,
    size: "35m²",
    features: ["2 Guests", "35m²", "Fell View"],
    amenities: ["Wifi", "Coffee", "Bath"],
  },
  {
    id: "2",
    name: "Garden Suite",
    description:
      "Direct access to our heritage gardens. Wake up to the sound of nature and enjoy your morning coffee on your private terrace.",
    price: 320,
    image: "/images/room-garden-1.avif",
    images: ["/images/room-garden-1.avif", "/images/room-garden-2.avif"],
    guests: 2,
    size: "45m²",
    features: ["2 Guests", "45m²", "Private Terrace"],
    amenities: ["Wifi", "Coffee", "Sun"],
  },
  {
    id: "3",
    name: "The Residence",
    description:
      "Our premier accommodation offering ultimate luxury and space. Features a separate living area, full kitchenette, and dual-aspect views.",
    price: 450,
    image: "/images/room-residence-1.avif",
    images: ["/images/room-residence-1.avif", "/images/room-residence-2.avif"],
    guests: 4,
    size: "80m²",
    features: ["4 Guests", "80m²", "Kitchenette"],
    amenities: ["Wifi", "Utensils", "Monitor"],
  },
];

interface RoomsProps {
  onRoomSelect: (room: Room) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onRoomSelect }) => {
  return (
    <section id="rooms" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">
                Our Suites
              </h2>
              <p className="text-zinc-400">
                Thoughtfully designed spaces for rest and reflection in the
                English countryside.
              </p>
            </div>
            <button className="text-sm font-medium text-white flex items-center gap-1 hover:gap-2 transition-all group">
              View all availability
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomsData.map((room, index) => (
            <FadeIn key={room.id} delay={index * 100}>
              <RoomCard room={room} onClick={onRoomSelect} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
