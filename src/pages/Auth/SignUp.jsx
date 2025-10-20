import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify-email");
  };

  return (
    <div className="min-h-screen w-full bg-[#7105E9] flex items-center justify-center m-0 p-0">
      <div className="w-full max-w-[774px] bg-white rounded-[16px] p-6 md:p-10 shadow-lg">
        
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#7105e9]">
          FinPay
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2 text-[#475467]">
          Create a Secure Account
        </h2>
        <p className="text-center text-[#475467] mb-6 text-sm md:text-base">
          Welcome to the future of Savings & Investment
        </p>

        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="text-[#475467] grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div>
              <label className="block text-gray-700 mb-1">First Name*</label>
              <input
                type="text"
                required
                placeholder="Enter your first name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7105e9]"
              />
            </div>

            
            <div>
              <label className="block text-gray-700 mb-1">Last Name*</label>
              <input
                type="text"
                required
                placeholder="Enter your last name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7105e9]"
              />
            </div>

           
            <div>
              <label className="block text-gray-700 mb-1">Email Address*</label>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7105e9]"
              />
            </div>

           
            <div>
              <label className="block text-gray-700 mb-1">Phone Number*</label>
              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7105e9]"
              />
            </div>

            
            <div>
              <label className="block text-gray-700 mb-1">Password*</label>
              <input
                type="password"
                required
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7105e9]"
              />
            </div>

            
            <div>
              <label className="block text-gray-700 mb-1">Re-enter Password*</label>
              <input
                type="password"
                required
                placeholder="Re-enter password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7105e9]"
              />
            </div>
          </div>

          
          <p className="text-gray-500 text-xs md:text-sm mt-2">
            *Must be at least 8 characters
          </p>

          
          <button
            type="submit"
            className="w-full bg-[#7105e9] text-white p-3 rounded-lg font-semibold cursor-pointer hover:bg-purple-800 transition mt-4"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
