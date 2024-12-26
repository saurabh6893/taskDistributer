import React from "react";

const TaskCountCard = ({ tag, theme }) => {
  const themes = {
    red: "from-red-500 via-red-600 to-red-700",
    blue: "from-blue-500 via-blue-600 to-blue-700",
    green: "from-green-500 via-green-600 to-green-700",
    yellow: "from-yellow-400 via-yellow-500 to-yellow-600",
  };

  return (
    <div className="flex justify-between gap-5 screen">
      <div
        className={`rounded-md w-full p-10 m-5 bg-gradient-to-br ${themes[theme]} shadow-lg animate-fadeIn transition-transform transform hover:scale-x-105 hover:rounded-3xl`}
      >
        <h2 className="text-4xl font-semibold text-white">0</h2>
        <h3 className="text-xl font-semibold text-gray-300">{tag}</h3>
      </div>
    </div>
  );
};

export default TaskCountCard;
