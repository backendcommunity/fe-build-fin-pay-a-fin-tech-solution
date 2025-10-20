import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import QuickActionModal from "../components/QuickActionModal";
import { ArrowRight, Banknote, Smartphone } from "lucide-react";

function SendMoney({ user }) {
  const [sidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Convert Funds");
  const [showQuickView, setShowQuickView] = useState(false); 

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      <Sidebar
        user={user}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        sidebarOpen={sidebarOpen}
      />

      <div className="flex-1 flex flex-col w-full md:w-auto">
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
          <h1 className="text-xl md:text-3xl font-bold text-gray-500 text-center md:text-left md:ml-86 flex-1">
            Send Money
          </h1>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setShowQuickView(true)}
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
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
          </div>
        </header>

        {showQuickView && (
          <QuickActionModal
            show={showQuickView}
            onClose={() => setShowQuickView(false)}
          />
        )}

        <main className="flex-1 flex items-center justify-center px-4 py-6 overflow-y-auto bg-gray-50">
          <div className="relative bg-white w-full max-w-[607px] h-[515px] rounded-xl shadow-md flex flex-col items-center justify-start p-6">
            <div className="absolute top-0 left-0 w-full text-gray-800 border-b border-gray-300 bg-gray-200 py-3 px-6 text-left font-semibold rounded-t-xl">
              Who are you sending to
            </div>
            <div className="h-12"></div>

            <Link
              to="/direct-bank"
              className="flex items-center hover:bg-purple-100 justify-between w-full border border-gray-300 rounded-lg p-4 mb-4 transition"
            >
              <div className="flex items-center gap-3">
                <img src="/src/assets/bank.svg" alt="" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Direct Bank</h3>
                  <p className="text-sm text-gray-500">Direct transfer to bank</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500" />
            </Link>

            <button className="flex items-center hover:bg-purple-100 justify-between w-full border border-gray-300 rounded-lg p-4 mb-6 transition">
              <div className="flex items-center gap-3">
                <img src="/src/assets/phone.svg" alt="" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Mobile Money</h3>
                  <p className="text-sm text-gray-500">
                    Send money to mobile money
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500" />
            </button>

            <button className="flex items-center justify-center gap-2 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold mb-4 hover:bg-purple-700 transition">
              Continue
              <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              to="/dashboard"
              className="text-purple-700 font-semibold hover:underline"
            >
              Back to Dashboard
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SendMoney;
