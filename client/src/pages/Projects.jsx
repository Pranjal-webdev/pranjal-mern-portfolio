import React from "react";

const Projects = () => {


    const projects = [

        {

            title: "Car Rental System",

            description:
                "A complete MERN Stack Car Rental application with Authentication, Cart, Booking, Admin Panel and Dashboard.",

            tech: "React • Node • Express • MongoDB • Tailwind",

            image: "/images/car-rental.png"

        },

        {

            title: "E-Commerce UI",

            description:
                "A responsive e-commerce user interface featuring product listings, category sections, reusable React components and a clean, modern shopping experience.",

            tech: "React • Tailwind • Vite",

            image: "/images/portfolio.png"

        },

        {

            title: "Coming Soon",

            description:
                "Another Full Stack MERN Project will be added here soon.",

            tech: "MERN Stack",

            image: "/images/coming-soon.png"

        }

    ];

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
                                    key={project.title}
                                    className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300"
                                >

                                    <div className="h-56 bg-gray-800 flex items-center justify-center">

                                        <span className="text-gray-500 text-lg">

                                            Project Image

                                        </span>

                                    </div>

                                    <div className="p-6">

                                        <h2 className="text-2xl font-bold">

                                            {project.title}

                                        </h2>

                                        <p className="text-gray-400 mt-4 leading-7">

                                            {project.description}

                                        </p>

                                        <p className="text-orange-500 mt-5 font-semibold">

                                            {project.tech}

                                        </p>

                                        <div className="flex gap-4 mt-8">

                                            <button className="bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-lg transition">

                                                Live Demo

                                            </button>

                                            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-lg transition">

                                                GitHub

                                            </button>

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