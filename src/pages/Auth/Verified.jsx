

import { useLocation, Link } from "react-router-dom";

function Verified() {

  return (
    <div className="min-h-screen w-full bg-[#7105E9] flex items-center justify-center p-4">
      <div className="w-full max-w-[774px] bg-white rounded-[16px] p-6 md:p-10 shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <img src="/src/assets/check.svg" alt="Email Icon" className="w-12 h-12" />
        </div>

        <h1 className="text-3xl font-bold mb-4 text-[#222b45]">Email verified</h1>

        <p className="text-[#475467] mb-6">
          Your password has been successfully reset. <br />Click below to log in magically
        </p>

        <button className="w-full max-w-[363px] bg-[#7105E9] text-white p-3 mb-8 rounded-lg font-semibold hover:bg-purple-800 transition">
          Continue
        </button>
        <div className="text-[#475467]">
            <p>Didn't receive the email? <span className="text-[#7105E9] font-semibold">Click to resend</span></p>
        </div>
    
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

export default Verified;
