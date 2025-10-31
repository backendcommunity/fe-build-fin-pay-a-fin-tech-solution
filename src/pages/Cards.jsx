import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NewCardModal from "../components/NewCardModal";
import QuickActionModal from "../components/QuickActionModal";

const Cards = () => {
  const [sidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Cards");
  const [showNewCardModal, setShowNewCardModal] = useState(false);
  const [showQuickAction, setShowQuickAction] = useState(false);

  return (
    <div className="flex bg-gray-50 h-screen">
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        sidebarOpen={sidebarOpen}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "md:ml-73" : "ml-0"
        }`}
      >
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-10">
          <h1 className="text-xl md:text-3xl font-bold text-gray-500 flex-1 text-center md:text-left">
            Cards
          </h1>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setShowQuickAction(true)}
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                <img
                  src="/src/assets/chevron-down.svg"
                  alt="Dropdown"
                  className="w-4 h-4"
                />
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
                src="/src/assets/chevron-down.svg"
                alt="Quick"
                className="w-5 h-5"
              />
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-md mx-auto">
            <div className="border-b pb-3 mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Cards</h2>
            </div>

            <div className="text-center">
              <img
                src="/src/assets/cardImg.svg"
                alt="Card"
                className="w-full rounded-xl object-cover"
              />
            </div>

            <div className="flex justify-center mt-6">
              <button
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
                onClick={() => setShowNewCardModal(true)}
              >
                <img
                  src="/src/assets/cards.svg"
                  alt="Add"
                  className="w-5 h-5"
                />
                Create New Card
              </button>
            </div>
          </div>
        </main>

        <QuickActionModal
          show={showQuickAction}
          isOpen={showQuickAction}
          onClose={() => setShowQuickAction(false)}
        />

        <NewCardModal
          isOpen={showNewCardModal}
          onClose={() => setShowNewCardModal(false)}
        />
      </div>
    </div>
  );
};

export default Cards;
