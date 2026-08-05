import React,{useState} from "react";
import {loginAdmin} from "../services/adminServices";
import {useNavigate} from "react-router-dom";

const Login=()=>{

    const navigate=useNavigate();

    const[formData,setFormData]=useState({

        email:"",

        password:""

    });

    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            const data=await loginAdmin(formData);

            localStorage.setItem(

                "adminToken",

                data.token

            );

            navigate("/admin/dashboard");

        }

        catch(error){

            alert(error.response.data.message);

        }

    };

    return(

        <div>

            Login Page

        </div>

    );

};

export default Login;