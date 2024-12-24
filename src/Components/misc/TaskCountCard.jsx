import React from "react";

const TaskCountCard = () => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-lg w-[45%] p-10 bg-gradient-to-br from-red-500 via-red-600 to-red-700 shadow-lg animate-fadeIn transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-semibold text-white">0</h2>
        <h3 className="text-xl font-semibold text-gray-300">New Tasks</h3>
      </div>
    </div>
  );
};

export default TaskCountCard;
