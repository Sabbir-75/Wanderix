// components/SkillBar.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ label, percentage }) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className="mb-6">
            <div className="flex justify-between mb-1 text-base md:text-lg font-semibold">
                <span>{label}</span>
                <span>{percentage}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-3 bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-1000"
                    style={{
                        width: inView ? `${percentage}%` : '0%',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;
