import React, { useState } from "react";
import { X, ArrowRight, ChevronDown } from "lucide-react";

const NewCardModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [cardName, setCardName] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardBrand, setCardBrand] = useState("");
  const [cardFee, setCardFee] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [totalAmount, setTotalAmount] = useState("₦0.00");

  if (!isOpen) return null;

  const handleContinue = () => setStep(2);
  const handleBack = () => (step === 1 ? onClose() : setStep(1));
  const handleSubmit = () => {
    alert("Card successfully created!");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 text-gray-600"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold">
              {step === 1 ? "New Card" : "Card Payment"}
            </h2>
            <span className="text-purple-600 text-xs border border-purple-500 px-2 py-0.5 rounded-full">
              Step {step}/2
            </span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 1 ? (
          <>
            <p className="text-gray-500 text-sm mb-6">
              Please note that the funds in this card cannot be withdrawn
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Name*
                </label>
                <input
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="Enter Card Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Type*
                </label>
                <select
                  value={cardType}
                  onChange={(e) => setCardType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                >
                  <option value="">Choose Card Type</option>
                  <option value="virtual">Virtual</option>
                  <option value="physical">Physical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Brand*
                </label>
                <select
                  value={cardBrand}
                  onChange={(e) => setCardBrand(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                >
                  <option value="">Choose Card Brand</option>
                  <option value="visa">Visa</option>
                  <option value="mastercard">Mastercard</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleContinue}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Continue <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={handleBack}
              className="mt-4 text-purple-700 font-semibold hover:underline text-sm"
            >
              &lt; Go back
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-500 text-sm mb-6">
              Review your card payment details below.
            </p>

            <div className="space-y-5">
              <div>
                <button className="w-full border border-gray-300 rounded-lg px-4 py-3 flex justify-between items-center font-medium text-gray-700">
                  Your Card Fee <span className="text-gray-500">₦1,000</span>
                </button>
              </div>

              <div>
                <div className="w-full border border-gray-300 rounded-lg px-4 py-3 flex justify-between items-center font-medium text-gray-700">
                  <span>Custom Card Fee</span>
                  <input
                    type="number"
                    value={cardFee}
                    onChange={(e) => setCardFee(e.target.value)}
                    placeholder="₦"
                    className="w-20 text-right outline-none bg-transparent"
                  />
                </div>
              </div>

              <div>
                <button className="w-full border border-gray-300 rounded-lg px-4 py-3 flex justify-between items-center font-medium text-gray-700">
                  <span>Debit From</span>
                  <div className="flex items-center gap-2">
                    <span>{selectedWallet || "Select Wallet"}</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </button>
              </div>

              <div className="border border-gray-300 rounded-lg px-4 py-3 flex justify-between items-center font-semibold">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Submit
            </button>

            <button
              onClick={handleBack}
              className="mt-4 text-purple-700 font-semibold hover:underline text-sm"
            >
              &lt; Back
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NewCardModal;
