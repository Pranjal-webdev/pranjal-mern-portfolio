import express from "express";

import {addSkill,getSkills,updateSkill,deleteSkill} from "../controllers/skillController.js";

const router = express.Router();

router.post("/", addSkill);

router.get("/", getSkills);

router.put("/:id", updateSkill);

router.delete("/:id", deleteSkill);

export default router;