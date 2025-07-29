import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';


const JoinAsTourGuide = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = UseAxiosSecure();
  const {user} = useAuth()

  const onSubmit = async (data) => {
    const application = {
      name: data.name,
      email: user?.email,
      photo: data.photo,
      expertise: data.expertise,
      experience: data.experience,
      role: "applicants",
      title: data.title,
      reason: data.reason,
      cvLink: data.cvLink,
      status: 'pending',
      createdAt: new Date(),
    };

    try {
      const res = await axiosSecure.post('/tour-guide-applications', application);
      if (res.data.insertedId) {
        Swal.fire('Success!', 'Your application has been submitted!', 'success');
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-3xl text-center text-base-content font-bold mb-4">Join <span className='text-secondary'>as Tour</span> Guide</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('name')} type='text' placeholder="Your Name" className="input input-bordered w-full" required />
        <input {...register('photo')} type='url' placeholder="Photo URL" className="input input-bordered w-full" required />
        <input {...register('expertise')} type='text' placeholder="expertise (Beach Travel)" className="input input-bordered w-full" required />
        <input {...register('experience')} type='number' placeholder="experienc" className="input input-bordered w-full" required />
        <input {...register('title')} type='text' placeholder="Application Title" className="input input-bordered w-full" required />
        <textarea {...register('reason')} placeholder="Why do you want to be a Tour Guide?" className="textarea textarea-bordered w-full" required />
        <input {...register('cvLink')} type='url' placeholder="CV Link (Drive or Dropbox)" className="input input-bordered w-full" required />
        <button type="submit" className="btn btn-primary w-full">Submit Application</button>
      </form>
    </div>
  );
};

export default JoinAsTourGuide;