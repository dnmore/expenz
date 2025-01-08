import React from "react";

function IncomeItem({ income }) {
  const { description, amount, date, category } = income;
  return (
    <div className="grid grid-cols-3 text-center py-4 md:grid-cols-4">
      <p className="ml-2 text-sm font-semibold text-left md:text-base">{description}</p>
      <p className="text-sm font-medium md:text-base">{amount}</p>
      <p className="text-sm font-medium md:text-base">{date}</p>
      <p className="hidden text-sm text-gray-500 md:block">{category}</p>
    </div>
  );
}

export default IncomeItem;
