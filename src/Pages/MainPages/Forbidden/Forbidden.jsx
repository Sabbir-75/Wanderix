import React from 'react';
import { Link } from 'react-router';

const Forbidden = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-orange-100 flex flex-col items-center justify-center px-4">
            <h1 className="text-8xl font-extrabold text-yellow-600 mb-2 drop-shadow-md">403</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Access Forbidden</h2>
            <p className="text-gray-600 max-w-md text-center mb-6">
                Sorry, you don’t have permission to access this page. Please login with the correct account or return home.
            </p>

            <Link to="/">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                    🔒 Back to Home
                </button>
            </Link>
        </div>
    );
};

export default Forbidden;

