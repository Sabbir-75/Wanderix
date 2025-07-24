import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router';

const TourismGuideSection = () => {
    const packages = [
        {
            id: 1,
            photo: 'https://images.unsplash.com/photo-1600408561812-7682c9d197e6?auto=format&fit=crop&w=800&q=80',
            title: 'Cox’s Bazar Beach Tour',
            tourType: 'Beach',
            price: 8500,
        },
        {
            id: 2,
            photo: 'https://images.unsplash.com/photo-1599826012254-d6204fd5f2b3?auto=format&fit=crop&w=800&q=80',
            title: 'Sundarbans Adventure',
            tourType: 'Wildlife',
            price: 12500,
        },
        {
            id: 3,
            photo: 'https://images.unsplash.com/photo-1581349482160-15230c204ec5?auto=format&fit=crop&w=800&q=80',
            title: 'Bandarban Hills Trek',
            tourType: 'Adventure',
            price: 9500,
        },
        {
            id: 4,
            photo: 'https://images.unsplash.com/photo-1604223135620-6c1148f0d3b5?auto=format&fit=crop&w=800&q=80',
            title: 'Sylhet Tea Garden Trip',
            tourType: 'Nature',
            price: 7000,
        },
        {
            id: 5,
            photo: 'https://images.unsplash.com/photo-1599751447635-cdbf823ef43c?auto=format&fit=crop&w=800&q=80',
            title: 'Heritage Tour Rajshahi',
            tourType: 'History',
            price: 6000,
        },
    ];

    const guides = [
        {
            id: 1,
            name: 'Tanvir Rahman',
            expertise: 'Hill Tracking',
            experience: 5,
            photo: 'https://images.unsplash.com/photo-1590080876274-56c5dbb225fd?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: 2,
            name: 'Mitu Akter',
            expertise: 'Heritage Sites',
            experience: 4,
            photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: 3,
            name: 'Rafiq Uddin',
            expertise: 'Beach Travel',
            experience: 3,
            photo: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: 4,
            name: 'Nusrat Jahan',
            expertise: 'Eco Tours',
            experience: 6,
            photo: 'https://images.unsplash.com/photo-1595433707802-167b1a2013b1?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: 5,
            name: 'Shuvo Mallick',
            expertise: 'Sundarban Safari',
            experience: 7,
            photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328d3a49?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: 6,
            name: 'Farzana Noor',
            expertise: 'Cultural Tours',
            experience: 4,
            photo: 'https://images.unsplash.com/photo-1614282238444-bce3f63b8e23?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: 7,
            name: 'Aziz Chowdhury',
            expertise: 'Tea Garden Trips',
            experience: 2,
            photo: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=400&q=80',
        },
    ];

    return (
        <section className="py-16 px-4 md:px-10 bg-gradient-to-b from-blue-50 to-white">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-[#00204A] mb-2">Tourism & Travel Guide</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover our best travel packages and meet our friendly tour guides.
                </p>
            </div>

            <Tabs>
                <TabList className="flex justify-center gap-6 mb-10">
                    <Tab className="px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700">Our Packages</Tab>
                    <Tab className="px-6 py-2 text-lg font-semibold text-white bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600">Meet Our Tour Guides</Tab>
                </TabList>

                {/* Packages Tab */}
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-6">
                        {packages.map((pkg) => (
                            <div key={pkg._id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
                                <img src={pkg.photo} alt={pkg.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <p className="text-sm text-blue-600 uppercase font-semibold">{pkg.tourType}</p>
                                    <h3 className="text-xl font-bold text-gray-800">{pkg.title}</h3>
                                    <p className="text-lg font-semibold text-green-600">৳ {pkg.price}</p>
                                    <Link
                                        to={`/packages/${pkg._id}`}
                                        className="inline-block mt-3 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition"
                                    >
                                        View Package
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>

                {/* Guides Tab */}
                <TabPanel>
                    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {guides.map((guide) => (
                            <div key={guide._id} className="bg-white rounded-2xl shadow-md border border-yellow-200 p-4">
                                <img
                                    src={guide.photo}
                                    alt={guide.name}
                                    className="w-full h-48 object-cover rounded-xl mb-3"
                                />
                                <h3 className="text-lg font-bold text-gray-800">{guide.name}</h3>
                                <p className="text-gray-600">Expertise: {guide.expertise}</p>
                                <p className="text-gray-600">Experience: {guide.experience} years</p>
                                <Link
                                    to={`/tour-guides/${guide._id}`}
                                    className="inline-block mt-3 text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full"
                                >
                                    View Profile
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
