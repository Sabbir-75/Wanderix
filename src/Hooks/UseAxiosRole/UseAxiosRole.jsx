import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000"
})

const UseAxiosRole = () => {
    return axiosInstance
};

export default UseAxiosRole;