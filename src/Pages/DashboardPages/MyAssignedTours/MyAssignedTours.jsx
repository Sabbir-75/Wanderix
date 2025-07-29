import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';

const MyAssignedTours = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [selectedBooking, setSelectedBooking] = useState(null);

    const { data: assignedData = {}, refetch } = useQuery({
        queryKey: ['assigned-tours', user?.email, currentPage,itemsPerPage],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/assigned-tours/${user?.email}?page=${currentPage}&limit=${itemsPerPage}`);
            return res.data;
        },
    });

    const { assignedTours = [], total = 0 } = assignedData;
    const totalPages = Math.ceil(total / itemsPerPage);

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
                            <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
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
                    {assignedTours.length === 0 && (
                        <tr>
                            <td colSpan="7" className="text-center py-4">No assigned tours.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination */}
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
