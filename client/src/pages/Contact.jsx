import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = ()=>{

    return(

        <section
            id="contact"
            className="bg-[#050505] text-white py-24"
        >

            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-5xl font-bold text-center">

                    Contact <span className="text-orange-500">Me</span>

                </h1>

                <div className="w-28 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

                <div className="grid md:grid-cols-2 gap-16 mt-20">

                    
                    <div>

                        <h2 className="text-3xl font-bold mb-8">

                            Let's Work Together

                        </h2>

                        <p className="text-gray-400 leading-8">

                            I'm always interested in new opportunities,
                            internships and freelance projects.
                            Feel free to contact me anytime.

                        </p>

                        <div className="mt-10 space-y-6">

                            <div className="flex items-center gap-5">

                                <FaEnvelope className="text-2xl text-orange-500"/>

                                <span>

                                    pranjalpundir37@gmail.com

                                </span>

                            </div>

                            <div className="flex items-center gap-5">

                                <FaPhoneAlt className="text-2xl text-orange-500"/>

                                <span>

                                    +91 7417021555

                                </span>

                            </div>

                            <div className="flex items-center gap-5">

                                <FaMapMarkerAlt className="text-2xl text-orange-500"/>

                                <span>

                                    Roorkee, Uttarakhand

                                </span>

                            </div>

                        </div>

                        <div className="flex gap-6 mt-10">

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                            >

                                <FaGithub className="text-4xl hover:text-orange-500 duration-300"/>

                            </a>

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                            >

                                <FaLinkedin className="text-4xl hover:text-orange-500 duration-300"/>

                            </a>

                        </div>

                    </div>

                    

                    <form className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-[#050505] border border-zinc-700 rounded-lg p-4 mb-5 outline-none focus:border-orange-500"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-[#050505] border border-zinc-700 rounded-lg p-4 mb-5 outline-none focus:border-orange-500"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full bg-[#050505] border border-zinc-700 rounded-lg p-4 mb-5 outline-none focus:border-orange-500"
                        />

                        <textarea
                            rows="6"
                            placeholder="Your Message"
                            className="w-full bg-[#050505] border border-zinc-700 rounded-lg p-4 outline-none focus:border-orange-500"
                        ></textarea>

                        <button
                            className="mt-8 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-full font-semibold duration-300"
                        >

                            Send Message

                        </button>

                    </form>

                </div>

            </div>

        </section>
    )
}

export default Contact;