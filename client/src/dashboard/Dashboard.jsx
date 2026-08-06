import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import { Routes, Route } from "react-router-dom";
import SkillsAdmin from "./SkillsAdmin";
import ProjectsAdmin from "./ProjectsAdmin";
import MessagesAdmin from "./MessagesAdmin";

const Dashboard=()=>{

    return (

    <div className="flex bg-black min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <Routes>

            <Route index element={<DashboardHome />} />

            <Route path="skills" element={<SkillsAdmin />} />

            <Route path="projects" element={<ProjectsAdmin />} />

            <Route path="messages" element={<MessagesAdmin />} />


        </Routes>

      </div>

    </div>

    );

};

export default Dashboard;