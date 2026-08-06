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

        <div className="text-white">

            <h1 className="text-4xl font-bold mb-8">

                Projects Management

            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-[#151515] border border-zinc-800 rounded-2xl p-8"
            >

                <div className="grid md:grid-cols-2 gap-6">

                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Project Title"
                        className="bg-black p-4 rounded-xl"
                        required
                    />

                    <input
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        className="bg-black p-4 rounded-xl"
                    />

                    <input
                        name="github"
                        value={form.github}
                        onChange={handleChange}
                        placeholder="Github Link"
                        className="bg-black p-4 rounded-xl"
                    />

                    <input
                        name="live"
                        value={form.live}
                        onChange={handleChange}
                        placeholder="Live Demo"
                        className="bg-black p-4 rounded-xl"
                    />

                </div>

                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="bg-black p-4 rounded-xl w-full mt-6"
                    rows="5"
                    required
                />

                <input
                    name="technologies"
                    value={form.technologies}
                    onChange={handleChange}
                    placeholder="React, Node, MongoDB"
                    className="bg-black p-4 rounded-xl w-full mt-6"
                />

                <label className="flex items-center gap-3 mt-6">

                    <input
                        type="checkbox"
                        name="featured"
                        checked={form.featured}
                        onChange={handleChange}
                    />

                    Featured Project

                </label>

                <button
                    className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl"
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

                            className="mt-8 ml-4 bg-gray-700 hover:bg-gray-800 px-8 py-3 rounded-xl"
                        >

                            Cancel

                        </button>

                    )
                }

            </form>

            <div className="mt-10 overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="bg-orange-500">

                            <th className="p-4">Title</th>

                            <th>Description</th>

                            <th>Featured</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {projects.map((project) => (

                            <tr
                                key={project._id}
                                className="border-b border-zinc-800 text-center"
                            >

                                <td className="p-4">

                                    {project.title}

                                </td>

                                <td>

                                    {project.description.substring(0, 40)}...

                                </td>

                                <td>

                                    {project.featured ? "⭐" : "-"}

                                </td>

                                <td>

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