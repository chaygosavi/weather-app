import React from "react";

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "Pune",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "London",
    },
    {
      id: 5,
      title: "Singapore",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city, idx) => (
        <button key={idx} className="text-white text-lg font-medium">
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
