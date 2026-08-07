import express from "express";
import { askAI, generateProjectDescription } from "../controllers/aiController.js";
import { loginAdmin } from "../controllers/adminAuthController.js";


const router = express.Router();


router.post("/chat", askAI);
router.post("/login",loginAdmin);
router.post("/project-description", generateProjectDescription);


export default router;