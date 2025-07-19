import React from "react";
import { ShieldCheck, Home, User, Lock, RefreshCcw, Server, Link } from "lucide-react";
import Container from "../../../../../../Quiknest/quiknest-client/src/Components/Container/Container";
import privecyPolicy from "../../../assets/privacy-policy.jpg"
import { NavLink } from "react-router";

const PrivacyPolicy = () => {
    return (
        <div>
            <div>
                <div className="py-[150px]" style={{
                    backgroundImage: `url(${privecyPolicy})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}>
                    <div className="max-w-2xl mx-auto px-4 py-6">
                        <nav className="flex items-center text-sm font-medium text-gray-600 space-x-2">
                            {/* Home Button */}
                            <NavLink
                                to={"/"}
                                className="flex items-center px-3 py-1.5 bg-gradient-to-r from-secondary to-orange-400 text-white rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
                            >
                                
                                Home
                              
                            </NavLink>

                            {/* Divider */}
                            <span className="text-base-200 font-bold text-lg">››</span>

                            {/* Current Page */}
                            <span className="text-base-content font-semibold text-base tracking-wide">
                                Privacy Policy
                            </span>
                        </nav>
                    </div>
                </div>
            </div>
            <Container>
                {/* shadow-xl rounded-2xl border border-gray-200 */}
                <div className="max-w-3xl mx-auto px-6 py-10 bg-white">
                    <h2 className="text-5xl font-bold text-base-content mb-6 text-center">Privacy <span className="text-secondary">Policy</span></h2>

                    <p className="mb-6 text-gray-600 leading-relaxed text-lg">
                        At <span className="font-semibold text-blue-500">Wanderix</span>, we value your privacy. This policy outlines what personal information we collect, how we use it, and how we protect it when you use our website.
                    </p>

                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                            <User className="text-blue-500 w-5 h-5 mt-1" />
                            <span>
                                We collect data such as your <strong>name, email, phone number</strong>, and travel preferences during registration or booking.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <ShieldCheck className="text-green-500 w-5 h-5 mt-1" />
                            <span>
                                This data is used to <strong>process bookings, send updates</strong>, and improve our services.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <Lock className="text-orange-500 w-5 h-5 mt-1" />
                            <span>
                                We do not share your personal information with third parties unless required for service delivery.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <RefreshCcw className="text-purple-500 w-5 h-5 mt-1" />
                            <span>
                                You can request to <strong>update or delete your personal data</strong> at any time.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <Server className="text-red-500 w-5 h-5 mt-1" />
                            <span>
                                We implement <strong>industry-standard security measures</strong> to protect your data.
                            </span>
                        </li>
                    </ul>

                    <p className="mt-8 text-sm text-gray-400 text-center">
                        Last updated: <span className="italic">July 14, 2025</span>
                    </p>
                </div>

            </Container>
        </div >


    );
};

export default PrivacyPolicy;
