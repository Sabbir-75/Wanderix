import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { useNavigate } from 'react-router';
import { useAuth } from '../../Hooks/UseAuth/UseAuth';
import SectionName from '../../Components/Share/HomeSection/HomeSection';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure/UseAxiosSecure';
import Container from '../../Components/Container/Container';

const Community = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = UseAxiosSecure()

    const handleShare = () => {
        navigate('/login');
    };

    const { data: stories = [] } = useQuery({
        queryKey: ['candidates'],
        queryFn: async () => {
            const res = await axiosSecure.get('/stories');
            return res.data;
        }
    });

    return (
        <Container>
            <div className="py-12 md:py-16 lg:py-24 min-h-screen">

                <div className="text-center mb-12">
                    <div className='text-center mb-4'>
                        <SectionName>Community</SectionName>
                    </div>
                    <h2 className="text-5xl font-extrabold text-base-content mb-2">Tourist <span className='text-secondary'>Community</span> Stories</h2>
                    <p className="text-base-content/65 text-lg max-w-2xl mx-auto">
                        Real experiences shared by our travelers from all over Bangladesh.
                    </p>
                </div>


                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {stories.map((story) => (
                        <div key={story.id} className="bg-base-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <img src={story.images[0]} alt={story.images[0]} className="w-full h-48 object-cover" />
                            <div className="p-5 space-y-3">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-xl font-bold text-base-content">{story.title}</h3>
                                    <p className="text-sm text-base-content/55">📍 {story.location}</p>
                                </div>
                                <p className="text-base-content/70 text-sm">{story.description}</p>
                                <div className="flex items-center gap-2 text-sm text-blue-600">
                                    <FaUserCircle /> <span>{story?.email}</span>
                                </div>
                                <div>
                                    {user ? (
                                        <FacebookShareButton className="flex items-center gap-3" url={story.url}>
                                            Share To
                                            <FacebookIcon size={28} round />
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
            </div>
        </Container>
    );
};

export default Community;
