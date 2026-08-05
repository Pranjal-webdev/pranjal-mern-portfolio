import React from "react";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";

const Dashboard=()=>{

    return (

    <div className="flex bg-black min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <DashboardHome />

      </div>

    </div>

    );

};

export default Dashboard;