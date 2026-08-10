import { useEffect, useState } from "react";
import { addProject, getProjects, deleteProject, updateProject } from "../services/projectService";

const ProjectsAdmin = () => {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        title: "",
        description: "",
        image: "",
        github: "",
        live: "",
        technologies: "",
        featured: false
    });

    const loadProjects = async () => {

        try {

            const data = await getProjects();
            setProjects(data);

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {
        loadProjects();
    }, []);


    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const projectData = {

                ...form,

                technologies: form.technologies
                    .split(",")
                    .map((tech) => tech.trim())

            };

            if (editingId) {

                await updateProject(editingId, projectData);

            } else {

                await addProject(projectData);

            }

            setForm({
                title: "",
                description: "",
                image: "",
                github: "",
                live: "",
                technologies: "",
                featured: false
            });

            setEditingId(null);

            await loadProjects();

        } catch (error) {

            console.log(error);

        }

        setLoading(false);

    };


    const handleDelete = async (id) => {

        if (!window.confirm("Delete this project?")) return;

        try {

            await deleteProject(id);

            loadProjects();

        }

        catch (error) {

            console.log(error);

        }

    };


    return (

        <div className="text-white w-full min-w-0 overflow-hidden">

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">

                Projects Management

            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-[#151515] border border-zinc-800 rounded-2xl p-4 sm:p-6 lg:p-8"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Project Title"
                        className="bg-black p-3 sm:p-4 rounded-xl"
                        required
                    />

                    <input
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        className="bg-black p-3 sm:p-4 rounded-xl"
                    />

                    <input
                        name="github"
                        value={form.github}
                        onChange={handleChange}
                        placeholder="Github Link"
                        className="bg-black p-3 sm:p-4 rounded-xl"
                    />

                    <input
                        name="live"
                        value={form.live}
                        onChange={handleChange}
                        placeholder="Live Demo"
                        className="bg-black p-3 sm:p-4 rounded-xl"
                    />

                </div>

                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="bg-black p-3 sm:p-4 rounded-xl w-full mt-6"
                    rows="5"
                    required
                />

                <input
                    name="technologies"
                    value={form.technologies}
                    onChange={handleChange}
                    placeholder="React, Node, MongoDB"
                    className="bg-black p-3 sm:p-4 rounded-xl w-full mt-6"
                />

                <label className="flex items-center gap-5 sm:mt-6">

                    <input
                        type="checkbox"
                        name="featured"
                        checked={form.featured}
                        onChange={handleChange}
                    />

                    Featured Project

                </label>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">

                    <button
                        className="bg-orange-500 hover:bg-orange-600 px-6 sm:px-8 py-3 rounded-xl w-full sm:w-auto"
                    >

                        {loading ? "Saving..."
                            : editingId
                                ? "Update Project"
                                : "Add Project"
                        }

                    </button>

                    {
                        editingId && (

                            <button
                                type="button"
                                onClick={() => {

                                    setEditingId(null);

                                    setForm({
                                        title: "",
                                        description: "",
                                        image: "",
                                        github: "",
                                        live: "",
                                        technologies: "",
                                        featured: false
                                    });

                                }}

                                className="bg-gray-700 hover:bg-gray-800 px-6 sm:px-8 py-3 rounded-xl w-full sm:w-auto"
                            >

                                Cancel

                            </button>

                        )
                    }

                </div>

            </form>

            <div className="mt-8 sm:mt-10 overflow-x-auto w-full">

                <table className="w-full min-w-[650px]">

                    <thead>

                        <tr className="bg-orange-500">

                            <th className="p-3 sm:p-4">Title</th>

                            <th className="p-3 sm:p-4">Description</th>

                            <th className="p-3 sm:p-4">Featured</th>

                            <th className="p-3 sm:p-4">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {projects.map((project) => (

                            <tr
                                key={project._id}
                                className="border-b border-zinc-800 text-center"
                            >

                                <td className=""p-3 sm:p-4>

                                    {project.title}

                                </td>

                                <td className="p-3 sm:p-4">

                                    {project.description.substring(0, 40)}...

                                </td>

                                <td className="p-3 sm:p-4">

                                    {project.featured ? "⭐" : "-"}

                                </td>

                                <td className="p-3 sm:p-4">

                                    <div className="flex flex-col sm:flex-row gap-2 justify-center">

                                        <button className="bg-blue-500 px-4 py-2 rounded mr-2"
                                            onClick={() => {

                                                setEditingId(project._id);

                                            setForm({

                                                title: project.title,

                                                description: project.description,

                                                image: project.image,

                                                github: project.github,

                                                live: project.live,

                                                technologies: project.technologies.join(", "),

                                                featured: project.featured

                                            });

                                        }}
                                    >

                                        Edit

                                    </button>

                                    <button onClick={() => handleDelete(project._id)} className="bg-red-500 px-4 py-2 rounded">

                                        Delete

                                    </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div >

    );

};

export default ProjectsAdmin;