import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyB2dj6yLA2-q-q2ccWwfgHyAC_gXuXjEB4";

async function testModels() {
  const genAI = new GoogleGenerativeAI(API_KEY);

  const models = [
    "gemini-2.5-pro-exp-03-25",
    "gemini-2.5-flash-preview-04-17",
    "gemini-2.0-flash",
    "gemini-2.0-flash-lite",
    "gemini-1.5-pro",
    "gemini-1.5-flash",
  ];

  for (const modelName of models) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("Respond with one word: ready");
      const text = result.response.text();
      console.log(`✓ ${modelName}: "${text}"`);
    } catch (err) {
      console.log(`✗ ${modelName}: ${err.message?.slice(0, 100)}`);
    }
  }
}

testModels().catch(console.error);
