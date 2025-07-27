import React from 'react';
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';
import SectionName from '../../../Components/Share/HomeSection/HomeSection';

const AboutUs = () => {
    return (
        <section className="py-6 md:py-10 lg:py-16 px-4 md:px-20 bg-gradient-to-b from-white via-blue-50 to-white text-base-content">
            <div className="max-w-5xl mx-auto">
                <div className='text-center mb-4'>
                    <SectionName>About Us</SectionName>
                </div>

                <h1 className="text-5xl font-extrabold text-center mb-6">About <span className='text-secondary'>the</span> Developer</h1>

                <div className="bg-white shadow-lg border-l-4 border-primary rounded-xl p-6 md:flex items-center gap-8">
                    {/* Developer Photo */}
                    <img
                        src="https://i.ibb.co/XrJZTyvm/Picsart-25-01-08-23-45-19-640-Copy-removebg-preview.png" // replace with your actual image
                        alt="Md Sabbir Hossain"
                        className="w-40 h-40 object-cover rounded-full mx-auto md:mx-0"
                    />

                    {/* Info */}
                    <div className="mt-6 md:mt-0">
                        <h2 className="text-2xl font-bold">Md Sabbir Hossain</h2>
                        <p className="text-gray-700 mt-2">
                            I'm a passionate  MERN Stack Web Developer from Bangladesh. I built this Wanderix website as a tourism management system for Bangladesh, aiming to help travelers discover and explore beautiful destinations easily.
                        </p>
                        <p className="text-gray-700 mt-2">
                            So far, I have created <span className="font-semibold text-primary">7+ full-stack projects</span> including e-commerce, booking, and admin dashboards.
                        </p>

                        {/* Links */}
                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://github.com/Sabbir-75"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-black text-xl"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://sabbir-portfolio.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-700 text-xl"
                            >
                                <FaGlobe />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-sabbir-hossain-dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 text-xl"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Other Projects */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-4">Other Projects:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>
                            <a
                                href="https://camp-nest-client.web.app/"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CampNest – Summer Camp Booking Website
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://urban-hub-shop.web.app/"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                UrbanHub – E-commerce Fullstack Site
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://foodcrafts-bd.web.app/"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                FoodCrafts – Restaurant Menu & Orders
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
