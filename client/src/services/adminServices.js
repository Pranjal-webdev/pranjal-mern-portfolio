import axios from "axios";

const API=`${import.meta.env.VITE_API_URL}/admin`;

export const loginAdmin=async(formData)=>{

    const {data}=await axios.post(

        `${API}/login`,

        formData

    );

    return data;

};

export const registerAdmin = async (admin) => {

    const { data } = await axios.post(

        `${API}/register`,
        
        admin

    );

    return data;

};