export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  guests: number;
  size: string;
  amenities: string[];
  features: string[];
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon?: string;
  large?: boolean;
  dark?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
