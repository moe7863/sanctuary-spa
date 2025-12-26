import React from 'react';

export interface Room {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  image: string;
  images?: string[];
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

export type PageView = 
  | 'home' 
  | 'room-detail' 
  | 'journal-detail'
  | 'our-story' 
  | 'dining' 
  | 'activities' 
  | 'faq' 
  | 'terms' 
  | 'privacy' 
  | 'contact';

export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content?: React.ReactNode;
}