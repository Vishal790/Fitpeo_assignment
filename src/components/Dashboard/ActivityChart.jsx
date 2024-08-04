import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { name: "5", value: 3000 },
  { name: "7", value: 8000 },
  { name: "9", value: 4500 },
  { name: "11", value: 12000 },
  { name: "13", value: 8000 },
  { name: "15", value: 16800 },
  { name: "17", value: 13000 },
  { name: "19", value: 8000 },
  { name: "21", value: 15000 }, 
  { name: "23", value: 11500 },
  { name: "25", value: 6500 },
  { name: "27", value: 9200 },
];
const CustomBar = (props) => {
  const { fill, x, y, width=10, height } = props;
  const radius = 25;
 
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={radius} 
        ry={radius} 
      />
    </g>
  );
};

const ActivityChart = () => {
      const [barWidth, setBarWidth] = useState(20);
      const [view, setView] = useState("Weekly");



    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
         
          setBarWidth(15);
        } else if (window.innerWidth < 768) {
         
          setBarWidth(20);
        } else if (window.innerWidth < 1024) {
         
          setBarWidth(30);
        } else {
         
          setBarWidth(30);
        }
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className="w-full h-[200px]  bg-gray-900 p-4 rounded-lg relative">
      <h2 className="text-white text-2xl font-bold mb-2">Activity</h2>
      <div className="absolute top-4 right-4 bg-gray-700 text-white p-2 rounded">
        <select
          value={view}
          onChange={(e) => setView(e.target.value)}
          className=" bg-richblack-400 rounded-xl px-3  text-white  cursor-pointer"
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis
            stroke="#ffffff"
            ticks={[0, 5000, 10000, 15000]}
            tickFormatter={(value) =>
              value > 0 ? `${(value / 1000).toFixed(1)}k` : "0"
            }
          />
          <Tooltip />
          <ReferenceLine y={5000} stroke="grey" strokeWidth={2} />{" "}
          <ReferenceLine y={10000} stroke="grey" strokeWidth={2} />{" "}
          <ReferenceLine y={15000} stroke="grey" strokeWidth={2} />
          <Bar
            dataKey="value"
            fill="#4A90E2"
            shape={<CustomBar />}
            barSize={barWidth}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
