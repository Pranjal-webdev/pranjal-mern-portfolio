import { useEffect, useState } from "react";
import { getSkills } from "../services/skillService";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiVercel, SiRender } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBolt } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri"


const Skills = () => {

    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);


    const iconMap = {

        HTML: <FaHtml5 className="text-5xl text-orange-500" />,
        CSS: <FaCss3Alt className="text-5xl text-blue-500" />,
        JavaScript: <IoLogoJavascript className="text-5xl text-yellow-400" />,
        React: <FaReact className="text-5xl text-cyan-400" />,
        Tailwind: <RiTailwindCssFill className="text-5xl text-sky-400" />,
        Bootstrap: <FaBootstrap className="text-5xl text-purple-500" />,
        "Node.js": <FaNodeJs className="text-5xl text-green-500" />,
        "Express.js": <SiExpress className="text-5xl" />,
        MongoDB: <SiMongodb className="text-5xl text-green-600" />,
        Git: <FaGitAlt className="text-5xl text-orange-600" />,
        GitHub: <FaGithub className="text-5xl" />,
        "VS Code": <VscVscode className="text-5xl text-blue-500" />,
        "Thunder Client": <TbBolt className="text-5xl text-yellow-400" />,
        Vercel: <SiVercel className="text-5xl" />,
        Render: <SiRender className="text-5xl text-cyan-400" />

    };

    useEffect(() => {

        const loadSkills = async () => {

            try {

                const data = await getSkills();

                setSkills(data);

            }

            catch (error) {

                console.log(error);

            }

            setLoading(false);

        };

        loadSkills();

    }, []);

    const categories = ["Frontend", "Backend", "Tools"];


    if (loading) {

        return (

            <div className="bg-black min-h-screen flex justify-center items-center text-white text-2xl">

                Loading Skills...

            </div>

        );

    }

    return (

        <section id="skills">

            <div className="bg-black text-white py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-5xl font-bold text-center">

                        My <span className="text-orange-500">Skills</span>

                    </h1>

                    <div className="w-28 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

                    <div className="mt-16 space-y-10">

                        {
                            categories.map((category) => (

                                <div key={category}>

                                    <h2 className="text-3xl font-bold mb-5 text-orange-500">

                                        {category}

                                    </h2>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                                        {
                                            skills
                                                .filter((skill) => skill.category === category)
                                                .map((skill) => (

                                                    <div
                                                        key={skill.name}
                                                        className="bg-[#111] border border-gray-800 rounded-2xl p-6 flex flex-col items-center gap-5 hover:border-orange-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-300 cursor-pointer"
                                                    >

                                                        {iconMap[skill.name] || (
                                                            <div className="text-5xl">
                                                                💻
                                                            </div>
                                                        )}

                                                        <h3 className="text-lg font-semibold">

                                                            {skill.name}

                                                        </h3>

                                                        <div className="w-full bg-gray-700 rounded-full h-2 mt-3">

                                                            <div className="bg-orange-500 h-2 rounded-full"
                                                                style={{ width: `${skill.level}%` }}>

                                                            </div>

                                                        </div>

                                                        <p className="text-sm text-gray-400 mt-2">

                                                            {skill.level}%

                                                        </p>


                                                    </div>

                                                ))
                                        }

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

export default Skills;