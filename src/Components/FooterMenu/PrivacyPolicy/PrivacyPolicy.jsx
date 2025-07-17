import React from "react";
import { BsFillSignIntersectionFill } from "react-icons/bs";
import { GlobeIcon } from 'lucide-react';
import SectionName from "../../SectionName/SectionName";
import Container from "../../../../../../Quiknest/quiknest-client/src/Components/Container/Container";
import privecyPolicy from "../../../assets/privacy-policy.jpg"

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
                    hello
                </div>
            </div>
            <Container>

                <p className="mb-4 text-gray-700">
                    At Wanderix, we value your privacy. This policy outlines what personal information we collect, how we use it, and how we protect it when you use our website.
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>We collect data such as your name, email, phone number, and travel preferences during registration or booking.</li>
                    <li>This data is used to process bookings, send updates, and improve our services.</li>
                    <li>We do not share your personal information with third parties unless required for service delivery.</li>
                    <li>You can request to update or delete your personal data at any time.</li>
                    <li>We implement industry-standard security measures to protect your data.</li>
                </ul>

                <p className="mt-6 text-sm text-gray-500">Last updated: July 14, 2025</p>

            </Container>
        </div >


    );
};

export default PrivacyPolicy;
