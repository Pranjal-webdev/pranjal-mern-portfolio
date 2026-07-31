import React from "react";

const Home = () => {

    return (

        <section id="home" className="bg-[#050505] text-white min-h-screen flex items-center">

            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="text-white">

                    <h3 className="text-orange-500 text-2xl font-semibold mb-5">👋 Hello, I'm</h3>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">Pranjal Pundir</h1>

                    <h2 className="text-3xl text-gray-300 mt-6">Full Stack Web Developer</h2>

                    <p className="text-gray-400 mt-8 leading-8 text-lg max-w-xl">

                        I build modern, responsive and scalable web
                        applications using MongoDB, Express.js,
                        React.js and Node.js.

                    </p>

                </div>

                <div className="flex flex-wrap gap-6 mt-10">

                    <button className="text-white bg-orange-600 hover:bg-orange-700 p-2 rounded-lg">View Projects</button>
                    <button className="border border-white hover:bg-orange-500 hover:text-white text-white p-2 rounded-lg">Download Resume</button>
                </div>

                <div className="flex justify-center">

                    <div className="w-96 h-96 rounded-full border-4 border-orange-500 overflow-hidden shadow-[0_0_50px_rgba(255,115,0,0.5)]">

                        <img src="" alt="Pranjal" className="w-full h-full object-cover" />

                    </div>


                </div>
            </div>

        </section>
    )

}

export default Home;