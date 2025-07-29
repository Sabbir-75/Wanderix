// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router';
// import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
// import { toast } from 'react-toastify';
// import { useAuth } from '../../../Hooks/UseAuth/UseAuth';
// import Swal from 'sweetalert2';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from '../CheckoutForm/CheckoutForm';
// import { useQuery } from '@tanstack/react-query';
// import Confetti from 'react-confetti';
// import { useWindowSize } from 'react-use';

// const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY_STRIPE);

// const MyBookings = () => {
//     const axiosSecure = UseAxiosSecure();
//     const { user } = useAuth();
//     const [selectedBooking, setSelectedBooking] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [showCongrats, setShowCongrats] = useState(false);
//     const { width, height } = useWindowSize();

//     const openPaymentModal = (booking) => {
//         setSelectedBooking(booking);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedBooking(null);
//     };

//     const { data: bookings = [], refetch } = useQuery({
//         queryKey: ['bookings', user?.email],
//         enabled: !!user?.email,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/bookings/${user?.email}`);
//             return res.data;
//         }
//     });

//     // Show congratulations if more than 3 bookings
//     useEffect(() => {
//         if (bookings.length > 3) {
//             setShowCongrats(true);
//             const timer = setTimeout(() => {
//                 setShowCongrats(false);
//             }, 4000);
//             return () => clearTimeout(timer);
//         }
//     }, [bookings]);

//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then(async (result) => {
//             if (result.isConfirmed) {
//                 try {
//                     await axiosSecure.delete(`/bookings/single/${id}`);
//                     toast.success('Booking Deleted');
//                     refetch();
//                     Swal.fire("Deleted!", "Your booking has been deleted.", "success");
//                 } catch (err) {
//                     toast.error('Failed to cancel booking', err);
//                 }
//             }
//         });
//     };

//     return (
//         <div className="px-4 md:px-10 py-8 relative min-h-screen">

//             {showCongrats && (
//                 <>
//                     <Confetti width={width} height={height} />
//                     <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-white border-2 border-green-500 shadow-xl rounded-2xl px-10 py-6 z-50 animate-bounce text-center">
//                         <h2 className="text-4xl font-bold text-green-600 mb-2">🎉 Congratulations! 🎉</h2>
//                         <p className="text-lg text-gray-700">You've booked more than 3 tours. Wanderix is proud of you!</p>
//                     </div>
//                 </>
//             )}

//             <h2 className="text-3xl font-bold mb-6">My Bookings</h2>

//             <div className="overflow-x-auto">
//                 <table className="table w-full">
//                     <thead>
//                         <tr className="bg-base-200 text-base font-semibold">
//                             <th>#</th>
//                             <th>Package</th>
//                             <th>Tour Guide</th>
//                             <th>Tour Date</th>
//                             <th>Price</th>
//                             <th>Status</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {bookings.map((booking, index) => (
//                             <tr key={booking._id}>
//                                 <td>{index + 1}</td>
//                                 <td>{booking.packageName}</td>
//                                 <td>{booking.tourGuideName}</td>
//                                 <td>{booking.tourDate}</td>
//                                 <td>৳{booking.price}</td>
//                                 <td>
//                                     <span className={`badge ${booking.status === 'pending' ? 'badge-warning' :
//                                         booking.status === 'in review' ? 'badge-info' :
//                                             booking.status === 'accepted' ? 'badge-success' : 'badge-error'}`}>
//                                         {booking.status}
//                                     </span>
//                                 </td>
//                                 <td className="space-x-2">
//                                     {booking.status === 'pending' && (
//                                         <>
//                                             <Link
//                                                 onClick={() => openPaymentModal(booking)}
//                                                 className="btn btn-sm btn-primary">
//                                                 Pay
//                                             </Link>
//                                             <button
//                                                 onClick={() => handleDelete(booking._id)}
//                                                 className="btn btn-sm btn-error"
//                                             >
//                                                 Cancel
//                                             </button>
//                                         </>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                         {bookings.length === 0 && (
//                             <tr>
//                                 <td colSpan="7" className="text-center py-6">No bookings found.</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>

