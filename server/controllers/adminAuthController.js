import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerAdmin = async (req,res)=>{

    try{

        const {email,password}=req.body;

        const adminExists=await Admin.findOne({email});

        if(adminExists){

            return res.status(400).json({

                message:"Admin Already Exists"

            });

        }

        const hashedPassword=await bcrypt.hash(password,10);

        const admin=await Admin.create({

            email,

            password:hashedPassword

        });

        res.status(201).json({

            message:"Admin Registered Successfully",

            admin

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:error.message,

            error

        });

    }

};

export const loginAdmin = async (req,res)=>{

    try{

        const {email,password}=req.body;

        const admin=await Admin.findOne({email});

        if(!admin){

            return res.status(401).json({
                message:"Invalid Email"
            });

        }

        const isMatch=await bcrypt.compare(password,admin.password);

        if(!isMatch){

            return res.status(401).json({
                message:"Invalid Password"
            });

        }

        const token=jwt.sign(

            {
                id:admin._id
            },

            process.env.JWT_SECRET,

            {
                expiresIn:"7d"
            }

        );

        res.json({

            success: true,

            message: "Login successful",

            token,

            admin:{

                id:admin._id,

                email:admin.email

            }

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:"Server Error"

        });

    }

};