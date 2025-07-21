import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import SectionName from '../../Share/HomeSection/HomeSection';
import { Link } from 'react-router'; // fixed react-router import
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ApplySection from '../../Share/ApplySection/ApplySection';

const CarouselSection = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        // Fetch data
        fetch("/Carousel.json")
            .then(res => res.json())
            .then(data => setAllData(data));
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    const handleSlideChange = () => {
        AOS.refresh();
    };

    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            onChange={handleSlideChange}
            stopOnHover={true}
        >
            {allData.map((car, index) => (
                <div
                    key={index}
                    style={{
                        backgroundImage: `url(${car.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                    className='text-start py-[80px]  px-[40px] space-y-6'
                >
                    <SectionName>BEST LEGAL SUPPORT!</SectionName>
                    <h1 data-aos="fade-left" className='text-6xl text-white font-extrabold max-w-[600px]'>{car.title}</h1>
                    <p data-aos="fade-right" className='text-base text-white font-normal max-w-[650px]'>{car.subtitle}</p>
                    <div data-aos="fade-up" className='flex items-center gap-5'>
                        <Link className="relative inline-flex items-center rounded-lg justify-center px-2.5 md:px-3.5 py-1.5 md:py-2.5 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative flex text-sm md:text-base lg:text-lg font-semibold items-center gap-2">
                                {car.button1} <BsArrowUpRightCircleFill />
                            </span>
                        </Link>
                        <Link className="relative inline-flex items-center rounded-lg justify-center px-2.5 md:px-3.5 py-1.5 md:py-2.5 overflow-hidden font-mono font-medium tracking-tighter text-white bg-secondary group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative flex text-sm md:text-base lg:text-lg font-semibold items-center gap-2">
                                {car.button2} <BsArrowUpRightCircleFill />
                            </span>
                        </Link>
                    </div>
                    <ApplySection></ApplySection>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselSection;
