import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';


const AddStories = () => {
    const { user } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const navigate = useNavigate();
    const useSecure = UseAxiosSecure()
    const [images, setImages] = useState([])
    const [uploading, setUploading] = useState(false);

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
                const imageUrl = res.data.data.url;
                imageUrls.push(imageUrl);
            } catch (error) {
                console.error(`Failed to upload image ${i + 1}:`, error);
            }
        }

        setImages(imageUrls);
        setUploading(false); // ✅ Upload complete
    };



    const onSubmit = async (data) => {

        const storyData = {
            title: data.title,
            email: user?.email,
            description: data.description,
            images,
            url: data.shareurl,
            createdAt: new Date()
        };
        console.log(storyData);
        try {
            await useSecure.post('/stories', storyData);
            reset();
            toast.success(' Add Your Travel Story Successfully', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });
            navigate('/dashboard/manage-stories');
        } catch (err) {
            toast.error(`${err.code}`, {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });
        }


    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-md mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">📖 Add Your Travel Story</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Title Field */}
                <div>
                    <input
                        {...register('title', { required: 'Title is required' })}
                        className="input input-bordered w-full"
                        placeholder="Story Title"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                    )}
                </div>
                {/* url Field */}
                <div>
                    <input
                        {...register('shareurl', { required: 'Title is required' })}
                        className="input input-bordered w-full"
                        placeholder="url"
                        type='url'
                    />
                    {errors.shareurl && (
                        <p className="text-red-500 text-sm mt-1">{errors.shareurl.message}</p>
                    )}
                </div>

                {/* Description Field */}
                <div>
                    <textarea
                        {...register('description', { required: 'Description is required' })}
                        className="textarea textarea-bordered w-full"
                        rows="5"
                        placeholder="Write your story here..."
                    ></textarea>
                    {errors.description && (
                        <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                    )}
                </div>

                {/* Image URLs Field */}
                <div>
                    <label className="label">Your Photos</label>
                    <input
                        type="file"
                        onChange={fileHandler}
                        className="file-input file-input-bordered w-full"
                        placeholder="Choose images"
                        multiple
                        accept="image/*"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-end">
                    <button type="submit" className="btn btn-primary" disabled={uploading}>
                        {uploading ? "Uploading..." : "Submit Story"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddStories;
