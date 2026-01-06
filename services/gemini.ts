
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Universal  (VGU) AI Assistant. 
Your goal is to help prospective and current students with information about the college.
Colors of the brand are Deep Green (#004B49) and Gold (#E1AD01).
VGU offers Engineering, Arts, Science, and Business courses.
Be polite, professional, and encouraging. 
If asked about admissions, direct them to the "Application Form" section of the website.
Keep responses concise and helpful.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    // Correct Initialization: Always use a named parameter for apiKey and use process.env.API_KEY directly.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Correct Text Extraction: Use the .text property (not a method) on the response object.
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently taking a break. Please try again later.";
  }
};
