"use client";
import { db } from "@/app/utils/dbConfig";
import { income } from "@/app/utils/schema";
import React, { useEffect, useState } from "react";
import IncomeItem from "./incomeItem";

function IncomeList() {
  const [incomeItems, setIncomeItems] = useState([]);

  useEffect(() => {
    getIncomeList();
  }, []);

  const getIncomeList = async () => {
    const result = await db.select().from(income);

    setIncomeItems(result);
  };

  return (
    <div className="pt-4 bg-white mt-4 rounded-md shadow-md">
      <div className="grid grid-cols-3 text-center uppercase py-4 border-b border-b-gray-300 md:grid-cols-4">
        <p className="ml-2 text-sm font-semibold text-left md:text-base">
          Description
        </p>
        <p className="text-sm font-semibold md:text-base">Amount</p>
        <p className="text-sm font-semibold md:text-base">Date</p>
        <p className="hidden text-sm font-semibold md:text-base md:block">
          Category
        </p>
      </div>
      <div className="list">
        {incomeItems.map((item) => (
          <IncomeItem key={item.id} income={item} />
        ))}
      </div>
    </div>
  );
}

export default IncomeList;
