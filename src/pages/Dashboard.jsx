import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [showBalance, setShowBalance] = useState(true);
  const [showQuickView, setShowQuickView] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  const user = {
    name: " Welcome, David",
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  const exchangeRates = [
    {
      logo: "https://flagcdn.com/w20/us.png",
      currency: "USD",
      buying: "₦1,480",
      selling: "₦1,500",
    },
    {
      logo: "https://flagcdn.com/w20/gb.png",
      currency: "GBP",
      buying: "₦1,850",
      selling: "₦1,870",
    },
    {
      logo: "https://flagcdn.com/w20/eu.png",
      currency: "EUR",
      buying: "₦1,600",
      selling: "₦1,620",
    },
  ];

  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? "Good Morning, have a great day!"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <div className="min-h-screen flex bg-white">
      <aside
        className={`fixed top-0 left-0 w-[295px] h-screen bg-[#7105E9] text-white shadow-lg 
            rounded-tr-3xl  z-30 transform transition-transform duration-300 
            overflow-y-auto
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            md:translate-x-0 flex flex-col justify-between`}
      >
        <div>
          <div className="p-6 text-2xl font-bold text-center">FinPay</div>

          <nav className="flex flex-col items-start p-6 gap-3 mt-8 text-lg w-full">
            {[
              { name: "Dashboard", icon: "/src/assets/dashboard.svg" },
              { name: "Invoices", icon: "/src/assets/invoices.svg" },
              { name: "Cards", icon: "/src/assets/cards.svg" },
              { name: "Wallets", icon: "/src/assets/wallets.svg" },
              { name: "Transactions", icon: "/src/assets/transactions.svg" },
            ].map((item) => (
              <span
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`cursor-pointer flex items-center gap-3 px-4 py-2 w-full rounded-lg transition-colors 
                    ${
                      activeItem === item.name
                        ? "bg-[#9C42FF] text-white font-semibold"
                        : "hover:bg-purple-600"
                    }`}
              >
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                {item.name}
              </span>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-between p-4 border-t border-purple-400">
          <img
            src="/src/assets/user.png"
            alt="User Profile"
            className="w-12 h-12 rounded-full border-2 border-white shadow-md"
          />

          <div className="flex-1 text-center px-3">
            <h3 className="font-semibold text-base">{user?.name || "David"}</h3>
            <p className="text-xs text-gray-200 truncate">
              {user?.email || "david.muyiwa.31@gmail.com"}
            </p>
          </div>

          <button
            onClick={() => console.log("Logging out...")}
            className="text-white hover:text-red-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </div>
      </aside>

      {showQuickView && (
        <div
          className="fixed inset-0 z-50 flex justify-end text-gray-700 bg-black/40"
          onClick={() => setShowQuickView(false)}
        >
          <div
            className="relative bg-white w-[216px] h-[255.5px] shadow-lg rounded-lg mt-6 mr-6 transform translate-x-0 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQuickView(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <div className="flex flex-col mt-8 divide-y divide-gray-300">
              <button
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
                onClick={() => {
                  setShowQuickView(false);
                  navigate("/send-money");
                }}
              >
                <img
                  src="/src/assets/Icon-5.svg"
                  className="w-5 h-5"
                  alt="Send Money"
                />
                <span>Send Money</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100">
                <img
                  src="/src/assets/switch-horizontal-02.svg"
                  className="w-5 h-5"
                />
                <span>Fund Wallet</span>
              </button>
              <Link
                to="/convert-funds"
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
                <img src="/src/assets/file-05-2.svg" className="w-5 h-5" />
                <span>Create Invoice</span>
              </button>
            </div>
          </div>
        </div>
      )}

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
                <span className="font-medium block mb-1">Account Holder</span>
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
                  <span>First Bank of Nigeria</span>
                  <button onClick={() => handleCopy("First Bank of Nigeria")}>
                    <img
                      src="/src/assets/copy.svg"
                      alt="Copy"
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </div>

              <div className="pb-4 border-b border-gray-300">
                <span className="font-medium block mb-1">Account Number</span>
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
                <span className="font-medium block mb-1">Routing Number</span>
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

              <div className="pb-4  border-gray-300">
                <span className="font-medium block mb-1">Address</span>
                <div className="flex items-center gap-2">
                  <span>123 Lagos Street, NG</span>
                  <button onClick={() => handleCopy("123 Lagos Street, NG")}>
                    <img
                      src="/src/assets/copy.svg"
                      alt="Copy"
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </div>
            </div>

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

      <div
        className="flex-1 flex flex-col md:ml-[295px] transition-all duration-300"
        style={{ backgroundColor: "#FAFBFF" }}
      >
        <nav className="w-full bg-white border-b border-purple-400 px-4 py-3 flex justify-center sticky top-0 z-20">
          <div className="w-full max-w-[1177px] flex justify-between items-center px-6 md:px-10">
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col">
                <span className="font-semibold text-[#222845]">
                  {user.name}
                </span>
                <span className="text-sm text-gray-500">{greeting}</span>
              </div>
            </div>

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

            <button
              className="md:hidden text-gray-700"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 p-4 space-y-3">
            <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              Quick Action
              <img src="/src/assets/dropdown.svg" alt="Dropdown" />
            </button>
            <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50">
              <img
                src="/src/assets/bell.svg"
                alt="Notifications"
                className="w-5 h-5"
              />
            </div>
          </div>
        )}

        <main className="w-full max-w-[987px] mx-auto p-4 md:p-6 ">
          <div className="bg-white shadow-md rounded-xl border border-gray-200 ">
            <div className="px-6 py-3 bg-[#fcfaff] rounded-t-xl border-b ">
              <h2 className="text-lg font-semibold text-[#222845] ">
                Account Balance
              </h2>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 ">
              <div
                className="bg-gray-50 rounded-lg p-4 shadow flex flex-col items-start transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => setShowAccountModal(true)}
              >
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <img
                    src="/src/assets/allBalance.svg"
                    alt="wallet"
                    className="w-10 h-10"
                  />
                  <span className="font-medium">All Account</span>
                </div>
                <p className="text-2xl font-bold text-[#222845]">
                  {showBalance ? "$5,350.00" : "••••••"}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowBalance(!showBalance);
                  }}
                  className="mt-2 flex items-center gap-2 text-xs text-[#222845] border border-gray-300 px-2 py-1 rounded-lg hover:bg-gray-100"
                >
                  Wallet Balance
                  <img
                    src={`/src/assets/${
                      showBalance ? "eye.svg" : "eye-off.svg"
                    }`}
                    alt="Toggle"
                    className="w-3 h-3"
                  />
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 shadow flex flex-col items-start transition-transform transform hover:scale-105">
                <div className="flex items-center gap-2 text-gray-600 pb-2 mb-2 border-b border-gray-300 w-full">
                  <img
                    src="/src/assets/gbp.svg"
                    alt="GBP"
                    className="w-9 h-9"
                  />
                  <span className="font-medium">USD</span>
                </div>
                <p className="text-2xl font-bold text-[#222845]">$500.00</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 shadow flex flex-col items-start transition-transform transform hover:scale-105">
                <div className="flex items-center gap-2 text-gray-600 pb-2 mb-2 border-b border-gray-300 w-full">
                  <img
                    src="/src/assets/gbp.svg"
                    alt="GBP"
                    className="w-9 h-9"
                  />
                  <span className="font-medium">GBP</span>
                </div>
                <p className="text-2xl font-bold text-[#222845]">£2,200.00</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 shadow flex flex-col items-start transition-transform transform hover:scale-105">
                <div className="flex items-center gap-2 text-gray-600 pb-2 mb-2 border-b border-gray-300 w-full">
                  <img
                    src="/src/assets/eur.svg"
                    alt="EUR"
                    className="w-9 h-9"
                  />
                  <span className="font-medium">EUR</span>
                </div>
                <p className="text-2xl font-bold text-[#222845]">€5,700.00</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 shadow flex flex-col items-start transition-transform transform hover:scale-105">
                <div className="flex items-center gap-2 text-gray-600 pb-2 mb-2 border-b border-gray-300 w-full">
                  <img
                    src="/src/assets/ngn.svg"
                    alt="NGN"
                    className="w-9 h-9"
                  />
                  <span className="font-medium">NGN</span>
                </div>
                <p className="text-2xl font-bold text-[#222845]">₦2,200,000</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl border border-gray-200 mt-8">
            <div className="px-6 py-3 bg-[#fcfaff] rounded-t-xl border-b">
              <h2 className="text-lg font-semibold text-[#222845]">
                Quick Action
              </h2>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                className="flex items-center gap-3 p-4 rounded-lg shadow hover:shadow-md transition transition-transform transform hover:scale-105"
                style={{
                  backgroundColor: "#17259010",
                  color: "#172590",
                  border: "1px solid #172590",
                }}
              >
                <img
                  src="/src/assets/send.svg"
                  alt="Send"
                  className="w-6 h-6"
                />
                <span className="font-medium">Send Money</span>
              </div>

              <div
                className="flex items-center gap-3 p-4 rounded-lg shadow hover:shadow-md transition transition-transform transform hover:scale-105"
                style={{
                  backgroundColor: "#34780910",
                  color: "#347809",
                  border: "1px solid #347809",
                }}
              >
                <img
                  src="/src/assets/transaction.svg"
                  alt="Deposit"
                  className="w-6 h-6"
                />
                <span className="font-medium">Convert Funds</span>
              </div>

              <div
                className="flex items-center gap-3 p-4 rounded-lg shadow hover:shadow-md transition transition-transform transform hover:scale-105"
                style={{
                  backgroundColor: "#A37E1D10",
                  color: "#A37E1D",
                  border: "1px solid #A37E1D",
                }}
              >
                <img
                  src="/src/assets/invoice.svg"
                  alt="Withdraw"
                  className="w-6 h-6"
                />
                <span className="font-medium">Create new invoice</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-white shadow-md rounded-xl border border-gray-200">
              <div className="px-6 py-3 bg-[#fcfaff] rounded-t-xl border-b">
                <h2 className="text-lg font-semibold text-[#222845]">
                  Receive Payments
                </h2>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 p-3 border rounded-lg mb-3">
                  <img
                    src="/src/assets/usd.svg"
                    alt="USD"
                    className="w-6 h-6"
                  />
                  <div>
                    <p className="font-medium text-[#222845]">US Dollar</p>
                    <p className="text-sm text-gray-500">
                      Wire routing number, Bank code (SWIFT/BIC), Routing number
                      (ACH or ABA), Account number
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-lg mb-3">
                  <img
                    src="/src/assets/gbp.svg"
                    alt="GBP"
                    className="w-6 h-6"
                    nb
                  />
                  <div>
                    <p className="font-medium text-[#222845]">British Pounds</p>
                    <p className="text-sm text-gray-500">
                      UK sirt code, Account bumber, IBAN
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <img
                    src="/src/assets/eur.svg"
                    alt="EUR"
                    className="w-6 h-6"
                  />
                  <div>
                    <p className="font-medium text-[#222845]">Euros</p>
                    <p className="text-sm text-gray-500">
                      IBAN, Bank code (SWIFT/IBC)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-xl border border-gray-200 flex flex-col">
              <div className="px-6 py-3 bg-[#fcfaff] rounded-t-xl border-b">
                <h2 className="text-lg font-semibold text-[#222845]">
                  Invoices
                </h2>
              </div>

              <div className="p-6 flex flex-col flex-grow border rounded-lg">
                <div className="flex items-center justify-between p-3 border-b border-gray-300">
                  <p className="font-medium text-[#222845]">0 Person</p>
                  <span className="px-3 py-1 rounded-full text-sm bg-[#fff4ed] text-[#b93815] border border-[#b93815] font-medium">
                    Due
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 border-b border-gray-300">
                  <p className="font-medium text-[#222845]">0 Person</p>
                  <span className="px-3 py-1 rounded-full text-sm bg-[#fff1f3] text-[#c01048] border border-[#c01048] font-medium">
                    Overdue
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 mb-6">
                  <p className="font-medium text-[#222845]">0 Person</p>
                  <span className="px-3 py-1 rounded-full text-sm bg-[#f1f3f5] border border-[#b9c0cc] text-[#b9c0cc] font-medium">
                    Awaiting Approval
                  </span>
                </div>

                <button className="mt-4 flex items-center justify-center gap-2 hover:bg-purple-600 bg-[#7105E9] text-white px-4 py-2 rounded-lg shadow hover:bg-[#1a1f36] transition">
                  <img
                    src="/src/assets/invoices.svg"
                    alt="Add"
                    className="w-5 h-5"
                  />
                  Create New Invoice
                </button>
              </div>
            </div>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 bg-white border border-gray-300 rounded-xl shadow">
              <div className="px-6 py-3 bg-[#fcfaff] rounded-t-xl border-b">
                <h2 className="text-lg font-semibold text-[#222845]">
                  Exchange Rates
                </h2>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 font-semibold text-gray-600 border-b pb-2">
                  <span>Currency</span>
                  <span>Buying</span>
                  <span>Selling</span>
                </div>

                {exchangeRates.map((rate, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 items-center py-3 border-b last:border-0"
                  >
                    <div className="flex items-center space-x-2">
                      <img
                        src={rate.logo}
                        alt={rate.currency}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="font-medium text-gray-600">
                        {rate.currency}
                      </span>
                    </div>
                    <span className="text-gray-700">{rate.buying}</span>
                    <span className="text-gray-700">{rate.selling}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-xl shadow flex flex-col">
              <div className="px-6 py-3 bg-[#fcfaff] rounded-t-xl border-b">
                <h2 className="text-lg font-semibold text-[#222845]">Cards</h2>
              </div>

              <div className="p-6 flex flex-col items-center justify-center  flex-grow">
                <img
                  src="/src/assets/icon-4.svg"
                  alt="EUR"
                  className="w-8 h-8"
                />

                <h2 className="text-lg font-bold text-gray-600">
                  No card yet?
                </h2>
                <p className="text-gray-500 mb-4">
                  You don’t have any active cards at the moment.
                </p>
                <button className="flex items-center space-x-2 bg-[#7105E9] text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                  <img
                    src="/src/assets/cards.svg"
                    alt="EUR"
                    className="w-4 h-4 text-white"
                  />
                  <span>Create new card</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
