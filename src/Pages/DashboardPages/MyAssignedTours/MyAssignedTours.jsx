import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';

const MyAssignedTours = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();
    const [selectedBooking, setSelectedBooking] = useState(null);

    const { data: assignedTours = [], refetch } = useQuery({
        queryKey: ['assigned-tours', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/assigned-tours/${user?.email}`);
            return res.data;
        },
    });

    const handleAccept = async (id) => {
        try {
            await axiosSecure.patch(`/assigned-tours/accept/${id}`);
            toast.success('Tour Accepted');
            refetch();
        } catch (err) {
            console.error(err);
        }
    };

    const handleReject = async () => {
        try {
            await axiosSecure.patch(`/assigned-tours/reject/${selectedBooking?._id}`);
            toast.error('Tour Rejected');
            setSelectedBooking(null);
            refetch();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="overflow-x-auto p-6">
            <h2 className="text-2xl font-bold mb-4">My Assigned Tours</h2>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Package</th>
                        <th>Tourist</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {assignedTours.map((booking, index) => (
                        <tr key={booking._id}>
                            <td>{index + 1}</td>
                            <td>{booking.packageName}</td>
                            <td>{booking.touristName}</td>
                            <td>{booking.tourDate}</td>
                            <td>${booking.price}</td>
                            <td>{booking.status}</td>
                            <td className="flex gap-2">
                                <button
                                    className="btn btn-success btn-sm"
                                    disabled={booking.status !== 'in_review'}
                                    onClick={() => handleAccept(booking._id)}
                                >
                                    Accept
                                </button>
                                {booking.status === 'in_review' && (
                                    <button
                                        className="btn btn-error btn-sm"
                                        onClick={() => setSelectedBooking(booking)}
                                    >
                                        Reject
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Confirmation Modal for Reject */}
            {selectedBooking && (
                <dialog id="rejectModal" className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Reject Tour?</h3>
                        <p className="py-4">
                            Are you sure you want to reject the tour:{" "}
                            <strong>{selectedBooking.packageName}</strong>?
                        </p>
                        <div className="modal-action">
                            <form method="dialog" className="flex gap-2">
                                <button className="btn" onClick={() => setSelectedBooking(null)}>
                                    Cancel
                                </button>
                                <button className="btn btn-error" onClick={handleReject}>
                                    Confirm Reject
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default MyAssignedTours;
