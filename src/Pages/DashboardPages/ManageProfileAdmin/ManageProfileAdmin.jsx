import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';

const ManageProfileAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', photo: '' });

    // Fetch admin stats
    const { data: stats = {} } = useQuery({
        queryKey: ['adminStats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/stats');
            return res.data;
        }
    });

    const { data: profile = {}, refetch } = useQuery({
        queryKey: ['admin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data;
        }
    });

    // Handle Profile Update
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosSecure.put(`/users/update/${user?.email}`, {
                name: formData.name,
                photo: formData.photo,
            });
            if (res.data.modifiedCount) {
                toast.success("Profile updated");
                setShowModal(false);
                refetch()
                document.getElementById('edit-profile-modal').checked = false;
            }
        } catch (err) {
            toast.error("Update failed", err);
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-10">Welcome, {user?.displayName} 🎉</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-blue-100 p-6 rounded-xl shadow text-center">
                    <h3 className="text-lg font-semibold">Total Payments</h3>
                    <p className="text-2xl font-bold text-blue-800">৳ {stats.totalPayment || 0}</p>
                </div>
                <div className="bg-green-100 p-6 rounded-xl shadow text-center">
                    <h3 className="text-lg font-semibold">Tour Guides</h3>
                    <p className="text-2xl font-bold text-green-800">{stats.totalTourGuides || 0}</p>
                </div>
                <div className="bg-yellow-100 p-6 rounded-xl shadow text-center">
                    <h3 className="text-lg font-semibold">Packages</h3>
                    <p className="text-2xl font-bold text-yellow-800">{stats.totalPackages || 0}</p>
                </div>
                <div className="bg-pink-100 p-6 rounded-xl shadow text-center">
                    <h3 className="text-lg font-semibold">Clients</h3>
                    <p className="text-2xl font-bold text-pink-800">{stats.totalClients || 0}</p>
                </div>
                <div className="bg-purple-100 p-6 rounded-xl shadow text-center">
                    <h3 className="text-lg font-semibold">Stories</h3>
                    <p className="text-2xl font-bold text-purple-800">{stats.totalStories || 0}</p>
                </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow p-6 text-center">
                <img
                    src={profile?.photo}
                    alt={profile?.photo}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">{profile?.name}</h3>
                <p className="text-gray-500">{profile?.email}</p>
                <p className="text-green-600 font-semibold capitalize">admin</p>

                {/* Edit button */}
                <label
                    htmlFor="edit-profile-modal"
                    className="btn btn-outline btn-primary mt-4"
                    onClick={() => {
                        setFormData({
                            name: profile.name || '',
                            photo: profile.photo || ''
                        });
                        setShowModal(true);
                    }}
                >
                    Edit Profile
                </label>
            </div>

            {/* DaisyUI Modal */}
            <input type="checkbox" id="edit-profile-modal" className="modal-toggle" checked={showModal} readOnly />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Edit Profile</h3>
                    <form onSubmit={handleUpdate} className="space-y-4">
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="input input-bordered w-full"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            value={formData.photo}
                            onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                            className="input input-bordered w-full"
                            placeholder="Photo URL"
                        />
                        <div className="modal-action">
                            <label
                                htmlFor="edit-profile-modal"
                                className="btn btn-outline"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </label>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ManageProfileAdmin;
