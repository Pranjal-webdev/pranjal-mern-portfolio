import axios from "axios";

const API = "http://localhost:5001/api/ai";

export const askAI = async (message) => {
    const { data } = await axios.post(`${API}/chat`, {
        message
    });

    return data.reply;
};

export const generateProjectDescription = async (project) => {

  const { data } = await axios.post(
    "http://localhost:5001/api/ai/project-description",
    project
  );

  return data.reply;

};