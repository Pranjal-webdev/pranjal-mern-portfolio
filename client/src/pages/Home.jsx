import React from "react";
import { useEffect } from "react";
import { increaseVisitor } from "../services/visitorService";

const Home = () => {

    useEffect(() => {

    const lastVisit = localStorage.getItem("portfolioVisitor");

    const now = Date.now();

    if (!lastVisit || now - Number(lastVisit) > 24 * 60 * 60 * 1000) {

        increaseVisitor();

        localStorage.setItem("portfolioVisitor", now);

    }

}, []);

    return (

        <section id="home" className="bg-[#050505] text-white min-h-screen flex items-start relative pt-28 pb-16">

            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="text-white max-w-2xl md:max-w-[48%] lg:max-w-2xl pt-8 md:pt-4">

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

                <div className="hidden md:flex absolute right-6 lg:right-20 top-[52%] -translate-y-1/2">

                    <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full border-4 border-orange-500 overflow-hidden shadow-[0_0_50px_rgba(255,115,0,0.5)]">

                        <img src="" alt="Pranjal" className="w-full h-full object-cover" />

                    </div>

                </div>

                {/*FOR  MOBILE CIRCLE */}

                 <div className="flex md:hidden justify-center mt-14">

                    <div className="w-72 h-72 rounded-full border-4 border-orange-500 overflow-hidden shadow-[0_0_50px_rgba(255,115,0,0.5)]">

                        <img
                            src=""
                            alt="Pranjal"
                            className="w-full h-full object-cover"
                        />

                    </div>

                </div>

            </div>

        </section>
    )

}

export default Home;