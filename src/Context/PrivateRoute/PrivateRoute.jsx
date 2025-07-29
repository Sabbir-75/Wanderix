import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../../Hooks/UseAuth/UseAuth';

const PrivateRoute = ({ children }) => {

    const { loading, user } = useAuth()
    const location = useLocation()

    if (loading) {
        return <><span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span></>
    }

    if(!user){
        return <Navigate state={location.pathname} to={"/login"}></Navigate>
    }
    return children
};

export default PrivateRoute;