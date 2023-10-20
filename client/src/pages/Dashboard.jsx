import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";

export default function Dashboard() {
  return (
    <div className="relative flex pt-20 min-h-[100vh]">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto py-10">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
