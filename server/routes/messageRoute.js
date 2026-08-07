import express from "express";
import { sendMessage,getMessages,deleteMessage} from "../controllers/messageController.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

router.post("/", sendMessage);

router.get("/", adminAuth, getMessages);

router.delete("/:id", adminAuth, deleteMessage);

export default router;