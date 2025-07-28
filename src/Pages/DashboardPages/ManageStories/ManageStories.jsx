import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';
import Swal from 'sweetalert2';

const ManageStories = () => {
    const axiosSecure = UseAxiosSecure();
    const queryClient = useQueryClient();
    const { user } = useAuth()

    const { data: stories = [], isLoading } = useQuery({
        queryKey: ['user-stories', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/stories/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email
    });

    const deleteStory = useMutation({
        mutationFn: async (id) => {
            await axiosSecure.delete(`/stories/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['user-stories']);
            toast.success("Story deleted!");
        }
    });



    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteStory.mutate(id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <>

            {
                stories.length ? <div className="px-6 py-8">
                    <h2 className="text-4xl text-center text-base-content font-bold mb-6">Manage Your Stories</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stories.map(story => (
                            <div key={story._id} className="card bg-white shadow-lg rounded-lg p-4 space-y-3">
                                <h3 className="text-xl font-semibold">{story.title}</h3>
                                <p>{story.description}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {
                                        story.images.map((img, idx) => (
                                            <img key={idx} src={img} alt="Story" className="h-28 object-cover rounded" />
                                        ))}
                                </div>
                                <div className="flex justify-between mt-3">
                                    <Link to={`/dashboard/edit-story/${story._id}`} className="btn btn-sm btn-info">Edit</Link>
                                    <button onClick={() => handleDelete(story._id)} className="btn btn-sm btn-error">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> :
                    <h1 className='text-xl text-center text-base-content font-medium'> No Stories Available</h1>
            }
        </>
    );
};

export default ManageStories;
