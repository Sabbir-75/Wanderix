import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../../Hooks/UseAuth/UseAuth';
import USeRole from '../../Hooks/UseRole/USeRole';

const GuideRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const { role, roleLoading } = USeRole()
    const location = useLocation()

    if (loading || roleLoading) {
        return <><span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span></>
    }

    if(!user || role !== "guide"){
        return <Navigate state={location.pathname} to={"/forbidden"}></Navigate>
    }
    return children
};

export default GuideRoute;