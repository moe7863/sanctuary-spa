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
You are the virtual concierge for "Sanctuary", a luxury boutique bed & breakfast located in the Catskills, NY.
Your tone is calm, polite, sophisticated, and helpful. 
Key Hotel Details:
- Location: 1280 Pine Valley Road, Catskills, NY.
- Vibe: Minimal retreat, disconnecting from city life.
- Rooms: The Loft ($240), Garden Suite ($320), The Residence ($450).
- Amenities: Farm-to-table breakfast (organic/local), Nordic Spa (sauna/cold plunge), Complimentary bicycles, High-speed fiber Wifi.
- Policies: Check-in 3PM, Check-out 11AM. Pet friendly in Garden Suite only.
- Dining: Breakfast included. Dinner reservations available at partner restaurants nearby.

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