import axios from "axios";

const API = "http://${import.meta.env.VITE_API_URL}/api/ai";

export const askAI = async (message) => {
    const { data } = await axios.post(`${API}/chat`, {
        message
    });

    return data.reply;
};

export const generateProjectDescription = async (project) => {

  const { data } = await axios.post(
    "http://${import.meta.env.VITE_API_URL}/api/ai/project-description",
    project
  );

  return data.reply;

};