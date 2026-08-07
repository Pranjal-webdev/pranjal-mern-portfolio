import axios from "axios";

const API = "http://localhost:5001/api/projects";

const token = localStorage.getItem("adminToken");

const getConfig = {

    headers: {

        Authorization: `Bearer ${localStorage.getItem("adminToken")}`

    }

};

export const getProjects = async () => {

  const { data } = await axios.get(API);

  return data.projects;

};

export const addProject = async (project) => {

  const { data } = await axios.post(API, project, getConfig());

  return data.project;
  
};

export const updateProject = async (id, project) => {

  const { data } = await axios.put(`${API}/${id}`, project, getConfig());

  return data.project;

};

export const deleteProject = async (id) => {

  const { data } = await axios.delete(`${API}/${id}`, getConfig());

  return data;

};