import axios from "axios";

const API = "http://${import.meta.env.import.meta.env.VITE_API_URL}/api/messages";


const getConfig = () => ({

    headers: {

        Authorization: `Bearer ${localStorage.getItem("adminToken")}`

    }

});

export const sendMessage = async (message) => {

    const { data } = await axios.post(API, message);

    return data;

};

export const getMessages = async () => {

    const token = localStorage.getItem("adminToken");

    const { data } = await axios.get(API, {

        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data.messages;

};

export const deleteMessage = async (id) => {

    const token = localStorage.getItem("adminToken");

    const { data } = await axios.delete(`${API}/${id}`, {

        headers: {
            
            Authorization: `Bearer ${token}`

        }
    });

    return data;

};