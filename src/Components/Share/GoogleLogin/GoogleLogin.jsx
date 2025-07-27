import React from 'react';
import googlepic from "../../../assets/Google__G__Logo 1.png"

import { Bounce, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';
import UseAxiosRole from '../../../Hooks/UseAxiosRole/UseAxiosRole';
import { useAuth } from '../../../Hooks/UseAuth/UseAuth';

const GoogleLogin = () => {

    const { googleLogin } = useAuth()
    const useUserSecure = UseAxiosRole()
    const navigate = useNavigate()
    const location = useLocation()

    const googleHandler = () => {
        googleLogin()
            .then(async (result) => {
                toast.success('Google Login Successfully', {
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
                const email = result?.user?.email
                const photo = result?.user?.photoURL
                const name = result?.user?.displayName
                const userInfo = {
                    name: name,
                    email: email,
                    role: "tourist",
                    photo,
                    created_at: new Date().toISOString(),
                    last_login: new Date().toISOString()
                }

                const res = await useUserSecure.post("/users", userInfo)
                console.log(res.data);

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
    return (
        <button onClick={googleHandler} className="btn bg-base-200 text-base-content font-semibold text-sm md:text-base lg:text-xl space-x-2 border-gray-300">
            <img src={googlepic} alt={googlepic} />
            <h1>Login with Google</h1>
        </button>
    );
};

export default GoogleLogin;