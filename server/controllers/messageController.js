import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {

    try {

        const message = await Message.create(req.body);

        res.status(201).json({
            success: true,
            message
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


export const getMessages = async (req, res) => {

    try {

        const messages = await Message.find().sort({
            createdAt: -1
        });

        res.json({
            success: true,
            messages
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const deleteMessage = async (req, res) => {

    try {

        await Message.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Message deleted"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};