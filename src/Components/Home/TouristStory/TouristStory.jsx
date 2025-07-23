import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { NavLink, useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../../Hooks/UseAuth/UseAuth";
import SectionName from "../../Share/HomeSection/HomeSection";


const stories = [
    {
        id: 1,
        title: "Sundarbans Adventure",
        location: "Khulna",
        user: "Sabbir",
        description: "Exploring the world's largest mangrove forest was a dream come true!",
        image: "https://i.ibb.co/gLmHsjjN/2742993.webp",
        url: "https://wanderix.com/story/1"
    },
    {
        id: 2,
        title: "Srimangal Tea Trails",
        location: "Khulna",
        user: "Lubna",
        description: "The aroma of tea leaves and peaceful nature was unforgettable.",
        image: "https://i.ibb.co/zTz9VGWn/6-Sylhet.webp",
        url: "https://wanderix.com/story/2"
    },
    {
        id: 3,
        title: "Cox's Bazar Sunset",
        location: "Cox's Bazar",
        user: "jerin",
        description: "The sunset on the longest sea beach in the world is magical!",
        image: "https://i.ibb.co/GfFDQDBx/best-place-to-visit-in-russia.jpg",
        url: "https://wanderix.com/story/3"
    },
    {
        id: 4,
        title: "Bandarban Hills",
        location: "Bandarban",
        user: "Tuba",
        description: "The mountains whispered peace into my soul.",
        image: "https://i.ibb.co/h1LjvGbm/Bangladesh-3.jpg",
        url: "https://wanderix.com/story/4"
    },
];

const TouristStory = () => {
    const navigate = useNavigate();
    const { user } = useAuth()
    const handleShare = () => {
        if (!user) {
            navigate("/login");
        }
    };

    return (
        <section className="py-16 px-4 md:px-10 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
            <div className="text-center mb-12">
                <SectionName>Stories</SectionName>
                <h2 className="text-5xl font-bold mt-2 mb-3">Tourist <span className='text-secondary'> Story</span></h2>
                <p className="text-gray-600 max-w-xl mx-auto text-lg">
                    Read what our explorers have experienced across beautiful tourist place in Bangladesh.
                </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 ">
                {stories.map((story) => (
                    <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                        <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
                        <div className="p-5 space-y-3">
                            <h3 className="text-xl font-bold text-gray-800">{story.title}</h3>
                            <p className="text-sm text-gray-500">📍 {story.location}</p>
                            <p className="text-gray-700 text-sm">{story.description}</p>
                            <div className="flex items-center gap-2 text-sm text-blue-600">
                                <FaUserCircle /> <span>{story.user}</span>
                            </div>
                            <div>
                                {user ? (
                                    <FacebookShareButton url={story.url}>
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                ) : (
                                    <button
                                        onClick={handleShare}
                                        className="text-sm text-blue-500 underline hover:text-blue-700"
                                    >
                                        Login to Share
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <NavLink to={"/allstories"} className="relative inline-flex items-center rounded-lg justify-center px-2.5 md:px-3.5 py-1.5 md:py-2.5 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="relative flex text-sm md:text-base lg:text-lg font-semibold items-center gap-2">
                        All Stories
                    </span>
                </NavLink>
            </div>
        </section>
    );
};

export default TouristStory;
