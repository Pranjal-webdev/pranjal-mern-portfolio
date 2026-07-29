import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const navLinks = [
    {
        id: 1,
        name: "Home",
        href: "#home",
    },
    {
        id: 2,
        name: "About",
        href: "#about",
    },
    {
        id: 3,
        name: "Skills",
        href: "#skills",
    },
    {
        id: 4,
        name: "Projects",
        href: "#projects",
    },
    {
        id: 5,
        name: "Contact",
        href: "#contact",
    },
];

return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="h-20 flex justify-between items-center">

                <a href="$home" className="text-3xl font-bold text-orange-500">

                    Pranjal

                </a>

                <nav className="hidden md:flex items-center">

                    {navLinks.map((item) => (

                        <a key={item.id} href={item.href} className="text-white hover:text-orange-500 duration-300 font-medium">
                            {item.name}
                        </a>

                    ))}

                    <button className="bg-orange-500 hover:bg-orange-600 duration-300 px-5 py-2 rounded-lg text-white font-semibold">Resume</button>

                    {/*mobile button code*/}

                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}> {isOpen ? <X size={30} /> : <Menu size={30} />}</button>

                    {/*for mobile menu*/}

                    {isOpen && (
                        <div className="md:hidden bg-black border-t border-gray-800">

                            <nav className="flex flex-col items-center py-6 gap-6">

                                {navLinks.map((item) => (

                                    <a key={item.id} href={item.href} className="text-white hover:text-orange-500 duration-300 text-lg">{item.name}</a>
                                )
                                )}

                                <button className="bg-orange-500 px-5 py-2 rounded-lg text-white font-semibold hover:bg-orange-600 duration-300">Resume</button>

                            </nav>

                        </div>

                    )}
                </nav>

            </div>

        </div>

    </header>
);
}

export default Navbar;