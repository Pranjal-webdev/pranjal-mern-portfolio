import { useState } from "react";
import { registerAdmin } from "../services/adminServices";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        email: "",

        password: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const data = await registerAdmin(formData);

            alert(data.message);

            navigate("/admin");

        }

        catch (error) {

            alert(error.response?.data?.message || "Registration Failed");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-black flex justify-center items-center">

            <form
                onSubmit={handleSubmit}
                className="w-[400px] bg-[#111] border border-zinc-800 rounded-2xl p-8"
            >

                <h1 className="text-4xl font-bold text-center text-white mb-8">

                    Admin <span className="text-orange-500">Register</span>

                </h1>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-orange-500 mb-5"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-orange-500 mb-6"
                />

                <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl text-white font-semibold"
                >

                    {

                        loading

                            ?

                            "Registering..."

                            :

                            "Register"

                    }

                </button>

            </form>

            <p className="text-center text-gray-400 mt-6">

                Already have an account?

                <span
                    onClick={() => navigate("/admin")}
                    className="text-orange-500 cursor-pointer ml-2"
                >
                    Login
                </span>

            </p>

        </div>

    );

};

export default Register;