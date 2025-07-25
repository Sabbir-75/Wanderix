import React from "react";
import { motion } from "framer-motion";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionName from "../../Share/HomeSection/HomeSection";
import SkillBar from "./SkillBar";
import sectionImage from "../../../assets/01.webp"
import { Link } from "react-router";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const TouristStorySection = () => {

    const featuredDestinations = [
        { id: 1, title: "Sajek Valley", image: "https://i.ibb.co/hJP0Wr8h/blogz-B8-BGDn5-J45-Lissk-NSi5r3-F07ohq-WXZ4.png" },
        { id: 2, title: "Saint Martin", image: "https://i.ibb.co/PGK5BKHF/644403-12496316-10153273503225248-3424486551059093533-o.jpg" },
        { id: 3, title: "Rangamati Lake", image: "https://i.ibb.co/zVYVL8Jy/Kaptai-Lake-2-1024x640.jpg" },
        { id: 4, title: "Lalbagh Fort", image: "https://i.ibb.co/LX3TT8cM/the-tomb-of-bibi-pari.jpg" },
        { id: 5, title: "Ahsan Manzil", image: "https://i.ibb.co/mFNpm7HL/0e261801-dc3e-4805-99c1-b9b5c609f83238ac64b2f055f2d924-31391134405-b3a2433fa5-o.jpg" },
        { id: 6, title: "Patenga Beach", image: "https://i.ibb.co/knrPwff/64444462.jpg" },
    ];

    return (
        <>

            <section className="py-20 px-4 md:px-10 bg-white text-center">
                <SectionName>Destinations</SectionName>
                <div className="text-center mt-4 mb-12">
                    <h2 className="text-4xl font-extrabold text-[#00204A] mb-4">Featured Destinations</h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-lg">
                        Discover the most loved tourist spots in Bangladesh selected by our travel community.
                    </p>
                </div>
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="pb-10"
                    >
                        {featuredDestinations.map((place) => (
                            <SwiperSlide key={place.id}>
                                <div
                                    className="bg-cover bg-center h-64 rounded-xl shadow-lg overflow-hidden relative group"
                                    style={{ backgroundImage: `url(${place.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                        <h3 className="text-white text-xl font-bold">{place.title}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 text-3xl text-blue-700 cursor-pointer">
                        <MdNavigateBefore />
                    </div>
                    <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 text-3xl text-blue-700 cursor-pointer">
                        <MdNavigateNext />
                    </div>
                </div>
            </section >

            <section className="py-20 px-4 md:px-10 bg-white flex flex-col md:flex-row gap-12 items-center">
                {/* Left Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={sectionImage}
                        alt="Wanderix Consultants"
                        className="rounded-t-[80px] max-h-[600px] rounded-br-[80px] w-full object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2">
                    <div className="mb-4">
                        <SectionName>Our Skills</SectionName>
                        <h2 className="text-5xl font-extrabold text-[#00204A] leading-snug">
                            We Offer You <span className="text-secondary">The Best Immigration</span> Service
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-8 text-base leading-relaxed">
                        Wanderix is committed to providing expert immigration and consultancy services for those
                        planning to travel, study or settle from Bangladesh. We make your global journey easier.
                    </p>

                    {/* Skill Bars */}
                    <SkillBar label="Visa Consultancy" percentage={85} />
                    <SkillBar label="Immigration Consultancy" percentage={70} />
                    <SkillBar label="Student Consultancy" percentage={78} />

                    <Link className="relative inline-flex items-center rounded-lg justify-center px-2.5 md:px-3.5 py-1.5 md:py-2.5 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="relative flex text-sm md:text-base lg:text-lg font-semibold items-center gap-2">
                            Learn More <BsArrowUpRightCircleFill />
                        </span>
                    </Link>
                </div>
            </section>

        </>
    );
};

export default TouristStorySection;
