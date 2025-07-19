import React from "react";
import { BookOpenText, Home, ListChecks, Code2, Plug, AlertCircle } from "lucide-react";
import Container from "../../../../../../Quiknest/quiknest-client/src/Components/Container/Container";
import documentationBanner from "../../../assets/blog-tt-process-documentation.jpeg"; // ✅ Use your own image
import { NavLink } from "react-router";

const Documentation = () => {
    return (
        <div>
            {/* Banner Section */}
            <div
                className="py-[150px] relative"
                style={{
                    backgroundImage: `url(${documentationBanner})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            >
                <div className="max-w-2xl mx-auto px-4 py-6 absolute left-[40%] -bottom-4">
                    <nav className="flex items-center justify-center text-sm font-medium text-gray-600 space-x-2">
                        <NavLink
                            to={"/"}
                            className="flex items-center px-3 py-1.5 bg-gradient-to-r from-secondary to-orange-400 text-white rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
                        >
                            Home
                        </NavLink>

                        <span className="text-base-200 font-bold text-lg">››</span>

                        <span className="text-base-content font-semibold text-base tracking-wide">
                            Documentation
                        </span>
                    </nav>
                </div>
            </div>

            {/* Content Section */}
            <Container>
                <div className="max-w-3xl mx-auto px-6 py-10 bg-white">
                    <h2 className="text-5xl font-bold text-base-content mb-6 text-center">
                        Developer <span className="text-secondary">Documentation</span>
                    </h2>

                    <p className="mb-6 text-gray-600 leading-relaxed text-lg">
                        The <span className="font-semibold text-blue-500">Wanderix Developer Documentation</span> provides all the resources needed to integrate, test, and launch applications using our Public API and platform tools.
                    </p>

                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                            <BookOpenText className="text-blue-500 w-5 h-5 mt-1" />
                            <span>
                                Explore <strong>getting started guides, API references</strong>, and endpoint explanations.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <Code2 className="text-green-500 w-5 h-5 mt-1" />
                            <span>
                                See <strong>sample code</strong> for JavaScript, React, and backend integration with Node.js.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <Plug className="text-purple-500 w-5 h-5 mt-1" />
                            <span>
                                Learn how to <strong>authenticate with API keys</strong> and make secure requests.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <ListChecks className="text-orange-500 w-5 h-5 mt-1" />
                            <span>
                                Understand our <strong>rate limits, pagination</strong>, and data structures.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <AlertCircle className="text-red-500 w-5 h-5 mt-1" />
                            <span>
                                Read about <strong>error codes, handling failures</strong>, and troubleshooting common issues.
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

export default Documentation;
