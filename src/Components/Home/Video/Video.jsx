import React from 'react';
import SectionName from '../../Share/HomeSection/HomeSection';

const Video = () => {
    return (
        <section className="overview-section py-16 bg-gray-100 text-center">
            <SectionName>Overview</SectionName>
            <h2 className="text-5xl font-bold mt-2 mb-3">Welcome <span className='text-secondary'>to</span> Wanderix</h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-700">
                Discover the heart of Bangladesh through guided journeys, local tips, and seamless planning—
                powered by our Tourism Management System.
            </p>
            <div className="mx-auto max-w-4xl">
                <iframe
                    width="100%"
                    height="400px"
                    className="rounded-xl shadow-md"
                    src="https://www.youtube.com/embed/JLjvEYMBGzQ"
                    title="Beautiful Bangladesh"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>

    );
};

export default Video;