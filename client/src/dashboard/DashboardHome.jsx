import React from "react";
import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboardService";


const DashboardHome = () => {

  const [stats, setStats] = useState({
    totalSkills: 0,
    totalProjects: 0,
    totalMessages: 0,
    totalVisitors: 0

  });

  useEffect(() => {

    const loadStats = async () => {

      const data = await getDashboardStats();

      setStats(data);

    };

    loadStats();

  }, []);

  const cards = [

    {

        title: "Total Skills",

        value: stats.totalSkills

    },

    {

        title: "Projects",

        value: stats.totalProjects

    },

    {

        title: "Messages",

        value: stats.totalMessages

    },

    {

        title: "Visitors",

        value: stats.totalVisitors

    }

];

  return (

    <div className="w-full max-w-full min-w-0 overflow-hidden">

      <h1 className="text-3xl sm:text-4xl max-[400px]:text-2xl font-bold text-white mb-6 sm:mb-10">

        Dashboard

      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">

        {cards.map((card) => (

          <div
            key={card.title}
            className="bg-[#181818] rounded-2xl p-5 sm:p-6 lg:p-8 max-[400px]:p-4 border border-zinc-800 min-w-0 w-full"
          >

            <h2 className="text-sm sm:text-base text-gray-400">

              {card.title}

            </h2>

            <h1 className="text-4xl sm:text-5xl max-[400px]:text-3xl font-bold text-orange-500 mt-3 sm:mt-4">

              {card.value}

            </h1>

          </div>

        ))}

      </div>

    </div>

  );

};

export default DashboardHome;