

import { useLocation, Link } from "react-router-dom";

function VerifyEmail() {
  const location = useLocation();
  const email = location.state?.email || "your email";

  return (
    <div className="min-h-screen w-full bg-[#7105E9] flex items-center justify-center p-4">
      <div className="w-full max-w-[774px] bg-white rounded-[16px] p-6 md:p-10 shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <img src="/src/assets/message.svg" alt="Email Icon" className="w-12 h-12" />
        </div>

        <h1 className="text-3xl font-bold mb-4 text-[#222b45]">Check your email</h1>

        <p className="text-[#475467] mb-6">
          We sent a verification code to <br />
          <span className="font-semibold text-[#7105E9]">{email}</span>
        </p>

        <button className="w-full max-w-[363px] bg-[#7105E9] text-white p-3 rounded-lg font-semibold hover:bg-purple-800 transition">
          Enter code manually
        </button>

    
        <div className="mt-6 flex justify-center items-center gap-2 text-[#475467] cursor-pointer">
          <img src="/src/assets/arrowBack.svg" alt="Back Icon" className="w-4 h-4" />
          <Link to="/" className="hover:underline">
            Back to Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
