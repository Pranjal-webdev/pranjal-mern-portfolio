import React from "react";

const Home = () => {

    return (

        <section id="home">

            <div className="bg-black">

                <div className="text-white">
                    <h3 className="text-orange-500 text-2xl mb-4">👋 Hello, I'm</h3>
                    <h1 className="text-6xl mb-10">Pranjal Pundir</h1>
                    <h2 className="text-gray-300 text-3xl mb-6">Full Stack Web Developer</h2>
                    <p>I build modern, responsive and scalable</p>
                    <p>web applications using MongoDB, Express.js</p>
                    <p>React.js and Node.js.</p>
                </div>

                <div className="flex gap-5 mt-8">
                    <button className="text-white bg-orange-600 p-2 rounded-lg">View Projects</button>
                    <button className="border border-white text-white p-2 rounded-lg">Download Resume</button>
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