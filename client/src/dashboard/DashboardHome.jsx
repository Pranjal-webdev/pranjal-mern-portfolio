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

    <div>

      <h1 className="text-4xl font-bold text-white mb-10">

        Dashboard

      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {cards.map((card) => (

          <div
            key={card.title}
            className="bg-[#181818] rounded-2xl p-8 border border-zinc-800"
          >

            <h2 className="text-gray-400">

              {card.title}

            </h2>

            <h1 className="text-5xl font-bold text-orange-500 mt-4">

              {card.value}

            </h1>

          </div>

        ))}

      </div>

    </div>

  );

};

export default DashboardHome;