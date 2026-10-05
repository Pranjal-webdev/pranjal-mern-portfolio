import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/visitors`;

export const increaseVisitor = async () => {

    await axios.post(API);

};

export const getVisitors = async () => {

    const { data } = await axios.get(API);

    return data.totalVisitors;

};