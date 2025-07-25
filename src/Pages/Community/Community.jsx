import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { useNavigate } from 'react-router';
import { useAuth } from '../../Hooks/UseAuth/UseAuth';
import SectionName from '../../Components/Share/HomeSection/HomeSection';

const Community = () => {
    const { user } = useAuth(); // ✅ your auth context
    const navigate = useNavigate();

    const handleShare = () => {
        navigate('/login');
    };

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
        {
            id: 5,
            title: "Sundarbans Adventure",
            location: "Khulna",
            user: "Sabbir",
            description: "Exploring the world's largest mangrove forest was a dream come true!",
            image: "https://i.ibb.co/gLmHsjjN/2742993.webp",
            url: "https://wanderix.com/story/1"
        },
        {
            id: 6,
            title: "Srimangal Tea Trails",
            location: "Khulna",
            user: "Lubna",
            description: "The aroma of tea leaves and peaceful nature was unforgettable.",
            image: "https://i.ibb.co/zTz9VGWn/6-Sylhet.webp",
            url: "https://wanderix.com/story/2"
        },
    ];

    return (
        <section className="px-4 md:px-10 py-6 md:py-10 lg:py-16 bg-gray-50 min-h-screen">

            <div className="text-center mb-12">
                <div className='text-center mb-4'>
                    <SectionName>Community</SectionName>
                </div>
                <h2 className="text-5xl font-extrabold text-base-content mb-2">Tourist <span className='text-secondary'>Community</span> Stories</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Real experiences shared by our travelers from all over Bangladesh.
                </p>
            </div>


            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {stories.map((story) => (
                    <div
                        key={story.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 space-y-3">
                            <h3 className="text-xl font-bold text-gray-800">{story.title}</h3>
                            <p className="text-sm text-gray-500">📍 {story.location}</p>
                            <p className="text-gray-700 text-sm">{story.description}</p>

                            <div className="flex items-center gap-2 text-sm text-blue-600">
                                <FaUserCircle /> <span>{story.user}</span>
                            </div>

                            <div>
                                {user ? (
                                    <FacebookShareButton url={story.url} quote={story.title}>
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
        </section>
    );
};

export default Community;
