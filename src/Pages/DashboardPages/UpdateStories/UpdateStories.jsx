import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';

const UpdateStories = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [story, setStory] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [newPhotos, setNewPhotos] = useState([]);
    const [uploading, setUploading] = useState(false);
    console.log(newPhotos);
    const axiosSecure = UseAxiosSecure()
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const getStory = async () => {
            const res = await axiosSecure.get(`/stories/photos/${id}`);
            setStory(res.data);
            setPhotos(res.data.images);
            reset({
                title: res.data.title,
                description: res.data.description
            });
        };
        getStory();
    }, [id, reset, axiosSecure]);

    const fileHandler = async (e) => {
        setUploading(true);
        const files = e.target.files;
        const imageUrls = [];

        for (let i = 0; i < files.length; i++) {
            const form = new FormData();
            form.append("image", files[i]);

            try {
                const res = await axios.post(
                    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB}`,
                    form
                );
                imageUrls.push(res.data.data.url);
            } catch (error) {
                console.error(`Failed to upload image ${i + 1}:`, error);
            }
        }
        setNewPhotos(imageUrls);
        setUploading(false);
    };

    const handleRemovePhoto = async (photoUrl) => {
        await axiosSecure.put(`/stories/remove-photo/${id}`, { photoUrl });
        setPhotos(prev => prev.filter(photo => photo !== photoUrl));
        toast.success("Photo removed successfully");
    };

    const onSubmit = async (data) => {
        // 1. Update title and description
        await axiosSecure.put(`/stories/info/${id}`, {
            title: data.title,
            description: data.description
        });

        // 2. Add new photos if any
        if (newPhotos.length > 0) {
            await axiosSecure.put(`/stories/add-photo/${id}`, { newPhotos });
        }

        toast.success('Story updated successfully', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce
        });

        navigate('/dashboard/manage-stories');
    };

    if (!story) return <p className="text-center py-10">Loading story...</p>;

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Update Story</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="label">Title</label>
                    <input {...register('title', { required: true })} className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">Description</label>
                    <textarea {...register('description', { required: true })} className="textarea textarea-bordered w-full"></textarea>
                </div>
                <div>
                    <label className="label">Existing Photos</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {photos.map((photo, index) => (
                            <div key={index} className="relative">
                                <img src={photo} className="w-full h-24 object-cover rounded" alt="story" />
                                <button type="button" onClick={() => handleRemovePhoto(photo)} className="btn btn-xs btn-error absolute top-1 right-1">✕</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="label">Upload New Photos</label>
                    <input type="file" multiple onChange={fileHandler} className="file-input file-input-bordered w-full" />
                </div>
                <div className="text-end">
                    <button type="submit" className="btn btn-primary" disabled={uploading}>
                        {uploading ? "Uploading..." : "Update"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateStories;
