import express from "express";
import { askAI, generateProjectDescription } from "../controllers/aiController.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

router.post("/chat", adminAuth, askAI);
router.post("/project-description", adminAuth, generateProjectDescription);

export default router;