import React from "react";

const About = () => {

    return (

        <section id="about" className="bg-black text-white py-28 overflow-hidden">


            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-5xl font-bold text-center">

                    About <span className="text-orange-500">Me</span>

                </h1>

                <div className="grid md:grid-cols-2 gap-20 mt-20 items-center">

                    <div className="flex flex-col items-center">

                        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-orange-500 shadow-[0_0_35px_rgba(249,115,22,0.5)]">

                            <img src="" alt="Profile" className="w-full h-full object-cover" />

                        </div>

                        <div className="flex justify-center gap-15 mt-8">

                            <a href="#">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="Github"
                                    className="w-10 hover:scale-110 duration-300"
                                />
                            </a>

                            <a href="#">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email"
                                    className="w-10 hover:scale-110 duration-300"
                                />
                            </a>

                            <a href="#">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin"
                                    className="w-10 hover:scale-110 duration-300"
                                />
                            </a>

                        </div>


                    </div>

                    <div>

                        <h2 className="text-4xl font-bold text-white mb-8">

                            Who am I?

                        </h2>

                        <p className="text-gray-400 leading-8 text-lg">

                            I'm Pranjal Pundir, an MCA student and aspiring
                            Full Stack Web Developer. I enjoy creating
                            modern, responsive and user-friendly web
                            applications using React.js, Node.js,
                            Express.js and MongoDB.


                        </p>

                        <p className="text-gray-400 leading-8 text-lg mt-6">

                            I love learning new technologies, solving
                            real-world problems and continuously improving
                            my development skills by building practical
                            projects.

                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">

                            <span className="bg-zinc-900 text-orange-500 px-5 py-2 rounded-full">

                                Frontend

                            </span>

                            <span className="bg-zinc-900 text-orange-500 px-5 py-2 rounded-full">

                                Backend

                            </span>

                            <span className="bg-zinc-900 text-orange-500 px-5 py-2 rounded-full">

                                MongoDB

                            </span>

                            <span className="bg-zinc-900 text-orange-500 px-5 py-2 rounded-full">

                                REST APIs

                            </span>

                        </div>

                    </div>

                </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

                <div className="bg-zinc-900 rounded-2xl p-8 text-center">

                    <h2 className="text-orange-500 text-4xl font-bold">

                        MCA

                    </h2>

                    <p className="text-gray-400 mt-2">

                        Student

                    </p>

                </div>

                <div className="bg-zinc-900 rounded-2xl p-8 text-center">

                    <h2 className="text-orange-500 text-4xl font-bold">

                        3

                    </h2>

                    <p className="text-gray-400 mt-2">

                        Projects

                    </p>

                </div>

                <div className="bg-zinc-900 rounded-2xl p-8 text-center hover:-translate-y-2 hover:border hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.35)] transition duration-300">

                    <h2 className="text-orange-500 text-4xl font-bold">

                        10+

                    </h2>

                    <p className="text-gray-400 mt-2">

                        Technologies

                    </p>

                </div>

                <div className="bg-zinc-900 rounded-2xl p-8 text-center">

                    <h2 className="text-orange-500 text-4xl font-bold">

                        Open

                    </h2>

                    <p className="text-gray-400 mt-2">


                        To Work

                    </p>

                </div>

            </div>

        </section>


    )
}

export default About;