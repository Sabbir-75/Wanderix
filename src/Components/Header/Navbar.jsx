import React, { useEffect, useState } from 'react';
import logo1 from "../../assets/Untitled_design-removebg-preview.png"
import { Link, NavLink, useNavigate } from 'react-router';
import { FiLogOut, FiLogIn, FiLayout } from "react-icons/fi";
import "./Navbar.css"
import { useAuth } from '../../Hooks/UseAuth/UseAuth';
import { Bounce, toast } from 'react-toastify';
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
    const { user, logoutAccount, setThemeChanger } = useAuth()
    const navigate = useNavigate()
    const [isFixed, setIsFixed] = useState(false);
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

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    })

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
        setThemeChanger(theme)
    }, [theme, setThemeChanger])

    const handleToggle = (e) => {
        setTheme(e.target.checked ? "dark" : "light")
        setThemeChanger(theme)
    }
    useEffect(() => {
        const handleScroll = () => {
            const navbarHeight = document.getElementById("navbarId").offsetHeight;
            if (window.scrollY > navbarHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const nav = <>
        <li className='font-semibold text-base'><NavLink className={`hover:text-primary hover:border-primary border-b-2 border-base-100/0 py-1 duration-200`} to={"/"}>Home</NavLink></li>
        <li className='font-semibold text-base'><NavLink className={`hover:text-primary hover:border-primary border-b-2 border-base-100/0 py-1 duration-200`} to={"/aboutus"}>About Us</NavLink></li>
        <li className='font-semibold text-base'><NavLink className={`hover:text-primary hover:border-primary border-b-2 border-base-100/0 py-1 duration-200`} to={"/community"}>Community</NavLink></li>
        <li className='font-semibold text-base'><NavLink className={`hover:text-primary hover:border-primary border-b-2 border-base-100/0 py-1 duration-200`} to={"/trips"}>Trips</NavLink></li>
    </>
    return (
        <section id="navbarId" className={`px-4 md:px-6 lg:px-12 bg-base-100 shadow-sm z-50 transition-all duration-500 ease-in-out sticky ${isFixed
                ? 'fixed top-0 left-0 right-0 backdrop-blur-xl bg-base-100/60 translate-y-0'
                : 'relative -top-30'
            }`}>
            <div className='max-w-7xl mx-auto h-16 sm:h-20 flex justify-between items-center'>
                <div className="flex justify-start items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="myclassName bg-neutral text-neutral-content rounded-2xl menu-sm dropdown-content mt-3 w-52 p-2 shadow">
                            {nav}
                        </ul>
                    </div>
                    <Link className="max-w-[190px]">
                        <img className=' w-full md:max-w-[220px] h-full' src={logo1} alt={logo1} />
                    </Link>
                </div>
                <div className="hidden lg:flex items-center">
                    <ul className="myclassName text-base-content flex items-center gap-4 md:gap-8 lg:gap-8 menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="space-x-2 flex justify-between items-center">
                    <label className="toggle text-base-content">
                        <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} />
                        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                    </label>
                    {
                        user &&
                        <>
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
                                        <button
                                            onClick={logoutHandler}
                                            className="hover:bg-red-500 bg-red-600 rounded-md px-2 py-1 flex items-center gap-2 text-white duration-150 w-full"
                                        >
                                            <FiLogOut /> Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    }

                    {
                        !user && <Link
                            to="/login"
                            className="relative inline-flex items-center rounded-sm justify-center px-2 md:px-3 py-1 md:py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="absolute inset-0 w-full h-full rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
                            <span className="relative flex text-sm md:text-base font-semibold items-center gap-2">
                                <FiLogIn size={14} /> Login
                            </span>
                        </Link>
                    }


                </div>
            </div>

        </section>
    );
};

export default Navbar;