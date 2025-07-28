import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';

const AddPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [uploading, setUploading] = useState(false);
    const [imageURLs, setImageURLs] = useState([]);
    const axiosSecure = UseAxiosSecure();


    const handleImageUpload = async (e) => {
        setUploading(true);
        const files = e.target.files;
        const uploadedURLs = [];

        for (let i = 0; i < files.length; i++) {
            const formData = new FormData();
            formData.append("image", files[i]);

            try {
                const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB}`, formData);
                uploadedURLs.push(res.data.data.url);
            } catch (err) {
                toast.error(`Failed to upload image ${i + 1}`, err);
            }
        }

        setImageURLs(uploadedURLs);
        setUploading(false);
    };

    const onSubmit = async (data) => {
        if (imageURLs.length === 0) {
            toast.error("Please upload at least one photo.");
            return;
        }

        const newPackage = {
            title: data.title,
            about: data.about,
            type: data.type,
            price: parseFloat(data.price),
            photos: imageURLs,
            plan: [
                { title: data.day1Title, description: data.day1Desc },
                { title: data.day2Title, description: data.day2Desc },
                { title: data.day3Title, description: data.day3Desc }
            ]
        };

        try {
            const res = await axiosSecure.post('/packages', newPackage);
            if (res.data.insertedId) {
                toast.success("Package added successfully!");
                reset();
                setImageURLs([]);
            }
        } catch (error) {
            toast.error("Failed to add package.", error);
        }
    };



    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Add New Tour Package</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Title */}
                <div>
                    <label className="label">Package Title</label>
                    <input type="text" {...register("title", { required: "Title is required" })} className="input input-bordered w-full" />
                    {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                </div>

                {/* About */}
                <div>
                    <label className="label">About the Tour</label>
                    <textarea {...register("about", { required: "About info is required" })} className="textarea textarea-bordered w-full" />
                    {errors.about && <p className="text-red-500">{errors.about.message}</p>}
                </div>
                <div>
                    <label className="label">Tour Type</label>
                    <textarea {...register("type", { required: "About info is required" })} className="textarea textarea-bordered w-full" />
                    {errors.type && <p className="text-red-500">{errors.type.message}</p>}
                </div>

                {/* Price */}
                <div>
                    <label className="label">Price (৳)</label>
                    <input type="number" {...register("price", { required: "Price is required" })} className="input input-bordered w-full" />
                    {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                </div>

                {/* Image Upload */}
                <div>
                    <label className="label">Upload Tour Photos</label>
                    <input type="file" multiple onChange={handleImageUpload} className="file-input file-input-bordered w-full" />
                    {uploading && <p className="text-yellow-500">Uploading images...</p>}
                    {imageURLs.length > 0 && <p className="text-green-600">{imageURLs.length} images uploaded</p>}
                </div>

                {/* Tour Plan */}
                <div>
                    <h4 className="text-lg font-semibold mt-4 mb-2">Tour Plan</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label">Day 1 Title</label>
                            <input type="text" {...register("day1Title", { required: true })} className="input input-bordered w-full" />
                            {errors.day1Title && <p className="text-red-500">Day 1 title required</p>}
                        </div>
                        <div>
                            <label className="label">Day 1 Description</label>
                            <textarea {...register("day1Desc", { required: true })} className="textarea textarea-bordered w-full" />
                            {errors.day1Desc && <p className="text-red-500">Day 1 description required</p>}
                        </div>

                        <div>
                            <label className="label">Day 2 Title</label>
                            <input type="text" {...register("day2Title", { required: true })} className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">Day 2 Description</label>
                            <textarea {...register("day2Desc", { required: true })} className="textarea textarea-bordered w-full" />
                        </div>

                        <div>
                            <label className="label">Day 3 Title</label>
                            <input type="text" {...register("day3Title", { required: true })} className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">Day 3 Description</label>
                            <textarea {...register("day3Desc", { required: true })} className="textarea textarea-bordered w-full" />
                        </div>
                    </div>
                </div>

                <div className="text-end">
                    <button type="submit" className="btn btn-primary" disabled={uploading}>
                        {uploading ? "Uploading..." : "Add Package"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPackage;
