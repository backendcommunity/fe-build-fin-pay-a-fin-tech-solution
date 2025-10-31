import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

function EnterCode() {
  const location = useLocation();
  const email = location.state?.email || "your email";

  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCode = code.join("");
    console.log("Verification Code:", finalCode);
  };

  return (
    <div className="min-h-screen w-full bg-[#7105E9] flex items-center justify-center p-4">
      <div className="w-full max-w-[774px] bg-white rounded-[16px] p-6 md:p-10 shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <img
            src="../assets/message.svg"
            alt="Email Icon"
            className="w-12 h-12"
          />
        </div>

        <h1 className="text-3xl font-bold mb-4 text-[#222b45]">
          Check your email
        </h1>

        <p className="text-[#475467] mb-6">
          We sent a verification code to <br />
          <span className="font-semibold text-[#7105E9]">{email}</span>
        </p>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex justify-center text-8xl gap-4 mb-6 text-[#7105E9]">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-14 h-14 text-center text-2xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7105E9]"
                required
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full max-w-[363px] bg-[#7105E9] text-white p-3 mb-8 rounded-lg font-semibold hover:bg-purple-800 transition"
          >
            Continue
          </button>
          <div className="text-[#475467]">
            <p>
              Didn't receive the email?{" "}
              <span className="text-[#7105E9] font-semibold">
                Click to resend
              </span>
            </p>
          </div>
        </form>

        <div className="mt-6 flex justify-center items-center gap-2 text-[#475467] cursor-pointer">
          <img
            src="../assets/arrowBack.svg"
            alt="Back Icon"
            className="w-4 h-4"
          />
          <Link to="/" className="hover:underline">
            Back to Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EnterCode;
