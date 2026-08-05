import React from "react";

const cards = [
  {
    title: "Total Skills",
    value: 12
  },
  {
    title: "Projects",
    value: 5
  },
  {
    title: "Messages",
    value: 8
  },
  {
    title: "Visitors",
    value: 120
  }
];

const DashboardHome = () => {

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