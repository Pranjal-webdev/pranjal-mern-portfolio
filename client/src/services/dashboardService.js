import axios from "axios";

const API = "http://localhost:5001/api/dashboard";

export const getDashboardStats = async () => {

    const token = localStorage.getItem("adminToken");

    const { data } = await axios.get(API,{
        
        headers: {
        
            Authorization: `Bearer ${token}`
        }

    });

    return data.stats;

};