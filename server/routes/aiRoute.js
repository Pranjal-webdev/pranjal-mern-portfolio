import express from "express";
import { askAI } from "../controllers/aiController.js";
import { loginAdmin } from "../controllers/adminAuthController.js";


const router = express.Router();


router.post("/chat", askAI);
router.post("/login",loginAdmin);


export default router;