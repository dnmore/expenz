import React from "react";
import Sidenav from "../_components/sidenav";

export default function Dashboardlayout({ children }) {
  return (
    <div className="min-h-screen overflow-y-auto flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-64">
        <Sidenav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto lg:p-12">{children}</div>
    </div>
  );
}
