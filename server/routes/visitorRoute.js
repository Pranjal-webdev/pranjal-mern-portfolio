import express from "express";
import { increaseVisitor, getVisitors } from "../controllers/visitorController.js";

const router = express.Router();

router.post("/", increaseVisitor);

router.get("/", getVisitors);

export default router;