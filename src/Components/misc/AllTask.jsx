import React, { useRef } from "react";

const AllTask = () => {
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-40 overflow-auto">
      <AdminTaskViewCard
        name="saurabh"
        desc="described in detail"
        status="high"
      />
      <AdminTaskViewCard name="Rohit" desc="other task" status="med" />
      <AdminTaskViewCard name="Divya" desc="other explaination" status="low" />
      <AdminTaskViewCard
        name="saurabh"
        desc="described in detail"
        status="high"
      />
      <AdminTaskViewCard name="Rohit" desc="other task" status="med" />
      <AdminTaskViewCard
        name="Divya"
        desc="other explaination"
        status="low"
      />{" "}
      <AdminTaskViewCard
        name="saurabh"
        desc="described in detail"
        status="high"
      />
      <AdminTaskViewCard name="Rohit" desc="other task" status="med" />
      <AdminTaskViewCard name="Divya" desc="other explaination" status="low" />
    </div>
  );
};

export default AllTask;

const AdminTaskViewCard = ({ name, desc, status }) => {
  return (
    <div className="px-4 bg-red-500 py-6 flex justify-between rounded m-1">
      <h2>{name}</h2>
      <h3>{desc}</h3>
      <h5>{status}</h5>
    </div>
  );
};
