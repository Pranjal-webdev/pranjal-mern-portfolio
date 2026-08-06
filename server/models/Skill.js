import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      enum: ["Frontend", "Backend", "Tools"],
      required: true
    },

    level: {
      type: Number,
      required: true,
      min: 1,
      max: 100
    },

    icon: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Skill", skillSchema);