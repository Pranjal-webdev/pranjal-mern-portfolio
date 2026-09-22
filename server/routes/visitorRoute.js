import express from "express";
import { increaseVisitor, getVisitors } from "../controllers/visitorController.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

router.post("/", increaseVisitor);
router.get("/", adminAuth, getVisitors);

export default router;