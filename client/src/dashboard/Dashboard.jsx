import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import { Routes, Route } from "react-router-dom";
import SkillsAdmin from "./SkillsAdmin";
import ProjectsAdmin from "./ProjectsAdmin";
import MessagesAdmin from "./MessagesAdmin";
import AIAdmin from "./AIAdmin";

const Dashboard=()=>{

    return (

    <div className="flex min-h-screen w-full bg-black overflow-x-hidden">

      <Sidebar />

      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-10">

        <Routes>

            <Route index element={<DashboardHome />} />

            <Route path="skills" element={<SkillsAdmin />} />

            <Route path="projects" element={<ProjectsAdmin />} />

            <Route path="messages" element={<MessagesAdmin />} />
            
            <Route path="ai" element={<AIAdmin />} />


        </Routes>

      </div>

    </div>

    );

};

export default Dashboard;