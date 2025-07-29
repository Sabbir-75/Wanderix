import React from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router';
import SectionName from '../../../Components/Share/HomeSection/HomeSection';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

// const packages = [
//     {
//         id: 1,
//         photo: 'https://i.ibb.co/rP78w1v/reasons-to-visit-Coxs-Bazar-1024x585.jpg',
//         title: 'Cox’s Bazar Beach Tour',
//         tourType: 'Beach',
//         price: 8500,
//     },
//     {
//         id: 2,
//         photo: 'https://i.ibb.co/XxwnyVrq/Things-To-Do-In-Sundarban-Cover-Photo-840x425.jpg',
//         title: 'Sundarbans Adventure',
//         tourType: 'Wildlife',
//         price: 12500,
//     },

//     {
//         id: 3,
//         photo: 'https://i.ibb.co/rKZZmsyN/63b6caca34005144188450.jpg',
//         title: 'Sylhet Tea Garden Trip',
//         tourType: 'Nature',
//         price: 7000,
//     },
//     {
//         id: 4,
//         photo: 'https://i.ibb.co/rP78w1v/reasons-to-visit-Coxs-Bazar-1024x585.jpg',
//         title: 'Cox’s Bazar Beach Tour',
//         tourType: 'Beach',
//         price: 8500,
//     },
//     {
//         id: 5,
//         photo: 'https://i.ibb.co/rKZZmsyN/63b6caca34005144188450.jpg',
//         title: 'Sylhet Tea Garden Trip',
//         tourType: 'Nature',
//         price: 7000,
//     },
//     {
//         id: 6,
//         photo: 'https://i.ibb.co/XxwnyVrq/Things-To-Do-In-Sundarban-Cover-Photo-840x425.jpg',
//         title: 'Sundarbans Adventure',
//         tourType: 'Wildlife',
//         price: 12500,
//     },
//     {
//         id: 7,
//         photo: 'https://i.ibb.co/XxwnyVrq/Things-To-Do-In-Sundarban-Cover-Photo-840x425.jpg',
//         title: 'Sundarbans Adventure',
//         tourType: 'Wildlife',
//         price: 12500,
//     },

//     {
//         id: 8,
//         photo: 'https://i.ibb.co/rKZZmsyN/63b6caca34005144188450.jpg',
//         title: 'Sylhet Tea Garden Trip',
//         tourType: 'Nature',
//         price: 7000,
//     },
// ];



const Trips = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: packages = [] } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axiosSecure.get('/packages');
            return res.data;
        }
    });

    return (
        <section className="px-4 md:px-10 py-6 md:py-10 lg:py-16 bg-gray-50">
            <div className="text-center mb-12">
                <SectionName>Packages</SectionName>
                <h2 className="text-5xl mt-4 font-extrabold text-base-content mb-3">All <span className='text-secondary'>Trip</span> Packages</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Explore all our available tour packages across Bangladesh.
                </p>
            </div>

            {/* ✅ Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                    <div
                        key={pkg._id}
                        className="bg-white rounded-t-4xl rounded-br-4xl shadow-lg overflow-hidden border border-blue-100"
                    >
                        <img
                            src={pkg.photos[0]}
                            alt={pkg.photos[0]}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 space-y-2">
                            <p className="text-sm text-blue-600 uppercase font-semibold">
                                {pkg.tourType}
                            </p>
                            <h3 className="text-xl font-bold text-gray-800">{pkg.title}</h3>
                            <p className="text-lg font-semibold text-green-600">
                                ৳ {pkg.price}
                            </p>

                            <Link
                                type="button"
                                to={`/packagedetailspage/${pkg._id}`}
                                className="relative inline-flex items-center rounded-full justify-center px-3 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group"
                            >
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span className="relative flex text-sm lg:text-base font-semibold items-center gap-2">
                                    View Package <BsArrowUpRightCircleFill />
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Trips;
