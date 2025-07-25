import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { FaUserCircle } from "react-icons/fa";

const TourGuideProfilePage = () => {
    const { id } = useParams();
    const [guide, setGuide] = useState(null);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        // Fetch guide info
        fetch(`/api/guides/${id}`)
            .then((res) => res.json())
            .then((data) => setGuide(data));

        // Fetch stories added by this guide
        fetch(`/api/stories?guideId=${id}`)
            .then((res) => res.json())
            .then((data) => setStories(data));
    }, [id]);

    if (!guide) return <p className="text-center mt-10">Loading guide info...</p>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            {/* Guide Info Section */}
            <div className="bg-white shadow-lg rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center gap-6">
                <img
                    src={guide.photo}
                    alt={guide.name}
                    className="w-40 h-40 object-cover rounded-full border-4 border-blue-500"
                />
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">{guide.name}</h1>
                    <p className="text-blue-600 font-medium mt-1">Expertise: {guide.expertise}</p>
                    <p className="text-gray-600">Experience: {guide.experience} years</p>
                    <p className="text-gray-700 mt-3 max-w-xl">{guide.bio || "No description available."}</p>
                </div>
            </div>

            {/* Stories Section */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Stories by {guide.name}</h2>
            {stories.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stories.map((story) => (
                        <div
                            key={story._id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                        >
                            <img src={story.images[0]} alt={story.title} className="w-full h-48 object-cover" />
                            <div className="p-5 space-y-2">
                                <h3 className="text-xl font-bold text-gray-800">{story.title}</h3>
                                <p className="text-sm text-gray-500">📍 {story.location}</p>
                                <p className="text-gray-700 text-sm line-clamp-3">{story.description}</p>
                                <div className="flex items-center gap-2 text-sm text-blue-600">
                                    <FaUserCircle /> <span>{guide.name}</span>
                                </div>
                                <FacebookShareButton url={window.location.href} quote={story.title}>
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600">No stories shared by this guide yet.</p>
            )}
        </div>
    );
};

export default TourGuideProfilePage;
