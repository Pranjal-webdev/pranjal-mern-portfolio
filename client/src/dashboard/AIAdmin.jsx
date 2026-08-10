import { useState } from "react";
import { generateProjectDescription } from "../services/aiService";
import { FaCopy, FaTrash } from "react-icons/fa";

const AIAdmin = () => {

    const [form, setForm] = useState({
        title: "",
        tech: "",
        features: ""
    });

    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleGenerate = async () => {

        if (!form.title.trim() || !form.tech.trim() || !form.features.trim()) {

        alert("Please fill all fields");

        return;
    }

        try {

            setLoading(true);

            const reply = await generateProjectDescription(form);

            setResult(reply);

        } catch (err) {

            console.log(err);

        }finally{
             
            setLoading(false);

        }

    };


    const handleCopy = async () => {

        if (!result) return;

        await navigator.clipboard.writeText(result);

        alert("Copied Successfully!");

    };

    const handleClear = () => {

        setForm({
            title: "",
            tech: "",
            features: ""
        });

        setResult("");

    };

    return (

        <div className="text-white">

            <h1 className="text-4xl font-bold mb-8">
                AI Project Description
            </h1>

            <div className="bg-[#151515] rounded-2xl p-8 space-y-5">

                <input
                    name="title"
                    placeholder="Project Name"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full bg-black p-4 rounded-xl required"
                />

                <input
                    name="tech"
                    placeholder="React, Node.js, MongoDB"
                    value={form.tech}
                    onChange={handleChange}
                    className="w-full bg-black p-4 rounded-xl required"
                />

                <textarea
                    rows="5"
                    name="features"
                    placeholder="Authentication, Admin Panel, Booking..."
                    value={form.features}
                    onChange={handleChange}
                    className="w-full bg-black p-4 rounded-xl required"
                />

                <button
                    onClick={handleGenerate}
                    className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl"
                >
                    {loading ? "Generating..." : "Generate"}
                </button>

            </div>

            {result && (

                <div className="bg-[#151515] rounded-2xl p-8 mt-8">

                    <div className="flex items-center justify-between mb-6">

                        <h2 className="text-2xl font-bold mb-5">
                            Generated Description
                        </h2>

                        <div className="flex gap-3">

                            <button
                                onClick={handleCopy}
                                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2"
                            >
                                <FaCopy />

                                Copy
                            </button>

                            <button
                                onClick={handleClear}
                                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2"
                            >
                                <FaTrash />

                                Clear
                            </button>

                        </div>

                    </div>

                    <p className="leading-8 whitespace-pre-wrap">
                        {result}
                    </p>

                </div>

            )}

        </div>

    );

};

export default AIAdmin;