import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

try {

    const response = await ai.models.generateContent({

        model: "gemini-3.6-flash",

        contents: "Hello"

    });

    console.log(response);

} catch (err) {

    console.dir(err, { depth: null });

}