import axios from "axios";

const API = "http://localhost:5001/api/dashboard";

export const getDashboardStats = async () => {

    const { data } = await axios.get(`${API}/stats`);

    return data.stats;

};