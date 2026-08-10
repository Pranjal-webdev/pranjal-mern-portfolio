import { useEffect, useState } from "react";
import { addSkill, getSkills, updateSkill, deleteSkill } from "../services/skillService";

const SkillsAdmin = () => {

    const [form, setForm] = useState({
        name: "",
        category: "Frontend",
        level: 80,
        icon: ""
    });

    const [skills, setSkills] = useState([]);

    const [loading, setLoading] = useState(false);

    const [editingId, setEditingId] = useState(null);

    const loadSkills = async () => {

        try {

            const data = await getSkills();
            setSkills(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadSkills();
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            if (editingId) {
                await updateSkill(editingId, form);
            } else {
                await addSkill(form);
            }

            setForm({
                name: "",
                category: "Frontend",
                level: 80,
                icon: ""
            });

            setEditingId(null);

            await loadSkills();

        } catch (error) {

            console.log(error);

        }

        setLoading(false);

    };


    const handleEdit = (skill) => {

        setForm({
            name: skill.name,
            category: skill.category,
            level: skill.level,
            icon: skill.icon
        });

        setEditingId(skill._id);

    };


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this skill?"
        );

        if (!confirmDelete) return;

        try {

            await deleteSkill(id);

            loadSkills();

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="text-white w-full max-w-full min-w-0 overflow-hidden">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">

                Skills Management

            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-[#151515] p-4 sm:p-6 lg:p-8 rounded-2xl border border-zinc-800"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                    <input
                        type="text"
                        name="name"
                        placeholder="Skill Name"
                        value={form.name}
                        onChange={handleChange}
                        className="bg-[#0d0d0d] border border-zinc-700 rounded-xl p-3 sm:p-4 outline-none"
                        required
                    />

                    <input
                        type="text"
                        name="icon"
                        placeholder="Icon Name (FaReact)"
                        value={form.icon}
                        onChange={handleChange}
                        className="bg-[#0d0d0d] border border-zinc-700 rounded-xl p-3 sm:p-4 outline-none"
                    />

                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="bg-[#0d0d0d] border border-zinc-700 rounded-xl p-3 sm:p-4"
                    >

                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>Tools</option>

                    </select>

                    <div className="w-full">

                        <label className="text-sm sm:text-base">

                            Skill Level : {form.level}%

                        </label>

                        <input
                            type="range"
                            min="1"
                            max="100"
                            name="level"
                            value={form.level}
                            onChange={handleChange}
                            className="w-full mt-2"
                        />

                    </div>

                </div>

                <button
                    className="mt-6 sm:mt-8 bg-orange-500 hover:bg-orange-600 px-6 sm:px-8 py-3 rounded-xl font-semibold w-full sm:w-auto"
                >

                    {loading
                        ? "Saving..."
                        : editingId
                            ? "Update Skill"
                            : "Add Skill"}

                </button>

            </form>

            <div className="mt-8 sm:mt-10 overflow-x-auto w-full">

                <table className="w-full min-w-[650px] border-collapse">

                    <thead>

                        <tr className="bg-orange-500">

                            <th className="p-3 sm:p-4">Name</th>

                            <th className="p-3 sm:p-4">Category</th>

                            <th className="p-3 sm:p-4">Level</th>

                            <th className="p-3 sm:p-4">Icon</th>

                            <th className="p-3 sm:p-4">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {skills.map((skill) => (

                            <tr
                                key={skill._id}
                                className="border-b border-zinc-800 text-center"
                            >

                                <td className="p-3 sm:p-4">

                                    {skill.name}

                                </td>

                                <td className="p-3 sm:p-4">

                                    {skill.category}

                                </td>

                                <td className="p-3 sm:p-4">

                                    {skill.level}%

                                </td>

                                <td className="p-3 sm:p-4">

                                    {skill.icon}

                                </td>

                                <td className="p-3 sm:p-4">

                                    <div className="flex flex-col sm:flex-row gap-2 justify-center">

                                        <button onClick={() => handleEdit(skill)} className="bg-blue-500 px-4 py-2 rounded mr-2">

                                            Edit

                                        </button>

                                        <button onClick={() => handleDelete(skill._id)} className="bg-red-500 px-4 py-2 rounded">

                                            Delete

                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default SkillsAdmin;