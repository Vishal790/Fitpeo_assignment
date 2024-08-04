import React from "react";
import Profile from "../../assets/profile.png";

const OrderTable = () => {
  const orderData = [
    {
      customer: {
        name: "Wade Warren",
        image: Profile,
      },
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: {
        name: "Jane Cooper",
        image: Profile,
      },
      orderNo: "48965786",
      amount: "$365.02",
      status: "Delivered",
    },
    {
      customer: {
        name: "Guy Hawkins",
        image: Profile,
      },
      orderNo: "78958215",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      customer: {
        name: "Kristin Watson",
        image: Profile,
      },
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
    },
    {
      customer: {
        name: "Cody Fisher",
        image: Profile,
      },
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
    },
    {
      customer: {
        name: "Savannah Nguyen",
        image: Profile,
      },
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
    
  ];
  return (
    <div className="max-h-full">
      <table className="w-full  ">
        <thead className="relative">
          <tr className=" text-xs text-left  border-b border-richblack-400">
            <th className="py-2 px-4">Customer</th>
            <th className="py-2 px-4 truncate">Order No.</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Status</th>
          </tr>
          <tr className="absolute bottom-[-8px] h-8"></tr>
        </thead>
        <tbody className=" text-xs">
          {orderData.map((order, index) => (
            <tr key={index} className="border-b border-richblack-400">
              <td className="py-2 px-4 flex items-center gap-x-2 truncate text-richblack-50">
                <img
                  src={order.customer.image}
                  alt={order.customer.name}
                  className="w-10 h-10 rounded-full mr-2"
                />
                {order.customer.name}
              </td>
              <td className="py-2 px-4">{order.orderNo}</td>
              <td className="py-2 px-4">{order.amount}</td>
              <td className={`py-2 px-4 `}>
                <div
                  className={`${
                    order.status == "Delivered"
                      ? "text-caribbeangreen-300 bg-caribbeangreen-700"
                      : " text-red-400 bg-red-700"
                  } text-center rounded-xl py-1 w-fit px-5`}
                >
                  {order.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
