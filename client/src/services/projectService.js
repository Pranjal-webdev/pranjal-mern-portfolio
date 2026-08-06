import axios from "axios";

const API = "http://localhost:5001/api/projects";

export const getProjects = async () => {

  const { data } = await axios.get(API);

  return data.projects;

};

export const addProject = async (project) => {

  const { data } = await axios.post(API, project);

  return data.project;
  
};

export const updateProject = async (id, project) => {

  const { data } = await axios.put(`${API}/${id}`, project);

  return data.project;

};

export const deleteProject = async (id) => {

  const { data } = await axios.delete(`${API}/${id}`);

  return data;

};