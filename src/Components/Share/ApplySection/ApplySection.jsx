import React from "react";
import { FaUser, FaEnvelope, FaGlobe } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link } from "react-router";

const bangladeshDistricts = [
  "Bagerhat", "Bandarban", "Barguna", "Barisal", "Bhola", "Bogra", "Brahmanbaria",
  "Chandpur", "Chapai Nawabganj", "Chattogram", "Chuadanga", "Comilla", "Cox's Bazar",
  "Dhaka", "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj", "Habiganj",
  "Jamalpur", "Jashore", "Jhalokathi", "Jhenaidah", "Joypurhat", "Khagrachari", "Khulna",
  "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura",
  "Manikganj", "Meherpur", "Moulvibazar", "Munshiganj", "Mymensingh", "Naogaon", "Narail",
  "Narayanganj", "Narsingdi", "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna",
  "Panchagarh", "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur",
  "Satkhira", "Shariatpur", "Sherpur", "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-br from-blue-200/30 via-white/20 to-orange-200/40 backdrop-blur-md 
      mx-auto max-w-[300px] md:max-w-[500px] rounded-2xl shadow-xl p-3 sm:p-4 md:p-5"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
        
        {/* Title & Button */}
        <div className="flex justify-between items-center">
          <motion.h2
            className="text-sm sm:text-base md:text-xl font-bold"
            animate={{ color: ["#0098FF", "#FFA704"] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Destination
          </motion.h2>

          <Link className="relative inline-flex items-center rounded-md justify-center px-2 py-1.5 
            sm:px-3 sm:py-2 overflow-hidden font-mono tracking-tighter text-white 
            bg-secondary group text-xs sm:text-sm md:text-base">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-base-content rounded-full group-hover:w-40 group-hover:h-40"></span>
            <span className="relative flex items-center gap-1 sm:gap-2 font-semibold">
              Apply <BsArrowUpRightCircleFill className="text-xs sm:text-sm md:text-base" />
            </span>
          </Link>
        </div>

        {/* Inputs */}
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {/* Name */}
          <div className="w-full">
            <div className="flex items-center gap-2 px-2 py-1.5 sm:py-2 bg-white border rounded-full">
              <FaUser className="text-blue-500 text-xs sm:text-sm" />
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="outline-none w-full text-xs sm:text-sm"
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="w-full">
            <div className="flex items-center gap-2 px-2 py-1.5 sm:py-2 bg-white border rounded-full">
              <FaEnvelope className="text-blue-500 text-xs sm:text-sm" />
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="outline-none w-full text-xs sm:text-sm"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* District */}
          <div className="w-full">
            <div className="flex items-center gap-2 px-2 py-1.5 sm:py-2 bg-white border rounded-full">
              <FaGlobe className="text-blue-500 text-xs sm:text-sm" />
              <select
                {...register("district", { required: "Please select a district" })}
                className="outline-none w-full bg-white text-xs sm:text-sm"
              >
                <option value="">Districts</option>
                {bangladeshDistricts.map((dis, i) => (
                  <option key={i} value={dis}>{dis}</option>
                ))}
              </select>
            </div>
            {errors.district && <p className="text-red-500 text-xs mt-1">{errors.district.message}</p>}
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default ApplySection;
