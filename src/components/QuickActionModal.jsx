import React from "react";
import { Link } from "react-router-dom";

function QuickActionModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end text-gray-700 bg-black/40"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-[216px] h-[255.5px] shadow-lg rounded-lg mt-6 mr-6 transform transition-transform duration-300 translate-x-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="flex flex-col mt-8 divide-y divide-gray-300">
          <Link
            to="/send-money"
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
          >
            <img
              src="../assets/Icon-5.svg"
              className="w-5 h-5"
              alt="Send Money"
            />
            <span>Send Money</span>
          </Link>

          <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100">
            <img
              src="../assets/switch-horizontal-02.svg"
              className="w-5 h-5"
              alt="Fund Wallet"
            />
            <span>Fund Wallet</span>
          </button>

          <Link
            to="/convert-funds"
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
          >
            <img
              src="../assets/refresh-cw-03.svg"
              className="w-5 h-5"
              alt="Convert Funds"
            />
            <span>Convert Funds</span>
          </Link>

          <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100">
            <img
              src="../assets/file-05 (2).svg"
              className="w-5 h-5"
              alt="Create Invoice"
            />
            <span>Create Invoice</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuickActionModal;
