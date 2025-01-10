"use client";
import React from "react";
import ExpenseList from "@/app/_components/expenseList";
import { downloadCsv } from "@/app/utils/downloadCsv";

export default function Expense() {
  const handleDownloadExpense = () => {
    const csvEndPoint = `${process.env.NEXT_PUBLIC_CSV_SERVICE_URL}/export/expense`;
    downloadCsv(csvEndPoint);
  };
  return (
    <div className="flex flex-col text-center">
      <div className="flex h-20 shrink-0 items-end rounded-md bg-primary text-white text-[44px] p-4 md:h-52">
        Expense
      </div>
      <div className="mt-4">
        <button
          className="flex h-8 items-center rounded-md bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-secondary"
          onClick={handleDownloadExpense}
        >
          EXPORT AS CSV
        </button>
      </div>
      <ExpenseList />
    </div>
  );
}
