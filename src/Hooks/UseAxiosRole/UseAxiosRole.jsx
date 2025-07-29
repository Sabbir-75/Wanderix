import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: "https://wanderix-server.vercel.app"
})

const UseAxiosRole = () => {
    return axiosInstance
};

export default UseAxiosRole;