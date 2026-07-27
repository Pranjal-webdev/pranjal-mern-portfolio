import React from "react";

const About = () => {

    return (

        <section>

            <div>
                <h1>

                    About <span className="text-orange-500">Me</span>

                </h1>

                <div className="grid md:gird-cols-2 gap-20 mt-20 items-center">

                    <div className="flex justiify-center">

                        <div>

                            <img src="" alt="Profile" className="w-full h-full object-cover"/>

                        </div>

                    </div>

                    <h2 className="text-4xl font-bold text-white mb-8">

                        Who am I?

                    </h2>

                    <p  className="text-gray-400 leading-8 text-lg">

                        I'm Pranjal Pundir, an MCA student and aspiring
                        Full Stack Web Developer. I enjoy creating
                        modern, responsive and user-friendly web
                        applications using React.js, Node.js,
                        Express.js and MongoDB.


                    </p>

                    <p>

                        I love learning new technologies, solving
                        real-world problems and continuously improving
                        my development skills by building practical
                        projects.

                    </p>

                    <div>

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

                    <div className="bg-zinc-900 rounded-2xl p-8 text-center">

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