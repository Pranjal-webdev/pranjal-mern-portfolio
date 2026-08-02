import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


return (

        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

                <Link to ="/" className="text-3xl font-extrabold tracking-wide">

                    <span className="text-white">Pranjal</span>

                    <span className="text-orange-500">Pundir</span>

                </Link>

                <ul className="hidden md:flex items-center gap-10 text-white font-medium">

                    <li><Link to ="/" className="hover:text-orange-500 transition">Home</Link></li>

                    <li><Link to ="/about" className="hover:text-orange-500 transition">About</Link></li>

                    <li><Link to ="/skills" className="hover:text-orange-500 transition">Skills</Link></li>

                    <li><Link to ="/projects" className="hover:text-orange-500 transition">Projects</Link></li>

                    <li><Link to ="/contact" className="hover:text-orange-500 transition">Contact</Link></li>

                </ul>

                <button
                    className="md:hidden text-2xl text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >

                    {
                        isOpen?

                            <FaTimes />

                            :

                            <FaBars />
                    }

                </button>

            </div>

            {
                isOpen && (

                    <div className="md:hidden bg-[#111] text-center py-6">

                        <ul className="flex flex-col gap-6 text-white text-lg">

                            <li><Link to ="/" onClick={() => setIsOpen(false)}>Home</Link></li>

                            <li><Link to ="/about" onClick={() => setIsOpen(false)}>About</Link></li>

                            <li><Link to ="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>

                            <li><Link to ="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>

                            <li><Link to ="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

                        </ul>

                    </div>

                )
            }

        </nav>
    );
}

export default Navbar;