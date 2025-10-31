import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import QuickActionModal from "../components/QuickActionModal";
import { ChevronDown, Plus, ArrowRight } from "lucide-react";

function AddRecipientModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-10 backdrop-brightness-50 z-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h1 className="flex items-center gap-2 text-xl md:text-3xl font-bold text-gray-500 text-center md:text-left flex-1">
          Customer's Information
          <img src="../assets/Button.svg" alt="Icon" className="w-20 h-20" />
        </h1>
        <p className="mb-6 text-gray-700">Banking Information</p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Currency*
          </label>
          <button className="flex items-center justify-between w-full border border-gray-300 rounded-lg px-4 py-3 text-left hover:border-purple-400 transition">
            <div className="flex items-center gap-2">
              <img
                src="../assets/ngn.svg"
                alt="Nigeria"
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-gray-700 font-medium">
                Nigerian Naira (₦)
              </span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recipient Type*
          </label>
          <button className="flex items-center justify-between w-full border border-gray-300 rounded-lg px-4 py-3 text-left hover:border-purple-400 transition">
            <span className="text-gray-600">Individual</span>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bank Name*
          </label>
          <button className="flex items-center justify-between w-full border border-gray-300 rounded-lg px-4 py-3 text-left hover:border-purple-400 transition">
            <span className="text-gray-600">Bank name</span>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account Number*
          </label>
          <button className="flex items-center justify-between w-full border border-gray-300 rounded-lg px-4 py-3 text-left hover:border-purple-400 transition">
            <span className="text-gray-600">Account number</span>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account Name*
          </label>
          <button className="flex items-center justify-between w-full border border-gray-300 rounded-lg px-4 py-3 text-left hover:border-purple-400 transition">
            <span className="text-gray-600">Account name</span>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <Link
          to="/add-recipient"
          onClick={onClose}
          className="mt-6 w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </Link>
        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="text-purple-700 font-semibold hover:underline"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

function DirectBank({ user }) {
  const [sidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Convert Funds");
  const [showQuickView, setShowQuickView] = useState(false);
  const [showAddRecipient, setShowAddRecipient] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      <Sidebar
        user={user}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        sidebarOpen={sidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full md:w-auto relative">
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
                <img src="../assets/chevron-down.svg" alt="Dropdown" />
                Quick Action
              </button>
              <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50">
                <img
                  src="../assets/bell.svg"
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

        <AddRecipientModal
          isOpen={showAddRecipient}
          onClose={() => setShowAddRecipient(false)}
        />

        <main className="flex-1 flex items-center justify-center px-4 py-6 overflow-y-auto bg-gray-50">
          <div className="relative bg-white w-full max-w-[607px] rounded-xl shadow-md flex flex-col items-start p-6">
            <div className="absolute top-0 left-0 w-full text-gray-800 border-b border-gray-300 bg-gray-100 py-3 px-6 text-left font-semibold rounded-t-xl">
              Who are you sending to
            </div>
            <div className="h-12"></div>

            <button className="flex items-center justify-between w-full border border-gray-300 rounded-lg p-4 mb-6 cursor-pointer transition">
              <span className="font-semibold text-gray-500">
                Choose Recipient
              </span>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </button>
            <div className="w-full">
              <div className="bg-gray-100 px-4 py-2 rounded-t-lg font-semibold text-gray-500">
                <button
                  className="flex items-center gap-3 px-4 py-3 w-full text-left cursor-pointer rounded-lg transition"
                  onClick={() => setShowAddRecipient(true)}
                >
                  <Plus className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-600 font-medium">
                    Add new recipient
                  </span>
                </button>
              </div>
              <button
                className="flex items-center gap-3 px-4 py-3 w-full text-left cursor-pointer rounded-lg transition"
                onClick={() => console.log("Recipient clicked")}
              >
                <img
                  src="../assets/ngn.svg"
                  alt="Nigeria"
                  className="w-6 h-6"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">
                    David Olumuyiwa
                  </span>
                  <span className="text-sm text-gray-500">0123456789</span>
                  <span className="text-sm text-gray-500">Access Bank</span>
                </div>
              </button>
            </div>
            <Link
              to="/review-transfer"
              className="flex items-center justify-center gap-2 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold cursor-pointer mt-6 hover:bg-purple-700 transition"
            >
              Continue
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="w-full flex justify-center">
              <Link
                to="/send-money"
                className="mt-4 text-purple-700 font-semibold hover:underline"
              >
                Back to Send Money
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DirectBank;
