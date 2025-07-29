import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { FaEdit } from 'react-icons/fa';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';

const ManageProfile = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const { user } = useAuth();
    const useAxiosSecure = UseAxiosSecure();

    const fetchUserByEmail = async (email) => {
        const res = await useAxiosSecure.get(`/users/${email}`);
        return res.data;
    };

    const { data: userInfo, refetch } = useQuery({
        queryKey: ['user-info', user?.email],
        queryFn: () => fetchUserByEmail(user?.email),
        enabled: !!user?.email
    });

    const onSubmit = async (data) => {
        try {
            await useAxiosSecure.patch(`/users/${userInfo._id}`, data);
            refetch();
            document.getElementById('edit_modal').checked = false;
            toast.success('Profile updated successfully!');
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (userInfo?.name) {
            toast.success(`Welcome back, ${userInfo.name}!`, {
                position: "top-center",
                autoClose: 3000,
            });
            reset({
                name: userInfo.name,
                photo: userInfo.photo
            });
        }
    }, [userInfo, reset]);

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Welcome, {userInfo?.name || 'Guest'}!</h2>
            <div className="bg-white rounded-lg shadow p-6">
                <img src={userInfo?.photo} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
                <p><strong>Name:</strong> {userInfo?.name}</p>
                <p><strong>Email:</strong> {userInfo?.email}</p>
                <p><strong>Role:</strong> {userInfo?.role}</p>
                <div className='flex justify-between flex-wrap gap-2'>
                    {/* Open modal button */}
                    <label htmlFor="edit_modal" className="btn btn-primary mt-4 flex items-center gap-2 cursor-pointer">
                        <FaEdit /> Edit Profile
                    </label>
                    <button
                        className="btn btn-secondary mt-4 ml-0"
                        onClick={() => navigate('/dashboard/join-as-tour-guide')}
                    >
                        Apply for Tour Guide
                    </button>
                </div>
            </div>

            {/* DaisyUI Modal */}
            <input type="checkbox" id="edit_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-lg">
                    <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <input {...register('name')} className="input input-bordered w-full" placeholder="Name" />
                        <input {...register('photo')} className="input input-bordered w-full" placeholder="Photo URL" />
                        <input className="input input-bordered w-full" value={userInfo?.email} disabled readOnly />
                        <input className="input input-bordered w-full" value={userInfo?.role} disabled readOnly />
                        <div className="flex gap-3 justify-end mt-4">
                            <label htmlFor="edit_modal" className="btn btn-ghost">Cancel</label>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
                {/* Click outside to close */}
                <label className="modal-backdrop" htmlFor="edit_modal"></label>
            </div>
        </div>
    );
};

export default ManageProfile;
