import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import aiRoute from "./routes/aiRoute.js";

dotenv.config();

console.log("Server starting...");

const app = express();


app.use(cors());

app.use(express.json());


app.use("/api/ai", aiRoute);


app.get("/",(req,res)=>{
    res.send("AI Server Running");
});


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

console.log("Reached end of file");