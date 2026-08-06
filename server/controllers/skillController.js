import Skill from "../models/Skill.js";


// to Add Skill
export const addSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);

    res.status(201).json({
      success: true,
      skill
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// to Get All Skills
export const getSkills = async (req, res) => {
  try {

    const skills = await Skill.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      skills
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// to Update Skill
export const updateSkill = async (req, res) => {
  try {

    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

    res.json({
      success: true,
      skill
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// to Delete Skill
export const deleteSkill = async (req, res) => {
  try {

    await Skill.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Skill Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};