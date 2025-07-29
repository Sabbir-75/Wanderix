import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';

const ITEMS_PER_PAGE = 10;

const ManageCandidates = () => {
    const queryClient = useQueryClient();
    const useSecure = UseAxiosSecure();
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isLoading } = useQuery({
        queryKey: ['candidates', currentPage],
        queryFn: async () => {
            const res = await useSecure.get(`/applications?page=${currentPage}&limit=${ITEMS_PER_PAGE}`);
            return res.data;
        }
    });

    const acceptCandidate = useMutation({
        mutationFn: async (id) => {
            const res = await useSecure.put(`/applications/accept/${id}`);
            return res.data;
        },
        onSuccess: () => {
            Swal.fire('Accepted!', 'Candidate has been accepted as a tour guide.', 'success');
            queryClient.invalidateQueries(['candidates']);
        }
    });

    const rejectCandidate = useMutation({
        mutationFn: async (id) => {
            const res = await useSecure.delete(`/applications/reject/${id}`);
            return res.data;
        },
        onSuccess: () => {
            Swal.fire('Rejected', 'Candidate has been rejected.', 'info');
            queryClient.invalidateQueries(['candidates']);
        }
    });

    if (isLoading) return <p className="text-center py-10">Loading candidates...</p>;

    const { applications, total } = data;
    const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

    return (
        <div className="p-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Manage Candidates</h2>
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Expertise</th>
                            <th>Experience</th>
                            <th>CV</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((candidate, index) => (
                            <tr key={candidate._id}>
                                <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                                <td><img src={candidate.photo} alt="photo" className="w-12 h-12 rounded-full" /></td>
                                <td>{candidate.name}</td>
                                <td>{candidate.expertise}</td>
                                <td>{candidate.experience} years</td>
                                <td><a href={candidate.cvLink} target="_blank" rel="noreferrer" className="text-blue-500 underline">View CV</a></td>
                                <td className="space-x-2">
                                    <button onClick={() => acceptCandidate.mutate(candidate._id)} className="btn btn-success btn-sm">Accept</button>
                                    <button onClick={() => rejectCandidate.mutate(candidate._id)} className="btn btn-error btn-sm">Reject</button>
                                </td>
                            </tr>
                        ))}
                        {applications.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center text-gray-500">No pending applications</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div className="flex justify-between items-center mt-6">
                <p>Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, total)} of {total}</p>
                <div className="join">
                    <button className="join-item btn btn-sm" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                        «
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`join-item btn btn-sm ${currentPage === index + 1 ? 'btn-active' : ''}`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    )).slice(0, 5)}
                    <button className="join-item btn btn-sm" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                        »
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageCandidates;
