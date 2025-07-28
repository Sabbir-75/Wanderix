import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import SectionName from '../../Share/HomeSection/HomeSection';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const TourismGuideSection = () => {
    const axiosSecure = UseAxiosSecure();
    // const packages = [
    //     {
    //         _id: 1,
    //         photo: 'https://i.ibb.co/rP78w1v/reasons-to-visit-Coxs-Bazar-1024x585.jpg',
    //         title: 'Cox’s Bazar Beach Tour',
    //         tourType: 'Beach',
    //         price: 8500,
    //     },
    //     {
    //         _id: 2,
    //         photo: 'https://i.ibb.co/XxwnyVrq/Things-To-Do-In-Sundarban-Cover-Photo-840x425.jpg',
    //         title: 'Sundarbans Adventure',
    //         tourType: 'Wildlife',
    //         price: 12500,
    //     },

    //     {
    //         _id: 3,
    //         photo: 'https://i.ibb.co/rKZZmsyN/63b6caca34005144188450.jpg',
    //         title: 'Sylhet Tea Garden Trip',
    //         tourType: 'Nature',
    //         price: 7000,
    //     }
    // ];

    

    const { data: packages = [] } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axiosSecure.get('/packages');
            return res.data;
        }
    });

    const guides = [
        {
            id: 1,
            name: 'Tanvir Rahman',
            expertise: 'Hill Tracking',
            experience: 5,
            photo: 'https://i.ibb.co/XZcwXjJ5/istockphoto-1171169127-612x612.jpg',
        },
        {
            id: 2,
            name: 'Mitu Akter',
            expertise: 'Heritage Sites',
            experience: 4,
            photo: 'https://i.ibb.co/My7zmKYR/young-man-with-beard-round-glasses-273609-6647.jpg',
        },
        {
            id: 3,
            name: 'Rafiq Uddin',
            expertise: 'Beach Travel',
            experience: 3,
            photo: 'https://i.ibb.co/gbX8TzxF/images.jpg',
        },
        {
            id: 4,
            name: 'Nusrat Jahan',
            expertise: 'Eco Tours',
            experience: 6,
            photo: 'https://i.ibb.co/ds12RnsP/young-woman-office-52137-33650.jpg',
        },
        {
            id: 5,
            name: 'Shuvo Mallick',
            expertise: 'Sundarban Safari',
            experience: 7,
            photo: 'https://i.ibb.co/LzX0mBnh/istockphoto-1503232125-612x612.jpg',
        },
        {
            id: 6,
            name: 'Farzana Noor',
            expertise: 'Cultural Tours',
            experience: 4,
            photo: 'https://i.ibb.co/Z6BxNWng/istockphoto-2074399566-612x612.jpg',
        }
    ];

    return (
        <section className="py-16 px-4 md:px-10 bg-accent to-white">
            <div className='text-center mb-3'>
                <SectionName>Guide</SectionName>
            </div>

            <div className="text-center mb-10">
                <h2 className="text-5xl font-extrabold text-[#00204A] mb-2">Tourism <span className='text-secondary'>& Travel</span> Guide</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover our best travel packages and meet our friendly tour guides.
                </p>
            </div>

            <Tabs selectedTabClassName="!bg-primary text-white">
                <TabList className="flex justify-center gap-6 mb-10">
                    <Tab className="px-6 py-2 text-sm md:text-base lg:text-lg font-semibold bg-accent border-2 border-primary rounded-full cursor-pointer hover:bg-primary hover:text-white transition">
                        Our Packages
                    </Tab>
                    <Tab className="px-6 py-2 text-sm md:text-base lg:text-lg font-semibold bg-accent border-2 border-primary rounded-full cursor-pointer hover:bg-primary hover:text-white transition">
                        Meet Our Tour Guides
                    </Tab>
                </TabList>

                {/* Packages Tab */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {packages.map((pkg) => (
                            <div key={pkg._id} className="bg-white rounded-t-4xl rounded-br-4xl shadow-lg overflow-hidden border border-blue-100">
                                <img src={pkg.photos[0]} alt={pkg.photos[0]} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <p className="text-sm text-blue-600 uppercase font-semibold">{pkg.type}</p>
                                    <h3 className="text-xl font-bold text-gray-800">{pkg.title}</h3>
                                    <p className="text-lg font-semibold text-green-600">৳ {pkg.price}</p>
                                    <Link to={`/packagedetailspage/${pkg._id}`} className="relative inline-flex items-center rounded-full justify-center px-2 md:px-3 py-1 md:py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group">
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-56 group-hover:h-56"></span>
                                        <span className="relative flex text-sm lg:text-base font-semibold items-center gap-2">
                                            View Package <BsArrowUpRightCircleFill />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>

                {/* Guides Tab */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {guides.map((guide) => (
                            <div key={guide._id} className="bg-white space-y-2 group rounded-t-4xl rounded-br-4xl p-4">
                                <div className='overflow-hidden max-h-56 rounded-xl'>
                                    <img
                                        src={guide.photo}
                                        alt={guide.name}
                                        className="w-full object-cover group-hover:origin-center group-hover:scale-130 duration-300 group-hover:rotate-5 mb-3"
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-gray-800">{guide.name}</h3>
                                <p className="text-gray-600">Expertise: {guide.expertise}</p>
                                <p className="text-gray-600">Experience: {guide.experience} years</p>
                                <button type="submit" className="relative inline-flex items-center rounded-full justify-center px-2 md:px-3 py-1 md:py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="relative flex text-sm lg:text-base font-semibold items-center gap-2">
                                        View Profile <BsArrowUpRightCircleFill />
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default TourismGuideSection;
