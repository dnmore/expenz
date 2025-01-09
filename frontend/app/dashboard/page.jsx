"use client";
import React, { useEffect, useState } from "react";
import { sql } from "drizzle-orm";
import { db } from "../utils/dbConfig";
import { expense, income } from "../utils/schema";
import AmountCard from "../_components/amountCard";
import BarChartDisplay from "../_components/barChartDisplay";
import PieChartDisplay from "../_components/pieChartDisplay";
import {
  AmountCardsSkeleton,
  BarChartSkeleton,
  PieChartSkeleton,
} from "../_components/skeletons";

export default function Dashboard() {
  const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);
  const [totalExpenseAmount, setTotalExpenseAmount] = useState(0);
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const [incomeAmount, expenseAmount, groupedIncome, groupedExpense] =
        await Promise.all([
          db
            .select({ totalIncome: sql`SUM(${income.amount})`.mapWith(Number) })
            .from(income),
          db
            .select({
              totalExpense: sql`SUM(${expense.amount})`.mapWith(Number),
            })
            .from(expense),
          db
            .select({
              category: income.category,
              total: sql`SUM(${income.amount})`.mapWith(Number),
            })
            .from(income)
            .groupBy(income.category),
          db
            .select({
              category: expense.category,
              total: sql`SUM(${expense.amount})`.mapWith(Number),
            })
            .from(expense)
            .groupBy(expense.category),
        ]);

      setTotalIncomeAmount(incomeAmount[0]?.totalIncome || 0);
      setTotalExpenseAmount(expenseAmount[0]?.totalExpense || 0);
      setIncomeData(groupedIncome);
      setExpenseData(groupedExpense);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col text-center bg-zinc-100">
      <div className="flex h-20 shrink-0 items-end rounded-md bg-primary shadow-md text-white text-[44px] p-4 md:h-52">
        Dashboard
      </div>
      <div className="mt-4 flex flex-col justify-center items-center gap-4 text-sm font-medium   md:flex-row">
        {loading ? (
          <AmountCardsSkeleton />
        ) : (
          <>
            
            <AmountCard title="Total Income" amount={totalIncomeAmount} />
            <AmountCard title="Total Expense" amount={totalExpenseAmount} />
            <AmountCard
              title="Budget"
              amount={totalIncomeAmount - totalExpenseAmount}
            />
          </>
        )}
      </div>

      <div className="py-6 w-full md:w-4/5 md:m-auto md:py-12">
        <div className="flex flex-col gap-4">
          {loading ? (
            <>
              <BarChartSkeleton />
              <PieChartSkeleton />
              <PieChartSkeleton />
            </>
          ) : (
            <>
              <BarChartDisplay
                title="Income / Expenses"
                incomeData={totalIncomeAmount}
                expenseData={totalExpenseAmount}
              />

              <PieChartDisplay
                groupedData={incomeData}
                title="Income by Category"
              />
              <PieChartDisplay
                groupedData={expenseData}
                title="Expense by Category"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
