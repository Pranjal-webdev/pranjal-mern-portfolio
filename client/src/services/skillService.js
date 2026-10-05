import axios from "axios";

const API = "http://${import.meta.env.import.meta.env.VITE_API_URL}/api/skills";


const getConfig = () => ({

    headers: {

        Authorization: `Bearer ${localStorage.getItem("adminToken")}`

    }

});

export const getSkills = async () => {

  const { data } = await axios.get(API);

  return data.skills;

};

export const addSkill = async (skill) => {

  const { data } = await axios.post(API, skill, getConfig());

  return data.skill;

};

export const updateSkill = async (id, skill) => {

  const { data } = await axios.put(`${API}/${id}`, skill, getConfig());

  return data.skill;

};

export const deleteSkill = async (id) => {

  const { data } = await axios.delete(`${API}/${id}`, getConfig());

  return data;
  
};