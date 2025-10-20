import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex bg-gray-50 h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;
