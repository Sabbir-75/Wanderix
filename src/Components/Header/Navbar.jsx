import React from 'react';
import logo1 from "../../assets/logolight.png"
import { Link, NavLink } from 'react-router';
// import { FiLogOut, FiUser, FiLayout, FiMegaphone } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import "./Navbar.css"

const Navbar = () => {
    const nav = <>
        <li className='font-semibold text-base'><NavLink className={`hover:text-primary hover:border-primary border-b-2 border-base-100 py-1 duration-200`} to={"/"}>Home</NavLink></li>
        <li className='font-semibold text-base'><NavLink className={`hover:text-primary hover:border-primary border-b-2 border-base-100 py-1 duration-200`} to={"/community"}>Community</NavLink></li>
        <li className='font-semibold text-base'><NavLink className={`hover:text-primary hover:border-primary border-b-2 border-base-100 py-1 duration-200`} to={"/aboutus"}>About Us</NavLink></li>
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
            <div className="navbar-end">
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
                {/* <div className="dropdown dropdown-end">
                    <div tabIndex={0}>
                        <img
                            src={user?.photoURL}
                            alt="Profile"
                            className="cursor-pointer w-[35px] h-[35px] rounded-full object-cover border-2 border-primary"
                        />
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-3 w-56 bg-neutral text-neutral-content rounded-box shadow-lg space-y-1"
                    >

                        <li className="px-2 py-1 text-sm font-semibold text-white border-b border-base-300 pointer-events-none">
                            {user?.displayName}
                        </li>


                        <li className="px-2 py-1 text-xs opacity-80 border-b border-base-300 pointer-events-none">
                            {user?.email}
                        </li>


                        <li>
                            <NavLink
                                to="/dashboard"
                                className="hover:bg-base-300 rounded-md px-2 py-1 flex items-center gap-2 duration-150"
                            >
                                <FiLayout /> Dashboard
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to="/offers"
                                className="hover:bg-base-300 rounded-md px-2 py-1 flex items-center gap-2 duration-150"
                            >
                                <FiMegaphone /> Offers
                            </NavLink>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="hover:bg-red-500 bg-red-600 rounded-md px-2 py-1 flex items-center gap-2 text-white duration-150 w-full"
                            >
                                <FiLogOut /> Logout
                            </button>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;