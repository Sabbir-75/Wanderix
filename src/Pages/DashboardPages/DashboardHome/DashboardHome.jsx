import React from "react";
import USeRole from "../../../Hooks/UseRole/USeRole";

const DashboardHome = () => {
    const { role } = USeRole()
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 px-4 py-10">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full text-center border border-gray-200">
                <h1 className="text-3xl font-bold text-primary mb-4">Welcome to Wanderix Dashboard</h1>

                {role === "admin" && (
                    <>
                        <p className="text-lg text-gray-700 mb-2">You are logged in as <span className="font-semibold text-blue-600">Admin</span>.</p>
                        <p className="text-gray-600">You can manage users, destinations, bookings, and system settings.</p>
                    </>
                )}

                {role === "guide" && (
                    <>
                        <p className="text-lg text-gray-700 mb-2">You are logged in as a <span className="font-semibold text-green-600">Tour Guide</span>.</p>
                        <p className="text-gray-600">You can manage your profile, accept tour requests, and update your availability.</p>
                    </>
                )}

                {role === "tourist" && (
                    <>
                        <p className="text-lg text-gray-700 mb-2">You are logged in as a <span className="font-semibold text-purple-600">Tourist</span>.</p>
                        <p className="text-gray-600">You can book tours, view your bookings, and explore new destinations.</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default DashboardHome;
