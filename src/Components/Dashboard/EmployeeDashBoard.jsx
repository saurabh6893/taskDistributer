import React from "react";
import Header from "../misc/Header";
import TaskCountCard from "../misc/TaskCountCard";

const EmployeeDashBoard = () => {
  return (
    <div className="h-screen p-14">
      <Header />
      <TaskCountCard />
    </div>
  );
};

export default EmployeeDashBoard;
