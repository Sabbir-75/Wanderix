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
    const { data: candidates = [] } = useQuery({
        queryKey: ['guides'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tourGuides/random-guides`);
            return res.data;
        }
    });
    const { data: packages = [] } = useQuery({
        queryKey: ['packages',],
        queryFn: async () => {
            const res = await axiosSecure.get('/packages');
            return res.data;
        }
    });


    return (
        <section className="max-w-7xl mx-auto py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-12">
            <div className='text-center mb-3'>
                <SectionName>Guide</SectionName>
            </div>

            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold mt-2 mb-3">Tourism <span className='text-secondary'> & Travel</span> Guide</h2>
                <p className="text-base-content/65 text-lg max-w-2xl mx-auto">
                    Discover our best travel packages and meet our friendly tour guides.
                </p>
            </div>

            <Tabs selectedTabClassName="!bg-primary text-white">
                <TabList className="flex justify-center gap-6 mb-10">
                    <Tab className="px-6 py-2 text-sm md:text-base lg:text-lg font-semibold border-2 border-primary rounded-full cursor-pointer hover:bg-primary hover:text-white transition">
                        Our Packages
                    </Tab>
                    <Tab className="px-6 py-2 text-sm md:text-base lg:text-lg font-semibold border-2 border-primary rounded-full cursor-pointer hover:bg-primary hover:text-white transition">
                        Meet Our Tour Guides
                    </Tab>
                </TabList>

                {/* Packages Tab */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {packages.map((pkg) => (
                            <div key={pkg._id} className="bg-base-200 rounded-t-4xl rounded-br-4xl shadow-lg overflow-hidden">
                                <img src={pkg.photos[0]} alt={pkg.photos[0]} className="w-full h-48 object-cover" />
                                <div className="p-4 space-y-3">
                                    <p className="text-sm text-blue-600 uppercase font-semibold">{pkg.type}</p>
                                    <h3 className="text-xl font-bold text-base-content">{pkg.title}</h3>
                                    <p className="text-lg font-semibold text-green-600">৳ {pkg.price}</p>
                                    <Link to={`/packagedetailspage/${pkg._id}`} className="relative inline-flex items-center rounded-full justify-center px-2 md:px-3 py-1 md:py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group">
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-success rounded-full group-hover:w-56 group-hover:h-56"></span>
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
                        {candidates.map((guide) => (
                            <div key={guide._id} className="bg-base-200 space-y-2 group rounded-t-4xl rounded-br-4xl p-4">
                                <div className='overflow-hidden max-h-56 rounded-xl'>
                                    <img
                                        src={guide.photo}
                                        alt={guide.name}
                                        className="w-full object-cover group-hover:origin-center group-hover:scale-130 duration-300 group-hover:rotate-5 mb-3"
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-base-content/80">{guide.name}</h3>
                                <p className="text-base-content/70">Expertise: {guide.expertise}</p>
                                <p className="text-base-content/70">Experience: {guide.experience} years</p>
                                <Link to={`/guide/${guide._id}`} type="submit" className="relative inline-flex items-center rounded-full justify-center px-2 md:px-3 py-1 md:py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-success rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="relative flex text-sm lg:text-base font-semibold items-center gap-2">
                                        View Profile <BsArrowUpRightCircleFill />
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default TourismGuideSection;
