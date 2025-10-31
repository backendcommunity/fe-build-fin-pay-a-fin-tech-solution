import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Sidebar({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "/src/assets/dashboard.svg",
    },
    { name: "Invoices", path: "/invoices", icon: "/src/assets/invoices.svg" },
    { name: "Cards", path: "/cards", icon: "/src/assets/cards.svg" },
    { name: "Wallet", path: "/wallet", icon: "/src/assets/wallets.svg" },
    {
      name: "Transactions",
      path: "/transactions",
      icon: "/src/assets/transactions.svg",
    },
  ];

  return (
    <>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-40 md:hidden p-2 bg-purple-600 text-white rounded-lg shadow-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed top-0 left-0 w-[295px] h-screen bg-[#7105E9] text-white shadow-lg 
          rounded-tr-3xl z-30 transform transition-transform duration-300 
          overflow-y-auto
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 flex flex-col justify-between`}
      >
        <div>
          <div className="p-6 text-2xl font-bold text-center">FinPay</div>
          <nav className="flex flex-col items-start p-6 gap-3 mt-8 text-lg w-full">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 w-full rounded-lg transition-colors cursor-pointer
                  ${
                    isActive
                      ? "bg-[#9C42FF] text-white font-semibold"
                      : "hover:bg-purple-600"
                  }`
                }
              >
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-between p-4 border-t border-purple-400">
          <img
            src="/src/assets/profile.jpeg"
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
    </>
  );
}

export default Sidebar;
