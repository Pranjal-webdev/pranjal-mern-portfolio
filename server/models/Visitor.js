import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({

    totalVisitors: {

        type: Number,

        default: 0

    }

});

export default mongoose.model("Visitor", visitorSchema);