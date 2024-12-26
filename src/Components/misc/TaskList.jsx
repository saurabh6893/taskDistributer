import React from "react";

const TaskList = () => {
  return (
    <div
      id="TaskList-scroll"
      className="h-[55%]  flex items-center justify-start gap-5 w-full flex-nowrap"
    >
      <TaskCard
        taskStatus={{ theme: "blue", label: "New Task" }}
        taskTitle="Dont play valo"
        priority="High"
        date="12/31/2024"
      />
    </div>
  );
};

export default TaskList;

const TaskCard = ({ taskStatus, taskTitle, priority, date }) => {
  const themes = {
    red: "from-red-500/30 via-red-600/20 to-red-700/10 border-red-500/50 text-red-300",
    blue: "from-blue-500/30 via-blue-600/20 to-blue-700/10 border-blue-500/50 text-blue-300",
    green:
      "from-green-500/30 via-green-600/20 to-green-700/10 border-green-500/50 text-green-300",
    yellow:
      "from-yellow-400/30 via-yellow-500/20 to-yellow-600/10 border-yellow-500/50 text-yellow-300",
  };

  return (
    <div
      className={`flex-shrink-0 h-[200px] w-full bg-gradient-to-br ${
        themes[taskStatus.theme]
      } rounded-xl p-5 backdrop-blur-md shadow-lg border ${
        themes[taskStatus.theme].split(" ")[3]
      } animate-glassPop transition-transform transform hover:shadow-2xl duration-300`}
    >
      <div className="flex justify-between items-center">
        <h3
          className={`text-sm px-3 py-1 rounded-full shadow-sm ${
            themes[taskStatus.theme].split(" ")[3]
          }`}
        >
          {priority}
        </h3>
        <h3 className="text-gray-400 text-sm">{date}</h3>
      </div>
      <h2 className="mt-5 text-2xl text-white font-semibold">{taskTitle}</h2>
      <p className="text-sm">sample text</p>
    </div>
  );
};
