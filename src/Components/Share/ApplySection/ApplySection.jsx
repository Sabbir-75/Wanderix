import React from "react";
import { FaUser, FaEnvelope, FaGlobe, FaPassport } from "react-icons/fa";
import { BsArrowUpRightCircle, BsArrowUpRightCircleFill } from "react-icons/bs";
import { useForm } from "react-hook-form";

const bangladeshDistricts = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barisal",
    "Bhola",
    "Bogra",
    "Brahmanbaria",
    "Chandpur",
    "Chapai Nawabganj",
    "Chattogram",
    "Chuadanga",
    "Comilla",
    "Cox's Bazar",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokathi",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon"
];


const ApplySection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log("Submitted:", data);
    };
    return (
        <div className="bg-white/20 backdrop-blur-lg max-w-[700px] rounded-[30px] shadow-md p-4 md:p-5">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex items-center justify-between">


                    <h2 className="text-xl md:text-2xl font-bold text-base-200 w-full md:w-auto">
                        Destination
                    </h2>
                    <button type="submit" className="relative inline-flex items-center rounded-full justify-center px-2.5 md:px-3.5 py-1.5 md:py-2.5 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="relative flex text-sm md:text-base lg:text-lg font-semibold items-center gap-2">
                            Apply Now <BsArrowUpRightCircleFill />
                        </span>
                    </button>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5">


                    <div className="w-full md:w-[200px]">
                        <div className="flex items-center gap-2 px-4 py-2.5 bg-white border rounded-full">
                            <FaUser className="text-blue-500" />
                            <input
                                type="text"
                                placeholder="Enter Name"
                                {...register("name", { required: "Name is required" })}
                                className="outline-none w-full text-sm"
                            />
                        </div>
                        {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name.message}</p>}
                    </div>

                    {/* Email Input */}
                    <div className="w-full md:w-[200px]">
                        <div className="flex items-center gap-2 px-4 py-2.5 bg-white border rounded-full">
                            <FaEnvelope className="text-blue-500" />
                            <input
                                type="email"
                                placeholder="Enter Email"
                                {...register("email", { required: "Email is required" })}
                                className="outline-none w-full text-sm"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email.message}</p>}
                    </div>

                    {/* District Dropdown */}
                    <div className="w-full md:w-[200px]">
                        <div className="flex items-center gap-2 px-4 py-2.5 bg-white border rounded-full">
                            <FaGlobe className="text-blue-500" />
                            <select
                                {...register("district", { required: "Please select a district" })}
                                className="outline-none w-full bg-white text-sm"
                            >
                                <option value="">Districts</option>
                                {bangladeshDistricts.map((dis, i) => (
                                    <option key={i} value={dis}>{dis}</option>
                                ))}
                            </select>
                        </div>
                        {errors.district && <p className="text-red-500 text-xs mt-1 ml-2">{errors.district.message}</p>}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ApplySection;
