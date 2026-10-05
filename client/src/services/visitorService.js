import axios from "axios";

const API = "http://${import.meta.env.import.meta.env.VITE_API_URL}/api/visitors";

export const increaseVisitor = async () => {

    await axios.post(API);

};

export const getVisitors = async () => {

    const { data } = await axios.get(API);

    return data.totalVisitors;

};