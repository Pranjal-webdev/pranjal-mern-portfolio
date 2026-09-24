import { useState } from "react";
import { loginAdmin } from "../services/adminServices";
import { useNavigate } from "react-router-dom";

const Login = () => {

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

            const data = await loginAdmin(formData);

            localStorage.setItem(

                "adminToken",

                data.token

            );

            navigate("/dashboard");

        }

        catch (error) {

            alert(error.response.data.message || "Login Failed");

        }

        finally {

            setLoading(false);
        }

    };

    return (

        <div className="min-h-screen bg-black flex justify-center items-center">

            <form
                onSubmit={handleSubmit}
                className="w-[400px] bg-[#111] p-8 rounded-2xl border border-zinc-800"
            >

                <h1 className="text-4xl font-bold text-center text-white mb-8">

                    Admin <span className="text-orange-500">Login</span>

                </h1>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black text-white p-4 rounded-xl border border-zinc-700 mb-5 outline-none"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-black text-white p-4 rounded-xl border border-zinc-700 mb-6 outline-none"
                />

                <button
                    className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl text-white font-semibold"
                >

                    {

                        loading

                            ?

                            "Logging In..."

                            :

                            "Login"

                    }

                </button>

            </form>

        </div>

    );

}

export default Login;