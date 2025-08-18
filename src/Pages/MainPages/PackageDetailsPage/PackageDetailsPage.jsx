import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import Gallery from "react-photo-gallery";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../../../Hooks/UseAuth/UseAuth";
import SectionName from "../../../Components/Share/HomeSection/HomeSection";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import USeRole from "../../../Hooks/UseRole/USeRole";
import Container from "../../../Components/Container/Container";

const PackageDetailsPage = () => {
    const { user } = useAuth()
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const axiosSecure = UseAxiosSecure();
    const { role } = USeRole()
    const [selectedDate, setSelectedDate] = React.useState(null);
    const { id } = useParams()
    const roleBase = "guide"

    const { data: packageData, isLoading } = useQuery({
        queryKey: ['singlePackage', id],
        enabled: !!id, // ensures query runs only when ID is available
        queryFn: async () => {
            const res = await axiosSecure.get(`/packages/${id}`);
            return res.data;
        }
    });

    const { data: guides = [] } = useQuery({
        queryKey: ['guidesData', role],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tour-guide?role=${roleBase}`);
            return res.data;
        }
    });

    if (isLoading) return <p className="text-center py-10">Loading package details...</p>;
    if (!packageData) return <p className="text-center py-10 text-red-500">Package not found</p>;


    const formattedPhotos = Array.isArray(packageData?.photos)
        ? packageData.photos.map((url) => ({
            src: url,
            width: 5,
            height: 4,
        }))
        : [];

    const onSubmit = async (data) => {
        if (!user) {
            return navigate("/login");
        }

        if (!selectedDate) {
            return toast.error("Please select a tour date.");
        }

        const guideEmails = guides.find(guid => guid.name === data.guideName)

        const bookingInfo = {
            ...data,
            status: "pending",
            touristEmail: user?.email,
            tourDate: selectedDate,
            touristImage: user.photoURL,
            packageName: packageData.title,
            guideEmail: guideEmails.email,
        };

        try {
            const res = await axiosSecure.post("/bookings", bookingInfo);
            if (res.data.insertedId) {
                toast.success("Booking successful! Confirm it from My Bookings.");
                navigate("/dashboard/my-bookings");
            }
        } catch (error) {
            console.error("Booking failed:", error);
            toast.error("Something went wrong while booking.");
        }


    };


    return (
        <Container>
            <div className="py-12 md:py-16 lg:py-24">
                <div className='text-center mb-3'>
                    <SectionName>Package Details</SectionName>
                </div>
                {/* Gallery */}
                <div className="max-w-6xl mx-auto px-4 py-10">
                    <h2 className="text-4xl font-bold mb-6 text-center text-base-content">
                        Gallery
                    </h2>
                    {formattedPhotos.length > 0 ? (
                        <Gallery photos={formattedPhotos} />
                    ) : (
                        <p className="text-center text-gray-500">No photos available</p>
                    )}
                </div>

                {/* About The Tour */}
                <section>
                    <h2 className="text-4xl font-bold mb-4">About the Tour</h2>
                    <p className="text-base-content leading-relaxed">{packageData.about}</p>
                </section>

                {/* Tour Plan */}
                <section>
                    <h2 className="text-4xl font-bold mb-6">Tour Plan</h2>
                    {packageData.plan.map((day, index) => (
                        <details key={index} className="border rounded-xl mb-4">
                            <summary className="bg-base-200 rounded-xl text-base-content py-2 px-4 font-semibold cursor-pointer">
                                Day {index + 1}: {day.title}
                            </summary>
                            <div className="p-4 text-base-content">{day.description}</div>
                        </details>
                    ))}
                </section>

                {/* Tour Guides */}
                <section>
                    <h2 className="text-4xl font-bold mb-6">Tour Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {guides.map((guide) => (
                            <div
                                key={guide._id}
                                className="rounded-lg p-4 shadow hover:shadow-md bg-base-200 transition"
                                onClick={() => navigate(`/tour-guides/${guide._id}`)}
                            >
                                <img src={guide.photo} alt={guide.name} className="w-full h-40 object-cover rounded mb-3" />
                                <h3 className="text-xl font-bold">{guide.name}</h3>
                                <p className="text-base-content/55">{guide.expertise}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Booking Form */}
                <section>
                    <h2 className="text-4xl font-bold mb-6 text-center mt-4">Book this Trip</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-xl mx-auto">
                        <input
                            type="text"
                            readOnly
                            defaultValue={packageData.title}
                            className="input input-bordered w-full"
                            {...register("packageName")}
                        />
                        <input
                            type="text"
                            readOnly
                            defaultValue={user?.displayName || ""}
                            className="input input-bordered w-full"
                            {...register("touristName")}
                        />
                        <input
                            type="email"
                            readOnly
                            defaultValue={user?.email || ""}
                            className="input input-bordered w-full"
                            {...register("touristEmail")}
                        />
                        <input
                            type="text"
                            readOnly
                            defaultValue={user?.photoURL || ""}
                            className="input input-bordered w-full"
                            {...register("touristImage")}
                        />
                        <input
                            type="number"
                            readOnly
                            defaultValue={packageData.price}
                            className="input input-bordered w-full"
                            {...register("price")}
                        />
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            placeholderText="Select Tour Date"
                            className="input input-bordered w-full"
                        />
                        <select {...register("guideName")} className="input input-bordered w-full">
                            <option value="">Select Tour Guide</option>
                            {guides.map((guide) => (
                                <option key={guide._id} value={guide.name}>
                                    {guide.name}
                                </option>
                            ))}
                        </select>
                        {/* <button type="submit" className="btn btn-primary mt-4">
                        Book Now
                    </button> */}
                        <button
                            type="submit"
                            className="btn btn-primary mt-4"
                            disabled={role === 'admin' || role === 'guide'}
                        >
                            {
                                role === 'admin' || role === 'guide'
                                    ? 'Only tourists can book packages'
                                    : 'Book Now'
                            }

                        </button>
                    </form>
                </section>
            </div>
        </Container>
    );
};

export default PackageDetailsPage;
