import express from "express";
import { addProject,getProjects,updateProject,deleteProject } from "../controllers/projectController.js";
import adminAuth from "../middleware/adminAuth.js";


const router = express.Router();

router.post("/", adminAuth, addProject);

router.get("/", getProjects);

router.put("/:id", adminAuth, updateProject);

router.delete("/:id", adminAuth, deleteProject);

export default router;