import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';

const GuideProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [guide, setGuide] = useState(null);
    const [loading, setLoading] = useState(true);
    const useSecure = UseAxiosSecure()

    useEffect(() => {
        useSecure.get(`/users/details/${id}`)
            .then(res => {
                setGuide(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch guide:", err);
                setLoading(false);
            });
    }, [id, useSecure]);

    if (loading) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    if (!guide) {
        return (
            <div className="flex items-center justify-center h-screen text-center">
                <div>
                    <h2 className="text-2xl font-semibold text-red-500">No profile data found!</h2>
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-4 btn btn-outline btn-accent"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-xl mt-10">
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                    src={guide.photo}
                    alt={guide.name}
                    className="w-32 h-32 rounded-full border-4 border-accent object-cover"
                />
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">{guide.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">Role: <span className="text-primary font-bold">{guide.role}</span></p>
                    <p className="text-sm text-gray-500">Email: <span className="text-blue-600 underline">{guide.email}</span></p>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                    <p className="text-sm text-gray-600">Expertise</p>
                    <h3 className="text-lg font-semibold">{guide.expertise}</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                    <p className="text-sm text-gray-600">Experience</p>
                    <h3 className="text-lg font-semibold">{guide.experience} years</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                    <p className="text-sm text-gray-600">Joined on</p>
                    <h3 className="text-lg font-semibold">{new Date(guide.created_at).toLocaleDateString()}</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                    <p className="text-sm text-gray-600">Last Login</p>
                    <h3 className="text-lg font-semibold">{new Date(guide.last_login).toLocaleString()}</h3>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    className="btn btn-primary"
                    onClick={() => navigate('/')}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default GuideProfile;
