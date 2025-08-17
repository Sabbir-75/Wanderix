import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { Link, useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../../Hooks/UseAuth/UseAuth";
import SectionName from "../../Share/HomeSection/HomeSection";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TouristStory = () => {
    const axiosSecure = UseAxiosSecure()
    const navigate = useNavigate();
    const { user } = useAuth()
    const handleShare = () => {
        if (!user) {
            navigate("/login");
        }
    };

    const { data: stories = [] } = useQuery({
        queryKey: ['candidates'],
        queryFn: async () => {
            const res = await axiosSecure.get('/stories');
            return res.data;
        }
    });

    return (
        <section className="max-w-7xl mx-auto py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-12 bg-gradient-to-br">
            <div className="text-center mb-12">
                <SectionName>Stories</SectionName>
                <h2 className="text-5xl font-bold mt-2 mb-3">Tourist <span className='text-secondary'> Story</span></h2>
                <p className="text-gray-600 max-w-xl mx-auto text-lg">
                    Read what our explorers have experienced across beautiful tourist place in Bangladesh.
                </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {stories.map((story) => (
                    <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                        <img src={story.images[0]} alt={story.images[0]} className="w-full h-48 object-cover" />
                        <div className="p-5 space-y-3">
                            <h3 className="text-xl font-bold text-gray-800">{story.title}</h3>
                            <p className="text-sm text-gray-500">📍 {story.location}</p>
                            <p className="text-gray-700 text-sm">{story.description}</p>
                            <div className="flex items-center gap-2 text-sm text-blue-600">
                                <FaUserCircle /> <span>{story?.email}</span>
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
                <Link to={"/community"} className="relative inline-flex items-center rounded-lg justify-center px-2.5 md:px-3.5 py-1.5 md:py-2.5 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="relative flex text-sm md:text-base lg:text-lg font-semibold items-center gap-2">
                        All Stories <BsArrowUpRightCircleFill />
                    </span>
                </Link>
            </div>
        </section>
    );
};

export default TouristStory;
