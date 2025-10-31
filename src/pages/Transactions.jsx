import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import QuickActionModal from "../components/QuickActionModal";
import { ArrowRight, Search, Filter } from "lucide-react";

const Transactions = () => {
  const [sidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Transactions");
  const [currentPage, setCurrentPage] = useState(1);
  const [showQuickAction, setShowQuickAction] = useState(false);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  // ✅ Navigate when sidebar item changes
  const handleSetActiveItem = (item) => {
    setActiveItem(item);
    if (item === "Dashboard") navigate("/dashboard");
    else if (item === "Transactions") navigate("/transactions");
    else if (item === "Cards") navigate("/cards");
  };

  // ✅ Transactions list
  const transactions = [
    {
      id: 1,
      type: "Credit",
      recipient: "John Doe",
      amount: 500,
      date: "2025-10-06",
      status: "Successful",
    },
    {
      id: 2,
      type: "Debit",
      recipient: "Netflix",
      amount: 200,
      date: "2025-10-05",
      status: "Successful",
    },
    {
      id: 3,
      type: "Credit",
      recipient: "Wallet Top-up",
      amount: 1000,
      date: "2025-10-04",
      status: "Pending",
    },
    {
      id: 4,
      type: "Debit",
      recipient: "Amazon",
      amount: 150,
      date: "2025-10-03",
      status: "Failed",
    },
  ];

  // ✅ Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = transactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex bg-gray-50 h-screen">
      <Sidebar
        activeItem={activeItem}
        setActiveItem={handleSetActiveItem}
        sidebarOpen={sidebarOpen}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "md:ml-73" : "ml-0"
        }`}
      >
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-10">
          <h1 className="text-xl md:text-3xl font-bold text-gray-500 text-center md:text-left flex-1">
            Transactions
          </h1>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setShowQuickAction(true)}
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                <img src="../assets/chevron-down.svg" alt="Dropdown" />
                Quick Action
              </button>

              <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 transition">
                <img
                  src="../assets/bell.svg"
                  alt="Notifications"
                  className="w-5 h-5"
                />
              </div>
            </div>

            <button
              onClick={() => setShowQuickAction(true)}
              className="md:hidden p-2 rounded-lg border border-gray-200"
              aria-label="Quick Action"
            >
              <img
                src="../assets/chevron-down.svg"
                alt="Quick"
                className="w-5 h-5"
              />
            </button>
          </div>
        </header>

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

        <main className="p-6 bg-gray-50 flex-1 overflow-y-auto">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center md:text-left">
              Recent Transactions
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-left">
                    <th className="py-3 px-4 font-medium">Type</th>
                    <th className="py-3 px-4 font-medium">Recipient</th>
                    <th className="py-3 px-4 font-medium">Amount</th>
                    <th className="py-3 px-4 font-medium">Date</th>
                    <th className="py-3 px-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTransactions.map((tx) => (
                    <tr
                      key={tx.id}
                      className="border-b border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-4">
                        <span
                          className={
                            tx.type === "Credit"
                              ? "text-green-600 font-medium"
                              : "text-red-500 font-medium"
                          }
                        >
                          {tx.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700 font-medium">
                        {tx.recipient}
                      </td>
                      <td className="py-3 px-4 text-gray-500">
                        ₦{tx.amount.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-gray-500">{tx.date}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            tx.status === "Successful"
                              ? "bg-green-100 text-green-700"
                              : tx.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-sm text-gray-600 text-center md:text-left">
                Showing {currentPage * itemsPerPage - itemsPerPage + 1}–
                {Math.min(currentPage * itemsPerPage, transactions.length)} of{" "}
                {transactions.length} transactions
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Previous
                </button>

                <button
                  onClick={() =>
                    setCurrentPage((prev) =>
                      prev < Math.ceil(transactions.length / itemsPerPage)
                        ? prev + 1
                        : prev
                    )
                  }
                  disabled={
                    currentPage ===
                    Math.ceil(transactions.length / itemsPerPage)
                  }
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition ${
                    currentPage ===
                    Math.ceil(transactions.length / itemsPerPage)
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>

        <QuickActionModal
          show={showQuickAction}
          isOpen={showQuickAction}
          onClose={() => setShowQuickAction(false)}
        />
      </div>
    </div>
  );
};

export default Transactions;
