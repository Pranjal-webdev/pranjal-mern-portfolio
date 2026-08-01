import OpenAI from "openai";
import "dotenv/config";


const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
});


export const askAI = async(req,res)=>{

    try{

        const {message}=req.body;


        const response = await client.chat.completions.create({

            model:"gpt-4o-mini",

            messages:[

                {
                    role:"system",
                    content:
                    `
                    You are Pranjal's portfolio AI assistant.

                    Information about Pranjal:
                    - Full Stack MERN Developer
                    - Skills: React, Node.js, Express, MongoDB, Tailwind CSS
                    - Built projects like Car Rental Website
                    - Interested in AI powered applications.

                    Answer professionally.
                    `
                },

                {
                    role:"user",
                    content:message
                }

            ]

        });


        res.json({

            reply:
            response.choices[0].message.content

        });


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

}