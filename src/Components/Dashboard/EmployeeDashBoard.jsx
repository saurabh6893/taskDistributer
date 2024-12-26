import React from "react";
import Header from "../misc/Header";
import TaskCountCard from "../misc/TaskCountCard";
import TaskStats from "../misc/TaskStats";
import TaskList from "../misc/TaskList";

const EmployeeDashBoard = () => {
  return (
    <div className="h-screen p-14">
      <Header />
      <TaskStats />
      <TaskList />
    </div>
  );
};

export default EmployeeDashBoard;
