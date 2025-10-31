import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import QuickActionModal from "../components/QuickActionModal"; // ✅ import reusable modal

const currencyFlags = {
  USD: "/src/assets/usd.svg",
  EUR: "/src/assets/eur.svg",
  GBP: "/src/assets/gbp.svg",
  NGN: "/src/assets/ngn.svg",
};

const currencySymbols = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  NGN: "₦",
};

const exchangeRates = {
  USD: { EUR: 0.9, GBP: 0.78, NGN: 1600 },
  EUR: { USD: 1.1, GBP: 0.88, NGN: 1700 },
  GBP: { USD: 1.25, EUR: 1.14, NGN: 1800 },
  NGN: { USD: 0.00062, EUR: 0.00059, GBP: 0.00055 },
};

function ConvertFunds({ user }) {
  const [sidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Convert Funds");
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("GBP");
  const [showQuickView, setShowQuickView] = useState(false); // ✅ for modal toggle

  const convertFunds = () => {
    if (!amount || !exchangeRates[fromCurrency]?.[toCurrency]) return "";
    return (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      <Sidebar
        user={user}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        sidebarOpen={sidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full md:w-auto">
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
          <h1 className="text-xl md:text-3xl font-bold text-gray-500 text-center md:text-left md:ml-107 flex-1">
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
        {showQuickView && (
          <QuickActionModal
            show={showQuickView}
            onClose={() => setShowQuickView(false)}
          />
        )}

        <main className="flex-1 flex items-center justify-center px-4 py-6 overflow-y-auto bg-white">
          <div className="bg-white p-6 rounded-xl shadow-sm border w-full max-w-md">
            <h2 className="text-md font-semibold text-gray-800 mb-6">
              Convert Funds
            </h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount to Convert <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                <span className="text-gray-500 mr-2">
                  {currencySymbols[fromCurrency]}
                </span>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="flex-1 outline-none text-gray-800 font-bold"
                />
                <div className="flex items-center ml-2 border border-gray-300 rounded-full px-2 py-1">
                  <img
                    src={currencyFlags[fromCurrency]}
                    alt={fromCurrency}
                    className="w-5 h-5 mr-1"
                  />
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="outline-none bg-transparent text-gray-800 font-semibold"
                  >
                    {Object.keys(currencyFlags).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1 flex justify-between">
                <span>{fromCurrency} Balance:</span>
                <span>{currencySymbols[fromCurrency]}950.00</span>
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                You’ll receive <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                <span className="text-gray-500 mr-2">
                  {currencySymbols[toCurrency]}
                </span>
                <input
                  type="text"
                  value={convertFunds()}
                  disabled
                  className="flex-1 outline-none bg-transparent text-gray-800 font-bold"
                />
                <div className="flex items-center ml-2 border border-gray-300 rounded-full px-2 py-1">
                  <img
                    src={currencyFlags[toCurrency]}
                    alt={toCurrency}
                    className="w-5 h-5 mr-1"
                  />
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="outline-none bg-transparent text-gray-800 font-semibold"
                  >
                    {Object.keys(currencyFlags).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1 flex">
                <span className="flex-1">{toCurrency} Balance:</span>
                <span>{currencySymbols[toCurrency]}980.00</span>
              </p>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              Exchange rate: 1 {fromCurrency} ={" "}
              {exchangeRates[fromCurrency]?.[toCurrency] || "N/A"} {toCurrency}
            </p>
            <button
              type="button"
              onClick={() =>
                alert(
                  `Converted ${amount} ${fromCurrency} to ${convertFunds()} ${toCurrency}`
                )
              }
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium"
            >
              Convert Funds <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              to="/dashboard"
              className="text-sm text-gray-400 mt-4 text-center cursor-pointer hover:underline block"
            >
              Go back
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ConvertFunds;
