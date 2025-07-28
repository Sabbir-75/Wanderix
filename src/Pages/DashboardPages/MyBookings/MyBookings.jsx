import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { toast } from 'react-toastify';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';
import Swal from 'sweetalert2';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const axiosSecure = UseAxiosSecure();
    const { user } = useAuth()

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await axiosSecure.get(`/bookings/${user?.email}`); // ইউজার-ভিত্তিক বুকিং
                setBookings(res.data);
            } catch (error) {
                console.error('Failed to fetch bookings', error);
            }
        };
        fetchBookings();
    }, [axiosSecure, user]);

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.delete(`/bookings/single/${id}`);
                    setBookings(prev => prev.filter(b => b._id !== id));
                    toast.success('Booking cancelled');
                } catch (err) {
                    toast.error('Failed to cancel booking', err);
                }
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <div className="px-4 md:px-10 py-8">
            <h2 className="text-3xl font-bold mb-6">My Bookings</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-base-200 text-base font-semibold">
                            <th>#</th>
                            <th>Package</th>
                            <th>Tour Guide</th>
                            <th>Tour Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={booking._id}>
                                <td>{index + 1}</td>
                                <td>{booking.packageName}</td>
                                <td>{booking.tourGuideName}</td>
                                <td>{booking.tourDate}</td>
                                <td>৳{booking.price}</td>
                                <td>
                                    <span className={`badge ${booking.status === 'pending' ? 'badge-warning' :
                                        booking.status === 'in review' ? 'badge-info' :
                                            booking.status === 'accepted' ? 'badge-success' : 'badge-error'}`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="space-x-2">
                                    {booking.status === 'pending' && (
                                        <>
                                            <Link to={`/dashboard/payment/${booking._id}`} className="btn btn-sm btn-primary">
                                                Pay
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(booking._id)}
                                                className="btn btn-sm btn-error"
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {bookings.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center py-6">No bookings found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
