import React, { useState } from "react";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure/UseAxiosSecure";

const roleOptions = [
    { value: "all", label: "All Roles" },
    { value: "tourist", label: "Tourist" },
    { value: "guide", label: "Tour Guide" },
    { value: "admin", label: "Admin" },
];

const ManageUsers = () => {
    const axiosSecure = UseAxiosSecure();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRole, setSelectedRole] = useState(roleOptions[0]);

    const { data: users = [], isLoading } = useQuery({
        queryKey: ["users", searchTerm, selectedRole.value],
        queryFn: async () => {
            const roleQuery = selectedRole.value !== "all" ? `&role=${selectedRole.value}` : "";
            const res = await axiosSecure.get(`/users?search=${searchTerm}${roleQuery}`);
            return res.data;
        },
    });

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Manage Users</h2>

            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search by Name or Email"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full md:w-1/2"
                />
                <div className="w-full md:w-1/3">
                    <Select
                        options={roleOptions}
                        value={selectedRole}
                        onChange={setSelectedRole}
                        isSearchable={false}
                    />
                </div>
            </div>

            {isLoading ? (
                <p className="text-center">Loading users...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center py-4">
                                        No users found.
                                    </td>
                                </tr>
                            ) : (
                                users.map((user, index) => (
                                    <tr key={user._id} className="hover">
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td className="capitalize">{user.role}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageUsers;
