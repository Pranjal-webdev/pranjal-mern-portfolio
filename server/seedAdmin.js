import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";
import connectDB from "./config/db.js";

dotenv.config();

await connectDB();

const hash=await bcrypt.hash("admin123",10);

await Admin.deleteMany();

await Admin.create({

    email:"admin@gmail.com",

    password:hash

});

console.log("Admin Created");

process.exit();