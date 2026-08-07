import Visitor from "../models/Visitor.js";

export const increaseVisitor = async (req, res) => {

    try {

        let visitor = await Visitor.findOne();

        if (!visitor) {

            visitor = await Visitor.create({

                totalVisitors: 1

            });

        }

        else {

            visitor.totalVisitors += 1;

            await visitor.save();

        }

        res.json({

            success: true,

            totalVisitors: visitor.totalVisitors

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



export const getVisitors = async (req, res) => {

    try {

        let visitor = await Visitor.findOne();

        if (!visitor) {

            visitor = await Visitor.create({

                totalVisitors: 0

            });

        }

        res.json({

            success: true,

            totalVisitors: visitor.totalVisitors

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};