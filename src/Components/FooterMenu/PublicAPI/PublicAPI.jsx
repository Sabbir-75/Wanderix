import React from "react";
import { Cloud, Home, Lock, Server, Globe, Zap } from "lucide-react";
import Container from "../../../../../../Quiknest/quiknest-client/src/Components/Container/Container";
import apiBanner from "../../../assets/e5ee272c-dfe1-40e5-b66b-b0a36e815254.png"; // ✅ Replace with your own image
import { NavLink } from "react-router";

const PublicAPI = () => {
    return (
        <div>
            {/* Banner Section */}
            <div
                className="py-[150px] relative"
                style={{
                    backgroundImage: `url(${apiBanner})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            >
                <div className="max-w-2xl mx-auto px-4 py-6 absolute left-[40%] -bottom-4">
                    <nav className="flex items-center justify-center text-sm font-medium text-gray-600 space-x-2">
                        {/* Home Link */}
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
                            Public API
                        </span>
                    </nav>
                </div>
            </div>

            {/* Content Section */}
            <Container>
                <div className="max-w-3xl mx-auto px-6 py-10 bg-white">
                    <h2 className="text-5xl font-bold text-base-content mb-6 text-center">
                        Public <span className="text-secondary">API</span>
                    </h2>

                    <p className="mb-6 text-gray-600 leading-relaxed text-lg">
                        The <span className="font-semibold text-blue-500">Wanderix Public API</span> allows developers to access destination data, tour packages, and more to build custom travel applications or integrations.
                    </p>

                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                            <Cloud className="text-blue-500 w-5 h-5 mt-1" />
                            <span>
                                Access real-time <strong>tour availability, pricing, and locations</strong> via our RESTful API.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <Server className="text-green-500 w-5 h-5 mt-1" />
                            <span>
                                Our API is hosted on <strong>secure, scalable cloud infrastructure</strong> to ensure uptime and speed.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <Lock className="text-orange-500 w-5 h-5 mt-1" />
                            <span>
                                All requests require an <strong>API key</strong> and use <strong>HTTPS encryption</strong> to protect data.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <Zap className="text-purple-500 w-5 h-5 mt-1" />
                            <span>
                                Fast responses and caching for optimal <strong>developer experience</strong> and performance.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <Globe className="text-red-500 w-5 h-5 mt-1" />
                            <span>
                                Global support for <strong>international travel data</strong> including region-specific packages.
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

export default PublicAPI;
