import React from "react";
import TotalOrders from "../assets/add.png";
import TotalDelivered from "../assets/td.png";
import TotalCancelled from "../assets/tc.png";
import Revenue from "../assets/revenue.png";
import Card from "./Dashboard/Card";
import Target from "../assets/target.png";
import Dish from "../assets/dish.png";
import Burger from "../assets/burger.png";
import { FiTarget } from "react-icons/fi";
import { CiBurger } from "react-icons/ci";
import { BiDish } from "react-icons/bi";
import Arrow from "./Dashboard/Arrow";
import ProfitCard from "./Dashboard/ProfitCard";
import ActivityChart from "./Dashboard/ActivityChart";
import OrderTable from "./Dashboard/OrderTable";
import Feedback from "./Dashboard/Feedback";

const Dashboard = () => {
  return (
    <div className=" h-[96%] w-full  bg-black px-3 mt-5 pl-  lg:pr-8 lg:px-7 overflow-x-hidden  overflow-y-auto ">
      <div className="text-white font-semibold mb-4 text-2xl">Dashboard</div>

      <div className="flex flex-col min-h-[90%] gap-6">
        {/* 1st Section */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[65%_35%] h-fit lg:h-[12vh]">
          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 lg:gap-x-2 w-full">
            <Card
              image={TotalOrders}
              text="Total Orders"
              number="75"
              percent="3"
              status="increase"
            />
            <Card
              image={TotalDelivered}
              text="Total Delivered"
              number="70"
              percent="3"
              status="decrease"
            />
            <Card
              image={TotalCancelled}
              text="Total Cancelled"
              number="05"
              percent="3"
              status="increase"
            />
            <Card
              image={Revenue}
              text="Total Revenue"
              number="$12k"
              percent="3"
              status="decrease"
            />
          </div>

          {/* Profit Section */}
          <div className="bg-background-dark  overflow-y-auto rounded-lg max-h-full p-2">
            <ProfitCard
              text={"Net Profit"}
              number={"$ 6759.25"}
              status={"increase"}
              percent={3}
              processPercent={70}
            />
          </div>
        </div>

        {/* 2nd Section */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[65%_35%] max-h-[500px] lg:max-h-[230px]   lg:h-[25vh]">
          <div className="bg-background-dark rounded-lg min-h-[230px]   ">
            <ActivityChart />
          </div>
          <div className="bg-background-dark rounded-lg py-5 px-6  flex flex-col gap-y-3">
            <div className="flex items-center justify-between">
              <div className="flex gap-x-3 items-center text-richblack-5">
                <div className="bg-yellow-600 p-4 rounded-full">
                  <FiTarget color="yellow" className=" text-md lg:text-2xl" />
                </div>
                <p className="text-lg">Goals</p>
              </div>
              <Arrow />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-3 items-center text-richblack-5">
                <div className="bg-blue-400 p-4 rounded-full">
                  <CiBurger color="yellow" className=" text-md lg:text-2xl" />
                </div>
                <p className="text-lg">Popular Dishes</p>
              </div>
              <Arrow />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-3 items-center text-richblack-5">
                <div className="bg-richblue-100 p-4 rounded-full">
                  <BiDish color="yellow" className=" text-md lg:text-2xl" />
                </div>
                <p className="text-lg">Menus</p>
              </div>
              <Arrow />
            </div>
          </div>
        </div>

        {/* 3rd Section */}
        <div className="grid grid-cols-1  lg:mb-0  gap-4  gap-y-0 lg:grid-cols-[65%_35%]  h-[1000px]  lg:h-[35vh]">
          <div className="bg-background-dark rounded-lg pt-2  max-h-[450px] lg:h-[67%]">
            <div className="flex flex-col gap-y-2 pt-2 px-5 h-[95%]">
              <h1 className="text-lg lg:text-2xl font-bold text-richblack-25">
                Recent Orders
              </h1>
              <div className="max-h-96 lg:h-[90%] text-white overflow-y-auto  ">
                <OrderTable />
              </div>
            </div>
          </div>
          <div className="bg-background-dark rounded-lg pt-2 iphone-14-pro-max:max-h-[450px] max-h-[450px]  lg:h-[67%] iphone-14-pro-max:mb-8 ">
            <div className="flex flex-col gap-y-2 pt-2 px-5 h-[95%] ">
              <h1 className=" text-lg lg:text-2xl pb-2 font-bold text-richblack-25">
                Customer's Feedback
              </h1>
              <div className=" pb-2 h-full lg:h-[100%] text-white overflow-y-auto">
                <Feedback />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
