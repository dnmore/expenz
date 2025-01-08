"use client"
import React from "react";
import IncomeList from "@/app/_components/incomeList";
import { downloadCsv } from "@/app/utils/downloadCsv";

export default function Income() {

  const handleDownloadIncome = () => {
    const csvEndPoint = `${process.env.NEXT_PUBLIC_CSV_SERVICE_URL}/export/income`
    downloadCsv(csvEndPoint)
  }



  return (
    <div className="flex min-h-screen flex-col text-center">
      <div className="flex h-20 shrink-0 items-end rounded-md bg-primary text-white text-[44px] p-4 md:h-52">
        Income
      </div>
      <div className="mt-4">
        <button className="flex h-8 items-center rounded-md bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-secondary" onClick={handleDownloadIncome}>
          EXPORT AS CSV
        </button>
      </div>
      <IncomeList />
    </div>
  );
}
