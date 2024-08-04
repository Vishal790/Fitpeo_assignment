import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const MainComponent = () => {
  return (
    <div className="h-[calc(100vh-4rem)] w-full flex ">
      <div className="w-[4rem] p-2 hidden lg:block">
        <Sidebar />
      </div>
      <div className="max-h-[calc(100vh-4rem)] lg:w-[calc(100vw-4rem)] flex flex-col lg:flex lg:items-center  lg:justify-center bg-black ">
        <div className=" block lg:hidden">
          <Sidebar/>
        </div>
        <Dashboard />
      </div>
    </div>
  );
};

export default MainComponent;
