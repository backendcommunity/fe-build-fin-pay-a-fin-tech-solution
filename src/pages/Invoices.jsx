import React, { useState } from "react";
import { Search, Filter, FileText } from "lucide-react";
import Sidebar from "../components/Sidebar";
import QuickActionModal from "../components/QuickActionModal";

function InvoicePage({ user }) {
  const [sidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Invoices");
  const [showQuickView, setShowQuickView] = useState(false);
  const [activeTab, setActiveTab] = useState("All invoices");

  const tabs = [
    "All invoices",
    "Draft",
    "Pending",
    "Processing",
    "Paid",
    "Due",
    "Overdue",
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      <Sidebar
        user={user}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        sidebarOpen={sidebarOpen}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "md:ml-[295px]" : "ml-0"
        }`}
      >
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b">
          <h1 className="text-xl md:text-3xl font-bold text-gray-700 text-center md:text-left flex-1">
            {activeItem}
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowQuickView(true)}
              className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              <img src="/src/assets/chevron-down.svg" alt="Dropdown" />
              Quick Action
            </button>

            <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50">
              <img
                src="/src/assets/bell.svg"
                alt="Notifications"
                className="w-5 h-5"
              />
            </div>
          </div>
        </header>
        {showQuickView && (
          <QuickActionModal
            show={showQuickView}
            onClose={() => setShowQuickView(false)}
          />
        )}

        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex border-b border-gray-200 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 text-center py-3 text-sm font-medium min-w-[120px] transition-all duration-200 ${
                    activeTab === tab
                      ? "text-purple-600 font-semibold border-b-2 border-purple-600 bg-purple-50"
                      : "text-gray-500 hover:text-purple-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-2 p-4 border-b border-gray-100">
              <div className="relative w-full md:w-3/4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for an Invoice"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            <div className="flex flex-col items-center justify-center text-center py-20">
              <FileText className="w-10 h-10 text-gray-400 mb-3" />
              <h2 className="text-lg font-semibold text-gray-700 mb-1">
                No payments
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Once you have any payment, the information appears here.
              </p>
              <button className="bg-purple-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-purple-700 transition">
                New Invoice →
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default InvoicePage;
