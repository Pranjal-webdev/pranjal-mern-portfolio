import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiVercel, SiRender } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBolt } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri"


const Skills = () => {

    const skills = [
        {
            title: "Frontend",
            items: [
                { name: "HTML", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
                { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-500" /> },
                { name: "JavaScript", icon: <IoLogoJavascript className="text-5xl text-yellow-400" /> },
                { name: "React", icon: <FaReact className="text-5xl text-cyan-400" /> },
                { name: "Tailwind", icon: <RiTailwindCssFill className="text-5xl text-sky-400" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="text-5xl text-purple-500" /> }
            ]
        },
        {
            title: "Backend",
            items: [
                { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-500" /> },
                { name: "Express.js", icon: <SiExpress className="text-5xl" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-600" /> }
            ]
        },
        {
            title: "Tools",
            items: [
                { name: "Git", icon: <FaGitAlt className="text-5xl text-orange-600" /> },
                { name: "GitHub", icon: <FaGithub className="text-5xl" /> },
                { name: "VS Code", icon: <VscVscode className="text-5xl text-blue-500" /> },
                { name: "Thunder Client", icon: <TbBolt className="text-5xl text-yellow-400" /> },
                { name: "Vercel", icon: <SiVercel className="text-5xl" /> },
                { name: "Render", icon: <SiRender className="text-5xl text-cyan-400" /> }
            ]
        }
    ];

    return (

        <section id="skills">

            <div className="bg-black text-white py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-5xl font-bold text-center">

                        My <span className="text-orange-500">Skills</span>

                    </h1>

                    <div className="mt-16 space-y-16">

                        {
                            skills.map((section) => (

                                <div key={section.title}>

                                    <h2 className="text-3xl font-bold mb-8 text-orange-500">

                                        {section.title}

                                    </h2>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                                        {
                                            section.items.map((skill) => (

                                                <div
                                                    key={skill.name}
                                                    className="bg-[#111] border border-gray-800 rounded-2xl p-8 flex flex-col items-center gap-5 hover:border-orange-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-300 cursor-pointer"
                                                >

                                                    {skill.icon}

                                                    <h3 className="text-lg font-semibold">

                                                        {skill.name}

                                                    </h3>

                                                </div>

                                            ))
                                        }

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                    <div className="w-28 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

                </div>

            </div>

        </section>

    );

};

export default Skills;