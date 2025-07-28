import React from 'react';
import logo1 from "../../assets/logolight.png"
import { Link, NavLink, useNavigate } from 'react-router';
import { FiLogOut, FiLogIn, FiLayout } from "react-icons/fi";
import { IoMegaphone } from "react-icons/io5";
import "./Navbar.css"
import { useAuth } from '../../Hooks/UseAuth/UseAuth';
import { Bounce, toast } from 'react-toastify';
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
    const { user, logoutAccount } = useAuth()
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
    const nav = <>
        <li className='font-semibold text-base'><NavLink className={`hover:text-primary hover:border-primary border-b-2 border-base-100 py-1 duration-200`} to={"/"}>Home</NavLink></li>
        <li className='font-semibold text-base'><NavLink className={`hover:text-primary hover:border-primary border-b-2 border-base-100 py-1 duration-200`} to={"/aboutus"}>About Us</NavLink></li>
        <li className='font-semibold text-base'><NavLink className={`hover:text-primary hover:border-primary border-b-2 border-base-100 py-1 duration-200`} to={"/community"}>Community</NavLink></li>
        <li className='font-semibold text-base'><NavLink className={`hover:text-primary hover:border-primary border-b-2 border-base-100 py-1 duration-200`} to={"/trips"}>Trips</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="myclassName text-base-content menu-sm dropdown-content mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div>
                <Link className="">
                    <img className='max-w-[110px] md:max-w-[220px] h-full' src={logo1} alt={logo1} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="myclassName text-base-content flex items-center gap-8 menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0}>
                        <img
                            src={user?.photoURL}
                            alt="Profile"
                            className="cursor-pointer w-[28px] h-[28px] md:w-[35px] md:h-[35px] rounded-full object-cover border-2 border-primary"
                        />
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu max-w-90 bg-neutral text-neutral-content rounded-2xl shadow-lg space-y-1"
                    >


                        <div className=" text-sm font-semibold text-white border-b border-base-300 ">
                            <p className='px-2 py-1 flex gap-2.5 items-center'><FaUserAlt /> {user?.displayName} </p>

                        </div>

                        <div className=" text-sm opacity-90  border-b border-base-300">
                            <p className='px-2 py-1 flex gap-2.5 items-center'> <MdEmail />  {user?.email}</p>

                        </div>


                        <li>
                            <NavLink
                                to="/dashboard"
                                className="hover:bg-secondary rounded-md px-2 py-1 flex items-center gap-2 duration-150"
                            >
                                <FiLayout /> Dashboard
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to="/offers"
                                className="hover:bg-secondary rounded-md px-2 py-1 flex items-center gap-2 duration-150"
                            >
                                <IoMegaphone /> Offers
                            </NavLink>
                        </li>
                        <li>
                            <button
                                onClick={logoutHandler}
                                className="hover:bg-red-500 bg-red-600 rounded-md px-2 py-1 flex items-center gap-2 text-white duration-150 w-full"
                            >
                                <FiLogOut /> Logout
                            </button>
                        </li>
                    </ul>
                </div>
                <Link
                    to="/login"
                    className="relative inline-flex items-center rounded-sm justify-center px-2 md:px-3 py-1 md:py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group"
                >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
                    <span className="relative flex text-sm md:text-base font-semibold items-center gap-2">
                        <FiLogIn size={14} /> Login
                    </span>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;