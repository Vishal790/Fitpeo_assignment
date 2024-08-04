import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ percentage }) => {
  return (
    <div className="relative w-[75px] h-[75px]">
      <CircularProgressbar
        value={percentage}
        strokeWidth={12}
        styles={buildStyles({
          pathColor: "#339DFF",
          trailColor: "skyBlue",
        })}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%] text-center text-white text-xs">
        <div className=" text-xs font-semibold mb-1">{`${percentage}%`}</div>
        <div className="text-[7px] leading-none ">Goal Completed</div>
      </div>
    </div>
  );
};

export default CircularProgress;
