import Skill from "../models/Skill.js";
import Project from "../models/Project.js";
import Message from "../models/Message.js";
import Visitor from "../models/Visitor.js";

export const getDashboardStats = async (req, res) => {

    const visitor = await Visitor.findOne();

    try {

        const totalSkills = await Skill.countDocuments();

        const totalProjects = await Project.countDocuments();

        const totalMessages = await Message.countDocuments();

        res.json({
            success: true,
            stats: {
                totalSkills,
                totalProjects,
                totalMessages,
                totalVisitors: visitor ? visitor.totalVisitors : 0
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};