import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import CircularProgress from "./CircularProgressBar";

const ProfitCard = ({ text, number, percent, status, processPercent }) => {
  return (
    <div className="flex  justify-between h-full w-full px-3 ">
      <div className="flex flex-col  justify-around">
        <p className=" text-richblack-5 text-sm">{text}</p>
        <h1 className="text-white text-lg lg:text-2xl font-bold truncate ">
          {number}
        </h1>
        <div
          className={`${
            status === "increase" ? " text-caribbeangreen-300" : "text-red-500"
          } flex items-center text-sm`}
        >
          {status == "increase" ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          {percent}%
        </div>
      </div>
      <div className=" flex flex-col justify-around items-center">
        <CircularProgress percentage={processPercent} />
        <p className=" text-richblack-25 mt-2 text-[8px]">
          *The values here has been rounded off
        </p>
      </div>
    </div>
  );
};

export default ProfitCard;
