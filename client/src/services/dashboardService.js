import axios from "axios";

const API = "http://${import.meta.env.import.meta.env.VITE_API_URL}/api/dashboard";

export const getDashboardStats = async () => {

    const token = localStorage.getItem("adminToken");

    const { data } = await axios.get(API,{
        
        headers: {
        
            Authorization: `Bearer ${token}`
        }

    });

    return data.stats;

};