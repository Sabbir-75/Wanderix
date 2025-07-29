import React from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { FaHome, FaUserEdit, FaUsersCog, FaRegListAlt, FaPlusCircle, FaClipboardList, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import { TbPackages } from "react-icons/tb";
import { MdDashboardCustomize } from 'react-icons/md';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import logo from "../../assets/logolight.png"
import { useAuth } from '../../Hooks/UseAuth/UseAuth';
import { FaUsers } from "react-icons/fa6";
import { MdAssignment } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";

const Dashboard = () => {
    const location = useLocation()
    const { logoutAccount } = useAuth()
    const navigate = useNavigate()
    const logoutHandler = () => {
        logoutAccount()
            .then(() => {
                toast.success('Logout Successfully', {
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
                navigate(location.state || "/")
            })
            .then(error => {
                toast.error(`${error.code}`, {
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
            })
    }
    const linkClasses = (path) =>
        `${location.pathname === path && "bg-info text-base-200"} hover:text-base-200 hover:bg-primary hover:scale-105 transition-all duration-200 rounded-lg`;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar for small devices */}
                <div className="navbar bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-full lg:hidden px-4">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="text-xl font-semibold ml-3">Dashboard</div>
                </div>

                {/* Main Content */}
                <div className='px-4 py-6 md:px-6 lg:px-10'>
                    <Outlet />
                </div>
            </div>

            {/* Sidebar */}
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full text-base-content bg-base-200 space-y-2 transition-all duration-300 ease-in-out">
                    <div className='max-w-[220px]'>
                        <img src={logo} alt={logo} />
                    </div>
                    <li>
                        <Link to="/" className="hover:bg-primary hover:scale-105 transition-all duration-200 rounded-lg">
                            <FaHome className="inline-block mr-2" /> Wanderix Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard"
                            className={linkClasses("/dashboard")}
                        >
                            <MdDashboardCustomize className="inline-block mr-2" /> Dashboard Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manage-profile"
                            className={linkClasses("/dashboard/manage-profile")}
                        >
                            <FaUserEdit className="inline-block mr-2" /> Manage Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/my-bookings"
                            className={linkClasses("/dashboard/my-bookings")}
                        >
                            <FaRegListAlt className="inline-block mr-2" /> My Bookings
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/add-stories"
                            className={linkClasses("/dashboard/add-stories")}
                        >
                            <FaPlusCircle className="inline-block mr-2" /> Add Stories
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manage-stories"
                            className={linkClasses("/dashboard/manage-stories")}
                        >
                            <FaClipboardList className="inline-block mr-2" /> Manage Stories
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/join-as-tour-guide"
                            className={linkClasses("/dashboard/join-as-tour-guide")}
                        >
                            <FaUsersCog className="inline-block mr-2" /> Join as Tour Guide
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/addpackage"
                            className={linkClasses("/dashboard/addpackage")}
                        >
                            <TbPackages className="inline-block mr-2" /> AddPackage
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard/manage-profile-guide"
                            className={linkClasses("/dashboard/manage-profile-guide")}
                        >
                            <FaUserEdit className="inline-block mr-2" /> Manage Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/my-assigned-tours"
                            className={linkClasses("/dashboard/my-assigned-tours")}
                        >
                            <MdAssignment className="inline-block mr-2" /> My Assigned Tours
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manage-users"
                            className={linkClasses("/dashboard/manage-users")}
                        >
                            <FaUsers className="inline-block mr-2" /> Manage Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manage-candidates"
                            className={linkClasses("/dashboard/manage-candidates")}
                        >
                            <IoMailUnread className="inline-block mr-2" /> Manage Candidates
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manage-profile-admin"
                            className={linkClasses("/dashboard/manage-profile-admin")}
                        >
                            <FaUserEdit className="inline-block mr-2" /> Manage Profile
                        </Link>
                    </li>











                    <div className="divider mt-6 text-primary">Others</div>

                    <li>
                        <a className="hover:bg-pink-500 hover:scale-105 transition-all duration-200 rounded-lg">
                            <FaCogs className="inline-block mr-2" /> Settings
                        </a>
                    </li>
                    <li>
                        <Link onClick={logoutHandler} className="hover:bg-red-500 hover:scale-105 transition-all duration-200 rounded-lg text-base-content">
                            <FaSignOutAlt className="inline-block mr-2" /> Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
