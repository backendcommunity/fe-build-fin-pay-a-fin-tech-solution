import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import AddRecipientModal from "../components/AddRecipientModal";
import QuickActionModal from "../components/QuickActionModal";
import sendIcon from "/src/assets/icon-5.svg";
import convertIcon from "/src/assets/switch-horizontal-02.svg";

import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ArrowRightLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Copy,
  X,
} from "lucide-react";

const Wallet = () => {
  const [sidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Wallet");
  const [showBalance, setShowBalance] = useState(true);
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const [walletData, setWalletData] = useState({
    country: "United States",
    currency: "USD",
    symbol: "$",
    flag: "/src/assets/usd.svg",
    balance: 2450.75,
    receivingAccount: {
      holder: "David Olumuyiwa",
      bank: "Finpay Bank",
      number: "1234567890",
    },
    income: 1500,
    expenses: 950,
    transactions: [
      {
        id: 1,
        type: "Credit",
        amount: 500,
        date: "2025-10-06",
        status: "Successful",
      },
      {
        id: 2,
        type: "Debit",
        amount: 200,
        date: "2025-10-05",
        status: "Successful",
      },
      {
        id: 3,
        type: "Credit",
        amount: 1000,
        date: "2025-10-04",
        status: "Pending",
      },
      {
        id: 4,
        type: "Debit",
        amount: 150,
        date: "2025-10-03",
        status: "Failed",
      },
      {
        id: 5,
        type: "Credit",
        amount: 300,
        date: "2025-10-02",
        status: "Successful",
      },
    ],
  });

  const availableCurrencies = [
    {
      country: "United States",
      currency: "USD",
      symbol: "$",
      flag: "/src/assets/usd.svg",
    },
    {
      country: "United Kingdom",
      currency: "GBP",
      symbol: "£",
      flag: "/src/assets/gbp.svg",
    },
    {
      country: "European Union",
      currency: "EUR",
      symbol: "€",
      flag: "/src/assets/eur.svg",
    },
  ];

  const handleCurrencySwitch = (currency) => {
    setWalletData((prev) => ({
      ...prev,
      country: currency.country,
      currency: currency.currency,
      symbol: currency.symbol,
      flag: currency.flag,
    }));
    setShowCurrencyModal(false);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="flex bg-gray-50 h-screen">
      {/* <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        sidebarOpen={sidebarOpen}
      /> */}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "md:ml-73" : "ml-0"
        }`}
      >
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-10">
          <h1 className="text-xl md:text-3xl font-bold text-gray-500 text-center md:text-left flex-1">
            Wallet
          </h1>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setShowQuickView(true)}
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                <img src="/src/assets/chevron-down.svg" alt="Dropdown" />
                Quick Action
              </button>

              <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 transition">
                <img
                  src="/src/assets/bell.svg"
                  alt="Notifications"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 space-y-8">
          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              to="/send-money"
              className="flex items-center gap-2 bg-white border border-purple-600 hover:bg-purple-50 text-purple-600 px-4 py-2 rounded-lg font-medium shadow-sm transition"
            >
              <img src={sendIcon} alt="Send Money" className="w-5 h-5" />
              Send Money
            </Link>
            <Link
              to="/convert-funds"
              className="flex items-center gap-2 bg-white border border-purple-600 hover:bg-purple-50 text-purple-600 px-4 py-2 rounded-lg font-medium shadow-sm transition"
            >
              <img src={convertIcon} alt="Convert Funds" className="w-5 h-5" />
              Convert Funds
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={walletData.flag}
                    alt="Country flag"
                    className="w-8 h-8 rounded-full object-cover border"
                  />
                  <div>
                    <p className="text-gray-700 font-semibold">
                      {walletData.country}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {walletData.currency} ({walletData.symbol})
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowCurrencyModal(true)}
                  className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-purple-200 transition"
                >
                  Switch
                  <div className="flex flex-col">
                    <ArrowUp className="w-3 h-3" />
                    <ArrowDown className="w-3 h-3 -mt-1" />
                  </div>
                </button>
              </div>

              <div className="text-center my-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  {showBalance
                    ? `${
                        walletData.symbol
                      }${walletData.balance.toLocaleString()}`
                    : "•••••••"}
                </h2>

                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="flex items-center justify-center mx-auto text-gray-600 hover:text-gray-800 transition text-sm"
                >
                  {showBalance ? (
                    <>
                      <EyeOff className="w-4 h-4 mr-1" /> Hide Balance
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 mr-1" /> Show Balance
                    </>
                  )}
                </button>
              </div>

              <div className="flex justify-end">
                <button className="flex items-center gap-1 text-purple-600 font-medium text-sm hover:underline">
                  Account Statement
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between">
              <h3 className="text-gray-800 font-semibold mb-4">
                Receiving Account
              </h3>
              <div className="space-y-4 flex-1">
                {Object.entries(walletData.receivingAccount).map(
                  ([key, value]) => (
                    <div
                      className="flex justify-between items-center"
                      key={key}
                    >
                      <p className="text-gray-600 text-sm capitalize">
                        {key.replace(/([A-Z])/g, " $1")}:
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-800 text-sm">
                          {value}
                        </span>
                        <Copy
                          className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer"
                          onClick={() => handleCopy(value)}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowAccountModal(true)}
                  className="text-purple-600 hover:underline"
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between">
              <h3 className="text-gray-800 font-semibold mb-4">
                Expenses Overview
              </h3>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-sm text-gray-500">Income</p>
                  <h2 className="text-2xl font-bold text-green-600">
                    {walletData.symbol}
                    {walletData.income.toLocaleString()}
                  </h2>
                </div>
                <div>
                  <p className="text-sm text-gray-500 text-right">Expenses</p>
                  <h2 className="text-2xl font-bold text-red-500 text-right">
                    {walletData.symbol}
                    {walletData.expenses.toLocaleString()}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Transaction History
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
                  {walletData.transactions.map((tx) => (
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
                        {tx.recipient || "—"}
                      </td>
                      <td className="py-3 px-4 text-gray-500">
                        {walletData.symbol}
                        {tx.amount.toLocaleString()}
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
            <div className="mt-6 flex justify-end">
              <button className="flex items-center gap-1 text-purple-600 text-sm font-medium hover:underline">
                View all transaction details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showAccountModal && (
            <div
              className="fixed inset-0 z-50 flex items-center text-gray-500 justify-center bg-black/40"
              onClick={() => setShowAccountModal(false)}
            >
              <div
                className="bg-white w-[593px] h-[686px] rounded-xl shadow-lg overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b">
                  <h2 className="text-lg font-semibold">Account Details</h2>
                  <button
                    onClick={() => setShowAccountModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex-1 bg-gray-100 p-6 space-y-4">
                  <div className="pb-4 border-b border-gray-300">
                    <span className="font-medium block mb-1">
                      Account Holder
                    </span>
                    <div className="flex items-center gap-2">
                      <span>David Muyiwa</span>
                      <button onClick={() => handleCopy("David Muyiwa")}>
                        <img
                          src="/src/assets/copy.svg"
                          alt="Copy"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="pb-4 border-b border-gray-300">
                    <span className="font-medium block mb-1">Bank Name</span>
                    <div className="flex items-center gap-2">
                      <span>FinPay Bank</span>
                      <button
                        onClick={() => handleCopy("First Bank of Nigeria")}
                      >
                        <img
                          src="/src/assets/copy.svg"
                          alt="Copy"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="pb-4 border-b border-gray-300">
                    <span className="font-medium block mb-1">
                      Account Number
                    </span>
                    <div className="flex items-center gap-2">
                      <span>1234567890</span>
                      <button onClick={() => handleCopy("1234567890")}>
                        <img
                          src="/src/assets/copy.svg"
                          alt="Copy"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="pb-4 border-b border-gray-300">
                    <span className="font-medium block mb-1">
                      Routing Number
                    </span>
                    <div className="flex items-center gap-2">
                      <span>987654321</span>
                      <button onClick={() => handleCopy("987654321")}>
                        <img
                          src="/src/assets/copy.svg"
                          alt="Copy"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="pb-4 border-b border-gray-300">
                    <span className="font-medium block mb-1">Account Type</span>
                    <div className="flex items-center gap-2">
                      <span>Savings</span>
                      <button onClick={() => handleCopy("Savings")}>
                        <img
                          src="/src/assets/copy.svg"
                          alt="Copy"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="pb-4 border-gray-300">
                    <span className="font-medium block mb-1">Address</span>
                    <div className="flex items-center gap-2">
                      <span>123 Lagos Street, NG</span>
                      <button
                        onClick={() => handleCopy("123 Lagos Street, NG")}
                      >
                        <img
                          src="/src/assets/copy.svg"
                          alt="Copy"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="bg-white p-4 flex justify-between border-t">
                  <button
                    onClick={() =>
                      handleCopy(
                        `Account Holder: David Muyiwa
                            Bank: First Bank of Nigeria
                            Account Number: 1234567890
                            Routing Number: 987654321
                            Account Type: Savings
                            Address: 123 Lagos Street, NG`
                      )
                    }
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    <img
                      src="/src/assets/copy.svg"
                      alt="Copy"
                      className="w-4 h-4"
                    />
                    <span>Copy details as text</span>
                  </button>

                  <button className="flex items-center gap-2 px-4 py-2 bg-[#7105E9] text-white rounded-lg hover:bg-[#5804b6]">
                    <img
                      src="/src/assets/invoices.svg"
                      alt="Copy"
                      className="w-4 h-4"
                    />
                    <span>Proof of Account</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {showQuickView && (
        <QuickActionModal onClose={() => setShowQuickView(false)} />
      )}

      {showCurrencyModal && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={() => setShowCurrencyModal(false)}
        >
          <div
            className="bg-white w-[300px] rounded-lg p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Select Currency
              </h3>
              <button
                onClick={() => setShowCurrencyModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
              {availableCurrencies.map((currency) => (
                <button
                  key={currency.currency}
                  onClick={() => handleCurrencySwitch(currency)}
                  className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 rounded-md transition"
                >
                  <img
                    src={currency.flag}
                    alt={currency.currency}
                    className="w-6 h-6 rounded-full border"
                  />
                  <div className="flex-1 text-left">
                    <p className="text-gray-800 font-medium">
                      {currency.country}
                    </p>
                    <p className="text-sm text-gray-500">
                      {currency.currency} ({currency.symbol})
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
