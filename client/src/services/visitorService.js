import axios from "axios";

const API = "http://localhost:5001/api/visitors";

export const increaseVisitor = async () => {

    await axios.post(API);

};

export const getVisitors = async () => {

    const { data } = await axios.get(API);

    return data.totalVisitors;

};