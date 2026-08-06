import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    image: {
      type: String,
      default: ""
    },

    github: {
      type: String,
      default: ""
    },

    live: {
      type: String,
      default: ""
    },

    technologies: [
      {
        type: String
      }
    ],

    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Project", projectSchema);