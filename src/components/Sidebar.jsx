import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const icons = [
    { id: "home", component: <IoMdHome />, color: "#7c68ff" },
    { id: "chart", component: <MdInsertChartOutlined />, color: "white" },
    { id: "todo", component: <RiTodoLine />, color: "white" },
    { id: "wallet", component: <CiWallet />, color: "white" },
    { id: "bag", component: <BsBagCheck />, color: "white" },
  ];

  return (
    <div className="lg:h-full pt-3 px-4 lg:px-0 py-2 lg:py-0 lg:pt-3 border-t border-richblack-400 lg:border-none w-full bg-background-dark flex-row  items-center flex mx-auto lg:flex-col lg:justify-between">
      <div className="flex pl-6 lg:pl-0  justify-between items-end w-full mx-auto h-fit lg:flex-col  gap-y-10">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className={`flex w-full gap-x-1 items-center cursor-pointer ${
              activeIcon === icon.id ? "text-[#7c68ff]" : "text-white"
            }`}
            onClick={() => setActiveIcon(icon.id)}
          >
            <div
              className={`${
                activeIcon === icon.id ? "w-[5px] bg-[#7c68ff]" : ""
              } hidden lg:block`}
              style={{ height: "30px" }}
            ></div>
            <div
              className={`text-2xl lg:text-3xl ${
                activeIcon === icon.id ? "text-[#7c68ff]" : "text-white"
              }`}
            >
              {icon.component}
            </div>
          </div>
        ))}
      </div>
      <div className=" flex  pr-6 lg:pr-0 lg:justify-center lg:mb-16 cursor-pointer">
        <AiOutlineLogout className="text-2xl lg:text-3xl text-white" />
      </div>
    </div>
  );
};

export default Sidebar;
