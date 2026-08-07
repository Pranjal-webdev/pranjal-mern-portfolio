import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import aiRoute from "./routes/aiRoute.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";
import skillRoute from "./routes/skillRoute.js";
import projectRoute from "./routes/projectRoute.js";
import messageRoute from "./routes/messageRoute.js";
import dashboardRoute from "./routes/dashboardRoute.js";
import visitorRoutes from "./routes/visitorRoute.js";

dotenv.config();
connectDB();

console.log("Server starting...");

const app = express();


app.use(cors());

app.use(express.json());


app.use("/api/ai", aiRoute);
app.use("/api/admin",adminAuthRoutes);
app.use("/api/skills", skillRoute);
app.use("/api/projects", projectRoute);
app.use("/api/messages", messageRoute);
app.use("/api/dashboard", dashboardRoute);
app.use("/api/visitors", visitorRoutes);


app.get("/",(req,res)=>{
    res.send("AI Server Running");
});


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

console.log("Reached end of file");