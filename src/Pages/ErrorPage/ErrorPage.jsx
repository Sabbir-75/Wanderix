import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-yellow-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-red-600 mb-4 drop-shadow-lg">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link to="/">
          <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out">
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;