import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
});


export const askAI = async(req,res)=>{

    try{


        const {message}=req.body;


        const response = await ai.models.generateContent({

            model:"gemini-3.6-flash",

            contents: `
You are Pranjal's AI Portfolio Assistant.

Information about Pranjal:

- Full Stack MERN Developer.
- MCA Student.
- Skills:
  HTML
  CSS
  JavaScript
  React.js
  Tailwind CSS
  Node.js
  Express.js
  MongoDB
  Git
  GitHub
  Vercel
  Render
  Thunder Client

Projects:
1. Car Rental MERN Application
   - Authentication
   - Cart
   - Booking
   - Admin Dashboard

2. MERN Portfolio

3. E-Commerce UI

Answer only portfolio-related questions professionally.

User Question:
${message}
`

        });

        res.json({

            reply: response.text

        });

    } catch (error) {

        console.log("===== GEMINI ERROR =====");

        console.dir(error, { depth: null });


        res.status(500).json({

            message: error.message

        });

    }
};