//             {isModalOpen && selectedBooking && (
//                 <dialog open className="modal modal-middle">
//                     <div className="modal-box">
//                         <h3 className="font-bold text-lg mb-2">Confirm Your Booking</h3>
//                         <p className="mb-4">
//                             Are you sure you want to proceed with payment for
//                             <strong> {selectedBooking.packageName}</strong>?
//                         </p>
//                         <div className="modal-action">
//                             <Elements stripe={stripePromise}>
//                                 <CheckoutForm id={selectedBooking._id} setIsModalOpen={setIsModalOpen} refetch={refetch}></CheckoutForm>
//                             </Elements>
//                             <button onClick={closeModal} className="btn btn-ghost">
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </dialog>
//             )}
//         </div>
//     );
// };

// export default MyBookings;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { toast } from 'react-toastify';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';
import Swal from 'sweetalert2';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useQuery } from '@tanstack/react-query';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY_STRIPE);

const MyBookings = () => {
    const axiosSecure = UseAxiosSecure();
    const { user } = useAuth();
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showCongrats, setShowCongrats] = useState(false);
    const { width, height } = useWindowSize();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const openPaymentModal = (booking) => {
        setSelectedBooking(booking);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBooking(null);
    };

    const { data: bookingsData = {}, refetch } = useQuery({
        queryKey: ['bookings', user?.email, currentPage],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/${user?.email}?page=${currentPage}&limit=${itemsPerPage}`);
            return res.data;
        }
    });

    const { bookings = [], total = 0 } = bookingsData;
    const totalPages = Math.ceil(total / itemsPerPage);

    useEffect(() => {
        if (bookings.length > 3) {
            setShowCongrats(true);
            const timer = setTimeout(() => {
                setShowCongrats(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [bookings]);

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
                    toast.success('Booking Deleted');
                    refetch();
                    Swal.fire("Deleted!", "Your booking has been deleted.", "success");
                } catch (err) {
                    toast.error('Failed to cancel booking', err);
                }
            }
        });
    };

    return (
        <div className="px-4 md:px-10 py-8 relative min-h-screen">

            {showCongrats && (
                <>
                    <Confetti width={width} height={height} />
                    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-white border-2 border-green-500 shadow-xl rounded-2xl px-10 py-6 z-50 animate-bounce text-center">
                        <h2 className="text-4xl font-bold text-green-600 mb-2">🎉 Congratulations! 🎉</h2>
                        <p className="text-lg text-gray-700">You've booked more than 3 tours. Wanderix is proud of you!</p>
                    </div>
                </>
            )}

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
                                <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
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
                                            <Link
                                                onClick={() => openPaymentModal(booking)}
                                                className="btn btn-sm btn-primary">
                                                Pay
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(booking._id)}
                                                className="btn btn-sm btn-error"
                                            >
                                                Cancel
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

            {/* Pagination Buttons */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-6 gap-2 flex-wrap">
                    {[...Array(totalPages).keys()].map((num) => (
                        <button
                            key={num}
                            onClick={() => setCurrentPage(num + 1)}
                            className={`btn btn-sm ${currentPage === num + 1 ? "btn-primary" : "btn-outline"}`}
                        >
                            {num + 1}
                        </button>
                    ))}
                </div>
            )}

            {isModalOpen && selectedBooking && (
                <dialog open className="modal modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-2">Confirm Your Booking</h3>
                        <p className="mb-4">
                            Are you sure you want to proceed with payment for
                            <strong> {selectedBooking.packageName}</strong>?
                        </p>
                        <div className="modal-action">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm id={selectedBooking._id} setIsModalOpen={setIsModalOpen} refetch={refetch}></CheckoutForm>
                            </Elements>
                            <button onClick={closeModal} className="btn btn-ghost">
                                Cancel
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default MyBookings;

