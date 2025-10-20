import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmail = identifier.includes("@");

    console.log({
      loginType: isEmail ? "email" : "phone",
      identifier,
      password,
    });

    // Call your backend API here
  };

  return (
    <div className="min-h-screen w-full bg-[#7105E9] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white rounded-[16px] p-6 sm:p-8 md:p-10 shadow-lg">
        {/* Logo / Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-[#7105e9]">
          FinPay
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-2 text-[#475467]">
          Login to your account
        </h2>
        <p className="text-center text-[#475467] mb-6 text-xs sm:text-sm md:text-base">
          Securely login to your FinPay account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
          {/* Identifier */}
          <div>
            <label className="block text-left text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Email or Phone Number*
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Enter email or phone number"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#7105e9]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-left text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Password*
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#7105e9]"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#7105E9] text-white py-3 rounded-lg mb-6 font-semibold text-sm sm:text-base hover:bg-purple-800 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="flex justify-center items-center text-center">
          <Link
            to="/"
            className="text-[#7105e9] text-sm sm:text-base hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
