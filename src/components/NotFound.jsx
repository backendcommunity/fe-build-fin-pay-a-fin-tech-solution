
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-[#7105E9] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="bg-[#7105E9] text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
