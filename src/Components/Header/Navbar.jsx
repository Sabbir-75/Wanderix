import React from 'react';
import logo1 from "../../assets/logolight.png"
import { Link, NavLink } from 'react-router';
import "./Navbar.css"

const Navbar = () => {
    const nav = <>
        <li className='font-semibold  text-base'><NavLink className={`hover:text-primary hover:border-primary border-b-2 border-base-100 py-1 duration-200`} to={"/"}>Home</NavLink></li>
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
                    <img className='max-w-[170px] md:max-w-[220px] h-full' src={logo1} alt={logo1} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="myclassName text-base-content flex items-center gap-8 menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="relative inline-flex items-center rounded-r-sm justify-center px-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full  rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
                    <span className="relative flex items-center gap-2">Login</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;