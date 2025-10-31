import React, { useState } from "react";
import { ArrowRight, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function ConvertSuccess({ user }) {
  const [sidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Convert Funds");
  const [showQuickView, setShowQuickView] = useState(false);

  return (
    <div className="flex bg-gray-50 h-screen">
      <Sidebar
        user={user}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        sidebarOpen={sidebarOpen}
      />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "md:ml-70" : "ml-0"
        }`}
      >
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-10">
          <h1 className="text-xl md:text-3xl font-bold text-gray-500 text-center md:text-left flex-1">
            Convert Funds
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

        {/* ✅ Quick Action Modal */}
        {showQuickView && (
          <div
            className="fixed inset-0 z-50 flex justify-end text-gray-700 bg-black/40"
            onClick={() => setShowQuickView(false)}
          >
            <div
              className="relative bg-white w-[216px] h-[255.5px] shadow-lg rounded-lg mt-6 mr-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQuickView(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              <div className="flex flex-col mt-8 divide-y divide-gray-300">
                <Link
                  to="/send-money"
                  onClick={() => setShowQuickView(false)}
                  className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
                >
                  <img
                    src="/src/assets/Icon-5.svg"
                    className="w-5 h-5"
                    alt="Send Money"
                  />
                  <span>Send Money</span>
                </Link>

                <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100">
                  <img
                    src="/src/assets/switch-horizontal-02.svg"
                    className="w-5 h-5"
                    alt="Fund Wallet"
                  />
                  <span>Fund Wallet</span>
                </button>

                <Link
                  to="/convert-funds"
                  onClick={() => setShowQuickView(false)}
                  className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
                >
                  <img
                    src="/src/assets/refresh-cw-03.svg"
                    className="w-5 h-5"
                    alt="Convert Funds"
                  />
                  <span>Convert Funds</span>
                </Link>

                <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100">
                  <img
                    src="/src/assets/file-05-2.svg"
                    className="w-5 h-5"
                    alt="Create Invoice"
                  />
                  <span>Create Invoice</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Section */}
        <main className="flex-1 flex items-center justify-center px-4 py-6 overflow-y-auto bg-gray-50">
          <div className="relative bg-white w-full max-w-[618px] h-[561px] rounded-xl shadow-md flex flex-col items-center justify-center p-6 text-center">
            {/* Full-width Internal Navbar */}
            <div className="absolute top-0 left-0 w-full text-gray-500 border-gray-200 border-b bg-gray-200 py-3 px-6 text-left font-semibold rounded-t-xl">
              Convert Funds
            </div>

            <div className="h-12"></div>

            <img
              src="/src/assets/check2.svg"
              alt="Success"
              className="w-10 h-10 mb-6"
            />

            <h1 className="text-2xl font-bold text-gray-800 mb-8">
              Transaction Completed!
            </h1>

            <button className="flex items-center justify-center gap-2 w-full mx-4 md:mx-0 bg-purple-100 text-purple-700 py-3 rounded-lg font-semibold mb-4 hover:bg-purple-200 transition">
              <Copy className="w-5 h-5" />
              Copy Invoice Link
            </button>

            <button className="flex items-center justify-center gap-2 w-full mx-4 md:mx-0 border border-gray-300 py-3 rounded-lg font-semibold mb-6 bg-[#7105E9] hover:bg-purple-600 transition text-white">
              <img src="/src/assets/invoices.svg" alt="" />
              Download Receipt
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

export default ConvertSuccess;
