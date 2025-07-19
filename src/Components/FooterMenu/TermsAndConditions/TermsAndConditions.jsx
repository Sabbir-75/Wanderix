import React from "react";
import { FileText, Home, ShieldCheck, RefreshCcw, XCircle, AlertTriangle, Landmark } from "lucide-react";
import Container from "../../../../../../Quiknest/quiknest-client/src/Components/Container/Container";
import termsBanner from "../../../assets/terms-and-condition-banner.jpg"
import { NavLink } from "react-router";

const TermsAndConditions = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="py-[150px]"
                style={{
                    backgroundImage: `url(${termsBanner})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}>
                <div className="max-w-xl mx-auto px-4 py-6">
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
                        <span className="text-base-100 font-semibold text-base tracking-wide">
                            Terms & Conditions
                        </span>
                    </nav>
                </div>
            </div>

            {/* Main Content Section */}
            <Container>
                <div className="max-w-3xl mx-auto px-6 py-10 bg-white">
                    <h2 className="text-5xl font-bold text-base-content mb-6 text-center">
                        Terms <span className="text-secondary">& Conditions</span>
                    </h2>

                    <p className="mb-6 text-gray-600 leading-relaxed text-lg">
                        By using <span className="font-semibold text-blue-500">Wanderix</span>, you agree to the following terms and conditions. Please read them carefully before using our platform or booking services.
                    </p>

                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                            <FileText className="text-blue-500 w-5 h-5 mt-1" />
                            <span>
                                Wanderix is a <strong>tourism management system</strong> that allows users to browse and book travel services.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <ShieldCheck className="text-green-500 w-5 h-5 mt-1" />
                            <span>
                                Users must use Wanderix <strong>responsibly and legally</strong>. Any misuse may result in account suspension.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <RefreshCcw className="text-purple-500 w-5 h-5 mt-1" />
                            <span>
                                Bookings can be <strong>canceled or modified</strong> based on the specific tour operator's policy.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <AlertTriangle className="text-yellow-500 w-5 h-5 mt-1" />
                            <span>
                                Wanderix is not liable for <strong>losses or delays</strong> caused by third-party service providers.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <Landmark className="text-orange-500 w-5 h-5 mt-1" />
                            <span>
                                All users must <strong>abide by local laws</strong> while using services booked through our platform.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-5 h-5 mt-1" />
                            <span>
                                Wanderix reserves the right to <strong>update or change these terms</strong> at any time without prior notice.
                            </span>
                        </li>
                    </ul>

                    <p className="mt-8 text-sm text-gray-400 text-center">
                        Last updated: <span className="italic">July 17, 2025</span>
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default TermsAndConditions;
