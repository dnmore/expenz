import React from "react";
import { BarChart } from "@mui/x-charts";

export default function BarChartDisplay({ title, incomeData, expenseData }) {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-neutral-50 border border-gray-50 rounded-md shadow-md p-2 md:p-4">
      <h3 className="text-lg font-medium ">{title}</h3>

      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: [""],
          },
        ]}
        series={[
          { data: [incomeData], label: "Income", color: "#007DFC" },
          { data: [expenseData], label: "Expense", color: "#fc004c" },
        ]}
        width={300}
        height={400}
        borderRadius={10}
        className="cursor-pointer"
        
      />
    </div>
  );
}
