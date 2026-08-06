import axios from "axios";

const API = "http://localhost:5001/api/skills";

export const getSkills = async () => {

  const { data } = await axios.get(API);

  return data.skills;

};

export const addSkill = async (skill) => {

  const { data } = await axios.post(API, skill);

  return data.skill;

};

export const updateSkill = async (id, skill) => {

  const { data } = await axios.put(`${API}/${id}`, skill);

  return data.skill;

};

export const deleteSkill = async (id) => {

  const { data } = await axios.delete(`${API}/${id}`);

  return data;
  
};