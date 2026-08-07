import axios from "axios";

const API="http://localhost:5001/api/admin";

export const loginAdmin=async(formData)=>{

    const {data}=await axios.post(

        `${API}/login`,

        formData

    );

    return data;

};

export const registerAdmin = async (admin) => {

    const { data } = await axios.post(

        "http://localhost:5001/api/ai/register",

        admin

    );

    return data;

};