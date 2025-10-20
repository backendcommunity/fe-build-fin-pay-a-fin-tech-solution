import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Calendar, ChevronLeft, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";

function NewInvoicePage({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Invoices");

  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(0);
  const [showVat, setShowVat] = useState(false);

  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    flag: "/src/assets/usd.svg",
  });

  const customers = [
    "John Doe",
    "Mary Johnson",
    "Michael Smith",
    "Sarah Lee",
    "Christopher Nikunuku",
  ];

  const currencies = [
    { code: "USD", name: "US Dollar", symbol: "$", flag: "/src/assets/usd.svg" },
    { code: "EUR", name: "Euro", symbol: "€", flag: "/src/assets/eur.svg" },
    { code: "GBP", name: "British Pound", symbol: "£", flag: "/src/assets/gbp.svg" },
    { code: "NGN", name: "Nigerian Naira", symbol: "₦", flag: "/src/assets/ngn.svg" },
  ];

  useEffect(() => {
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    const formattedDueDate = nextWeek.toISOString().split("T")[0];
    setInvoiceDate(formattedToday);
    setDueDate(formattedDueDate);
  }, []);

  const handleSelectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setShowCurrencyModal(false);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } transition-all duration-300 fixed md:static z-20`}
      >
        <Sidebar
          user={user}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          sidebarOpen={sidebarOpen}
        />
      </div>

      <div
        className={`flex-1 flex flex-col overflow-y-auto transition-all duration-300 ${
          sidebarOpen ? "ml-0 md:ml-10" : "ml-0"
        }`}
      >

        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-10">
          <h1 className="text-xl md:text-3xl font-bold text-gray-500 text-center md:text-left flex-1">
            New Invoice
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

        {/* Main Body */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <h2 className="text-gray-700 font-semibold mb-4">
                  Customer Information
                </h2>

                <div>
                  <label className="text-sm text-gray-500">Customer Name*</label>
                  <select
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
                  >
                    <option value="">Select a customer</option>
                    {customers.map((cust, index) => (
                      <option key={index} value={cust}>
                        {cust}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 relative">
                <h2 className="text-gray-700 font-semibold mb-4">
                  Invoice Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">Currency</label>
                    <button
                      onClick={() => setShowCurrencyModal(true)}
                      className="flex items-center justify-between w-full border border-gray-300 rounded-lg px-3 py-2 mt-2 hover:border-purple-500 transition"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={selectedCurrency.flag}
                          alt={selectedCurrency.code}
                          className="rounded-sm w-6 h-4"
                        />
                        <span className="text-gray-700">
                          {selectedCurrency.name} ({selectedCurrency.symbol})
                        </span>
                      </div>
                      <ChevronDown className="text-gray-500 w-4 h-4" />
                    </button>
                  </div>

                  <div>
                    <label className="text-sm text-gray-500">Issue Date</label>
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mt-2">
                      <Calendar className="text-gray-400 w-4 h-4" />
                      <input
                        type="date"
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
                        className="w-full outline-none text-gray-700 bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-500">Invoice Due Date</label>
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mt-2">
                      <Calendar className="text-gray-400 w-4 h-4" />
                      <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="w-full outline-none text-gray-700 bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <h2 className="text-gray-700 font-semibold mb-4">Item Description</h2>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">
                      Item Description*
                    </label>
                    <input
                      type="text"
                      value={itemDescription}
                      onChange={(e) => setItemDescription(e.target.value)}
                      placeholder="Item Description"
                      className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-500">Quantity*</label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="Quantity"
                      className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-500">
                      Amount (Per Quantity)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="$0.00"
                      className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="text-sm text-gray-500">VAT Information*</label>
                    <div className="flex items-center gap-2 mt-2">
                      <input
                        type="checkbox"
                        checked={showVat}
                        onChange={() => setShowVat(!showVat)}
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <span className="text-gray-600 text-sm">
                        Should VAT be included?
                      </span>
                    </div>
                  </div>
                </div>


                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>
                      {selectedCurrency.symbol}
                      {(quantity * amount).toFixed(2)}
                    </span>
                  </div>
                  {showVat && (
                    <div className="flex justify-between text-gray-600 mt-1">
                      <span>VAT (7.5%)</span>
                      <span>
                        {selectedCurrency.symbol}
                        {(quantity * amount * 0.075).toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold text-gray-700 mt-2">
                    <span>Total</span>
                    <span>
                      {selectedCurrency.symbol}
                      {showVat
                        ? (quantity * amount * 1.075).toFixed(2)
                        : (quantity * amount).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition">
                  <ChevronLeft className="w-4 h-4" />
                  Go back
                </button>

                <Link to="/newinvoicesuccess">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-purple-700 transition"
                  >
                    Create Invoice
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>

      {showCurrencyModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white rounded-xl shadow-lg w-80 p-4 relative">
            <button
              onClick={() => setShowCurrencyModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Select Currency
            </h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {currencies.map((currency, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectCurrency(currency)}
                  className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 hover:bg-purple-50 transition"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={currency.flag}
                      alt={currency.code}
                      className="rounded-sm w-6 h-4"
                    />
                    <span className="text-gray-700">{currency.name}</span>
                  </div>
                  <span className="text-gray-500">{currency.symbol}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewInvoicePage;
