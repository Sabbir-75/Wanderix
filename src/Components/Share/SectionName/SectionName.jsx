import React from 'react';
import { BsFillSignIntersectionFill } from "react-icons/bs";

const SectionName = ({ children }) => {
    return (
        <button className="relative inline-flex items-center text-sm font-bold px-4 py-2 text-white rounded-full overflow-hidden group">


            <span className="absolute inset-0 bg-primary" />
            <span
                className="absolute right-0 top-0 w-1/2 h-full  bg-secondary"
                style={{
                    clipPath: 'polygon(40% 0, 100% 0%, 100% 100%, 0% 100%)'

                }}
            />
            <span className="relative z-10 flex items-center space-x-2">
                <span className="flex justify-center items-center gap-1.5"><BsFillSignIntersectionFill size={18} /> {children}</span>
            </span>
        </button>
    );
};

export default SectionName;