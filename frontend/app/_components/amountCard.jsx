import React from "react";

export default function AmountCard({ title, amount }) {
  return (
    <div className="h-24 w-full bg-neutral-50 border border-gray-50 rounded-md shadow-md flex flex-col justify-center items-center">
      <p>{title} </p>
      <p className="text-lg ">{amount}</p>
    </div>
  );
}
