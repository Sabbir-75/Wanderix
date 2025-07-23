import React from "react";
import { motion } from "framer-motion";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionName from "../../Share/HomeSection/HomeSection";

const TouristStorySection = () => {

    const featuredDestinations = [
        { id: 1, title: "Sajek Valley", image: "https://i.ibb.co/hJP0Wr8h/blogz-B8-BGDn5-J45-Lissk-NSi5r3-F07ohq-WXZ4.png" },
        { id: 2, title: "Saint Martin", image: "https://i.ibb.co/PGK5BKHF/644403-12496316-10153273503225248-3424486551059093533-o.jpg" },
        { id: 3, title: "Rangamati Lake", image: "https://i.ibb.co/zVYVL8Jy/Kaptai-Lake-2-1024x640.jpg" },
        { id: 4, title: "Lalbagh Fort", image: "https://i.ibb.co/LX3TT8cM/the-tomb-of-bibi-pari.jpg" },
        { id: 5, title: "Ahsan Manzil", image: "https://i.ibb.co/mFNpm7HL/0e261801-dc3e-4805-99c1-b9b5c609f83238ac64b2f055f2d924-31391134405-b3a2433fa5-o.jpg" },
        { id: 6, title: "Patenga Beach", image: "https://i.ibb.co/XZ7CRqqP/Patenga-Sea-Beach-Chittagong.jpg" },
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
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
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
            </section>


            <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-blue-100 to-blue-200 text-center">
                <SectionName>Choose</SectionName>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mt-4"
                >
                    <h2 className="text-4xl font-extrabold text-[#00204A] mb-6">Why Choose Wanderix?</h2>
                    <p className="text-gray-700 text-lg mb-8">
                        Wanderix gives you everything you need to plan your dream journey. From real traveler
                        stories to the best places, easy booking, and travel guides—your adventure starts here.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="bg-white rounded-xl shadow p-6 w-60">
                            <h4 className="font-bold text-blue-600 mb-2">Verified Places</h4>
                            <p className="text-sm text-gray-600">All destinations are rated & reviewed by our community.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 w-60">
                            <h4 className="font-bold text-blue-600 mb-2">Local Guides</h4>
                            <p className="text-sm text-gray-600">Get access to guides who know every hidden gem.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 w-60">
                            <h4 className="font-bold text-blue-600 mb-2">Smooth Booking</h4>
                            <p className="text-sm text-gray-600">Book your experience with just a few clicks.</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default TouristStorySection;
