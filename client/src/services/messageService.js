import axios from "axios";

const API = "http://localhost:5001/api/messages";

export const sendMessage = async (message) => {

    const { data } = await axios.post(API, message);

    return data;

};

export const getMessages = async () => {

    const { data } = await axios.get(API);

    return data.messages;

};

export const deleteMessage = async (id) => {

    const { data } = await axios.delete(`${API}/${id}`);

    return data;

};