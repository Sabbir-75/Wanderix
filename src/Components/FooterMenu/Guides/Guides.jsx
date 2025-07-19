import React from "react";
import { Compass, Home, MapPin, Airplay, Wrench, ThumbsUp } from "lucide-react";
import Container from "../../../../../../Quiknest/quiknest-client/src/Components/Container/Container";
import guideBanner from "../../../assets/new_storage2Fposts2FTypesOfTourGuides2_1703360225.webp"; // Replace with your own image
import { NavLink } from "react-router";

const Guides = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="py-[150px] relative"
        style={{
          backgroundImage: `url(${guideBanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
              Guides
            </span>
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <Container>
        <div className="max-w-3xl mx-auto px-6 py-10 bg-white">
          <h2 className="text-5xl font-bold text-base-content mb-6 text-center">
            User <span className="text-secondary">Guides</span>
          </h2>

          <p className="mb-6 text-gray-600 leading-relaxed text-lg">
            The <span className="font-semibold text-blue-500">Wanderix Guides</span> help travelers, tour operators, and partners make the most of our platform. Explore these step-by-step resources to simplify your experience.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <Compass className="text-blue-500 w-5 h-5 mt-1" />
              <span>
                <strong>Getting Started Guide</strong>: Learn how to sign up, create a traveler profile, and navigate the Wanderix dashboard.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin className="text-green-500 w-5 h-5 mt-1" />
              <span>
                <strong>Booking Process</strong>: Step-by-step instructions on searching, filtering, and confirming travel packages.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Airplay className="text-orange-500 w-5 h-5 mt-1" />
              <span>
                <strong>Virtual Tours & Reviews</strong>: How to preview destinations, read traveler feedback, and book with confidence.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Wrench className="text-purple-500 w-5 h-5 mt-1" />
              <span>
                <strong>Account Settings</strong>: Manage your personal info, notifications, and travel preferences easily.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <ThumbsUp className="text-red-500 w-5 h-5 mt-1" />
              <span>
                <strong>Best Practices</strong>: Tips on travel safety, responsible tourism, and how to get the best out of Wanderix.
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

export default Guides;
