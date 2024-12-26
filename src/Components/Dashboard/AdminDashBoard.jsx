import { useRef } from "react";
import Header from "../misc/Header";
import CreateTask from "../misc/CreateTask";
import AllTask from "../misc/AllTask";

const AdminDashBoard = () => {
  return (
    <div className="h-screen w-full p-2">
      <Header />
      <CreateTask />
      <AllTask/>
    </div>
  );
};

export default AdminDashBoard;
