import Skill from "../models/Skill.js";
import Project from "../models/Project.js";
import Message from "../models/Message.js";

export const getDashboardStats = async (req, res) => {

    try {

        const skills = await Skill.countDocuments();

        const projects = await Project.countDocuments();

        const messages = await Message.countDocuments();

        res.json({
            success: true,
            stats: {
                skills,
                projects,
                messages
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};