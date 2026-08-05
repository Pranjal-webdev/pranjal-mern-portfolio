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
    <div className="w-72 bg-[#111] text-white min-h-screen border-r border-zinc-800">

      <div className="p-6 border-b border-zinc-800">

        <h1 className="text-3xl font-bold">

          Admin <span className="text-orange-500">Panel</span>

        </h1>

      </div>

      <div className="mt-8">

        {menu.map((item) => (

          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 transition ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "hover:bg-zinc-900"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.title}</span>
          </NavLink>

        ))}

      </div>

    </div>
  );
};

export default Sidebar;