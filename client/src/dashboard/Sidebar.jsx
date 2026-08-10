import { NavLink } from "react-router-dom";
import {FaTachometerAlt,FaLaptopCode,FaProjectDiagram,FaEnvelope,FaRobot} from "react-icons/fa";

const Sidebar = () => {
  const menu = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />
    },
    {
      title: "Skills",
      path: "/dashboard/skills",
      icon: <FaLaptopCode />
    },
    {
      title: "Projects",
      path: "/dashboard/projects",
      icon: <FaProjectDiagram />
    },
    {
      title: "Messages",
      path: "/dashboard/messages",
      icon: <FaEnvelope />
    },
    {
      title: "AI",
      path: "/dashboard/ai",
      icon: <FaRobot />
    }
  ];

  return (
    <div className="w-16 sm:w-20 md:w-64 shrink-0 min-h-screen bg-[#111] text-white border-r border-zinc-800">

      <div className="p-2 md:p-6 border-b border-zinc-800">

        <h1 className="md:hidden text-xl font-bold text-center">
          A
        </h1>

        <h1 className="hidden md:block text-3xl font-bold">

          Admin <span className="text-orange-500">Panel</span>

        </h1>

      </div>

      <div className="mt-4 md:mt-8">

        {menu.map((item) => (

          <NavLink
            key={item.title}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center justify-center md:justify-start
              gap-0 md:gap-4
              px-2 md:px-6
              py-4 transition ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "hover:bg-zinc-900"
              }`
            }
          >
            <span className="text-lg md:text-xl">{item.icon}</span>
            <span className="hidden md:block">{item.title}</span>
          </NavLink>

        ))}

      </div>

    </div>
  );
};

export default Sidebar;