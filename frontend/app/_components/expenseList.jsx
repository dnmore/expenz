"use client";
import { db } from "@/app/utils/dbConfig";
import { expense } from "@/app/utils/schema";
import React, { useEffect, useState } from "react";
import ExpenseItem from "./expenseItem";
import { ListSkeleton } from "./skeletons";

function ExpenseList() {
  const [expenseItems, setExpenseItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExpenseList();
  }, []);

  const getExpenseList = async () => {
    try {
      setLoading(true);
      const result = await db.select().from(expense);
      setExpenseItems(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-4 my-4 bg-white mt-4 rounded-md shadow-md">
      {loading ? (
        <ListSkeleton />
      ) : (
        <>
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
            {expenseItems.map((item) => (
              <ExpenseItem key={item.id} expense={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ExpenseList;
