import { GoogleGenAI } from "@google/genai";

// Safely access environment variables to prevent crashes in browser environments where 'process' is undefined
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY || '';
    }
  } catch (e) {
    // Ignore error if process is not defined
  }
  return '';
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the virtual concierge for "Sanctuary", a luxury boutique bed & breakfast located in the heart of the Lake District, UK.
Your tone is calm, polite, sophisticated, British, and helpful. 
Key Hotel Details:
- Location: Forest Side Estate, Ambleside, Lake District, LA22 9ET, United Kingdom.
- Vibe: Minimal retreat, disconnecting from city life, surrounded by fells and lakes.
- Rooms: The Loft (£240), Garden Suite (£320), The Residence (£450). Prices per night.
- Amenities: Farm-to-table breakfast (organic/local Cumbria produce), Nordic Spa (sauna/cold plunge), Complimentary bicycles, High-speed fiber Wifi.
- Policies: Check-in 3PM, Check-out 11AM. Pet friendly in Garden Suite only.
- Dining: Breakfast included. Dinner reservations available at local Michelin star partners (The Old Stamp House, etc.).
- Weather: Often rainy/misty, advise guests to bring wellies and waterproofs.

Answer questions briefly and helpful. If asked about booking, encourage them to use the 'Book Stay' button.
`;

export const sendMessageToConcierge = async (message: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  try {
    if (!apiKey) {
      console.warn("API Key is missing. Please check your .env configuration.");
      return "I'm sorry, I cannot connect to the concierge service at the moment (Configuration Error).";
    }

    const model = 'gemini-3-flash-preview'; 
    
    // Construct the chat history for context
    const chat = ai.chats.create({
        model: model,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, I am having trouble understanding right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm currently unable to process your request. Please try again later.";
  }
};