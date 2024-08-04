import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

const Card = ({ image, text, number, percent, status }) => {
  return (
    <div className="bg-background-dark pl-5 rounded-lg p-2 flex flex-col justify-between h-full w-[100%]">
      <div className="flex flex-col items-start h-[50%] gap-y-1">
        <div className="h-7 w-7 flex-shrink-0 overflow-hidden">
          <img
            src={image}
            alt="Card"
            className="h-full w-full object-scale-down"
          />
        </div>
        <p className="text-xs w-full text-richblack-5">{text}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className=" text-sm lg:text-xl text-white font-bold">{number}</p>
        <div className="flex items-center px-4">
          <p
            className={`text-sm ${
              status === "increase" ? "text-caribbeangreen-300" : "text-red-500"
            }`}
          >
            {status === "increase" ? (
              <TiArrowSortedUp />
            ) : (
              <TiArrowSortedDown />
            )}
          </p>
          <p
            className={`text-sm ${
              status === "increase" ? "text-caribbeangreen-300" : "text-red-500"
            }`}
          >
            {percent}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
