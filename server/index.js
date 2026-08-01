import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import aiRoute from "./routes/aiRoute.js";

dotenv.config();

const app = express();


app.use(cors());

app.use(express.json());


app.use("/api/ai", aiRoute);


app.get("/",(req,res)=>{
    res.send("AI Server Running");
});


app.listen(5000,()=>{
    console.log("Server running on port 5000");
});