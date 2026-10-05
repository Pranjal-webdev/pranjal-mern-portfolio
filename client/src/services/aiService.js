import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/ai`;

export const askAI = async (message) => {
    const { data } = await axios.post(`${API}/chat`, {
        message
    });

    return data.reply;
};

export const generateProjectDescription = async (project) => {

  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/ai/project-description`,
    project
  );

  return data.reply;

};