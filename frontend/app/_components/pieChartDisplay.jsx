import React from "react";
import { PieChart } from "@mui/x-charts";
import * as motion from "motion/react-client";

const colors = [
  "#fc7e00",
  "#007DFC",
  "#fc004c",
  "#02cdd4",
  "#04c98e",
  "#8200fc",
  "#fc00df",
];
export default function PieChartDisplay({ groupedData, title }) {
  const mappedData = groupedData.map((item, index) => ({
    id: index,
    value: item.total,
    label: item.category,
    color: colors[index % colors.length],
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col justify-center items-center bg-neutral-50 border border-gray-50 rounded-md shadow-md p-4 w-full"
    >
      <h3 className="text-lg font-medium ">{title}</h3>

      <PieChart
        series={[
          {
            data: mappedData,
            innerRadius: 35,
            outerRadius: 80,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -45,
            endAngle: 225,
            cx: 100,
            cy: 150,
          },
        ]}
        width={350}
        height={350}
        className="cursor-pointer"
      />
    </motion.div>
  );
}
