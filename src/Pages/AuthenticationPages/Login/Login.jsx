import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import GoogleLogin from '../../../Components/Share/GoogleLogin/GoogleLogin';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';


const Login = () => {
    const { loginAccount, resetPassword } = useAuth()
    const [emailPlaceholder, setEmailPlaceholder] = useState("Enter your email address")
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("password")
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef()

    const loginHandler = (data, e) => {
        e.preventDefault()
        const email = e.target.email.value
        const { password } = data
        loginAccount(email, password)
            .then(() => {
                toast.success('Login Successfully', {
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
                e.target.reset()
            })
            .catch((error) => {
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

    const resetHandler = () => {
        const email = emailRef.current.value
        if (email) {
            resetPassword(email)
                .then(() => {
                    toast.success('Password reset email sent!', {
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
                .catch((error) => {
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
        else{
            console.log("email nai,,,,,,,!");
        }

    }
    return (
        <div className="bg-base-200 w-full border-base-content shadow-[0_4px_8px_rgba(0,0,0,0.6)] max-w-[460px] mx-auto my-2">
            <div className="card-body">
                <h1 className="text-5xl font-extrabold mb-1">Welcome Back</h1>
                <h1 className="text-lg font-medium mb-5">Login with Wanderix</h1>
                <GoogleLogin></GoogleLogin>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-base-content" />
                    <p className="px-3 text-base-content">OR</p>
                    <hr className="w-full text-base-content" />
                </div>
                <form onSubmit={handleSubmit(loginHandler)} className="fieldset">


                    <label className="label">Email address</label>
                    <input type="email"
                        name='email'
                        ref={emailRef}
                        className="input w-full"
                        placeholder={emailPlaceholder}
                        onFocus={() => setEmailPlaceholder("")}
                        onBlur={() => setEmailPlaceholder("Enter your email address")}
                    />

                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: true })} onFocus={() => setPasswordPlaceholder("")}
                        onBlur={() => setPasswordPlaceholder("password")} className="input w-full" placeholder={passwordPlaceholder} />
                    {
                        (errors.password?.type === 'required') && <p className='text-red-600 text-sm font-medium'>password is required</p>
                    }

                    <div><button type='button' onClick={resetHandler} className="link link-hover">Forgot password?</button></div>
                    <button type='submit' className="btn text-base font-bold text-primary-content bg-primary mt-4">Login</button>
                    <p className="text-sm text-center text-gray-400">Don't have account ?
                        <Link to={"/signup"} rel="noopener noreferrer" className="text-blue-600 focus:underline hover:underline"> Sign up here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;