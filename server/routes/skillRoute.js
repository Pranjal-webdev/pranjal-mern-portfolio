import express from "express";
import adminAuth from "../middleware/adminAuth.js";

import {addSkill,getSkills,updateSkill,deleteSkill} from "../controllers/skillController.js";

const router = express.Router();

router.post("/", adminAuth, addSkill);

router.get("/", getSkills);

router.put("/:id", adminAuth, updateSkill);

router.delete("/:id", adminAuth, deleteSkill);

export default router;