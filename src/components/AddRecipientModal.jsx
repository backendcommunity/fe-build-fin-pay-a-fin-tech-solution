function AddRecipientModal({
  isOpen,
  onClose,
  recipientStep,
  setRecipientStep,
}) {
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

        {recipientStep === 1 && (
          <>
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

            <button
              onClick={() => setRecipientStep(2)}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Continue
              <ArrowRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Step 2: Customer Info */}
        {recipientStep === 2 && (
          <>
            <h1 className="flex items-center gap-2 text-xl font-bold text-gray-500 mb-2">
              Customer's Information
              <img
                src="../assets/Button-1.svg"
                alt="Icon"
                className="w-8 h-8"
              />
            </h1>
            <p className="mb-6 text-gray-700">Banking Information</p>

            {/* Country */}
            <div className="mb-4">
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
            </div>

            <button className="mt-6 w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              + Save
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="mt-4 text-center">
              <button
                onClick={() => setRecipientStep(1)} // 👈 go back to step 1
                className="text-purple-700 font-semibold hover:underline"
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AddRecipientModal;
