// Frontend: ManageProfile.jsx
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { FaEdit } from 'react-icons/fa';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';
import UseAxiosRole from '../../../Hooks/UseAxiosRole/UseAxiosRole';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const ManageProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { user } = useAuth()
    const useAxiosSecure = UseAxiosRole()



    const fetchUserByEmail = async (email) => {
        const res = await useAxiosSecure.get(`/users/${email}`);
        return res.data;
    };

    const { data: userInfo, refetch } = useQuery({
        queryKey: ['user-info', user?.email],
        queryFn: () => fetchUserByEmail(user?.email),
    });

    const onSubmit = async (data) => {
        try {
            await useAxiosSecure.patch(`/users/${userInfo._id}`, data);
            setIsModalOpen(false);
            refetch()
            // alert('Profile updated successfully!');
        } catch (err) {
            console.error(err);
        }
        console.log(data);
    };

    useEffect(() => {
        if (userInfo?.name) {
            toast.success(`Welcome back, ${userInfo.name}!`, {
                position: "top-center",
                autoClose: 3000,
            });
        }
    }, [userInfo]);
    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Welcome, {userInfo?.name || 'Guest'} !</h2>
            <div className="bg-white rounded-lg shadow p-6">
                <img src={userInfo?.photo} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
                <p><strong>Name:</strong> {userInfo?.name}</p>
                <p><strong>Email:</strong> {userInfo?.email}</p>
                <p><strong>Role:</strong> {userInfo?.role}</p>
                <div className='flex justify-between'>


                    <button
                        className="btn btn-primary mt-4 flex items-center gap-2"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <FaEdit /> Edit Profile
                    </button>

                    <button
                        className="btn btn-secondary mt-4 ml-3"
                        onClick={() => navigate('/dashboard/join-as-tour-guide')}
                    >
                        Apply for Tour Guide
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-lg">
                        <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                            <input {...register('name')} className="input input-bordered w-full" placeholder="Name" />
                            <input {...register('photo')} className="input input-bordered w-full" placeholder="Photo URL" />
                            <input className="input input-bordered w-full" value={userInfo?.email} disabled />
                            <input className="input input-bordered w-full" value={userInfo?.role} disabled />
                            <div className="flex gap-3 justify-end mt-4">
                                <button onClick={() => setIsModalOpen(false)} className="btn btn-ghost">Cancel</button>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageProfile;
