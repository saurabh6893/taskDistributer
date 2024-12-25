import React from "react";
import TaskCountCard from "../misc/TaskCountCard";

const TaskStats = () => {
  return (
    <div className="grid grid-cols-2 mt-10">
      <TaskCountCard tag="New Task" theme="blue" />
      <TaskCountCard tag="Completed" theme="yellow" />
      <TaskCountCard tag="Accepted" theme="green" />
      <TaskCountCard tag="Failed" theme="red" />
    </div>
  );
};

export default TaskStats;
