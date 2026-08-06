import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";

const Projects = () => {

    const [projects, setProjects] = useState([]);

const [loading, setLoading] = useState(true);

useEffect(() => {

    const loadProjects = async () => {

        try {

            const data = await getProjects();

            setProjects(data);

        }

        catch (error) {

            console.log(error);

        }

        setLoading(false);

    };

    loadProjects();

},[]);


if (loading) {

    return (

        <div className="bg-[#050505] min-h-screen flex justify-center items-center text-white text-2xl">

            Loading Projects...

        </div>

    );

}
    
    return (

        <section id="projects">

            <div className="bg-[#050505] text-white py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-5xl font-bold text-center">

                        My <span className="text-orange-500">Projects</span>

                    </h1>

                    <div className="w-28 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                        {
                            projects.map((project) => (

                                <div
                                    key={project.id}
                                    className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300"
                                >

                                    <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />

                                    <div className="p-6">

                                        <h2 className="text-2xl font-bold">

                                            {project.title}

                                        </h2>

                                        <p className="text-gray-400 mt-4 leading-7">

                                            {project.description}

                                        </p>

                                        <p className="text-orange-500 mt-5 font-semibold">

                                            {project.technologies?.join(" • ")}

                                        </p>

                                        <div className="flex gap-4 mt-8">

                                            <a href={project.live} target="_blank" rel="noreferrer">

                                                Live Demo

                                            </a>

                                            <a href={project.github} target="_blank" rel="noreferrer">

                                                GitHub

                                            </a>

                                        </div>

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                </div>

            </div>

        </section>

    );

};

export default Projects;