// Contact.jsx
import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router";
import Container from "../../Components/Container/Container";

const Contact = () => {
  return (
    <Container>
      <div className="flex flex-col items-center py-12 md:py-16 lg:py-24">
        <h2 className="text-5xl font-bold mt-2 mb-3 md:mb-6 lg:mb-8">Contact <span className='text-secondary'> Us</span></h2>

        <div className="w-full bg-base-200  grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className=" p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-base-content/65 mb-4">
              Have questions or want to plan your next adventure? Reach out to us!
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Address:</h3>
                <p>Kushtia, Daulatpur, Bangladesh</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone:</h3>
                <p> 01756750000</p>
              </div>
              <div>
                <h3 className="font-semibold">Email:</h3>
                <p> mdsabbirhossain9200@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className=" p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-base-100 rounded-md px-3 py-2 focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-base-100 rounded-md px-3 py-2 focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-base-100 rounded-md px-3 py-2 focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full bg-base-100 rounded-md px-3 py-2 focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              <Link className="relative inline-flex items-center rounded-lg justify-center px-2.5 md:px-3.5 py-1.5 md:py-2.5 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-success rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="relative flex text-sm md:text-base lg:text-lg font-semibold items-center gap-2">
                  Send Message <BsArrowUpRightCircleFill />
                </span>
              </Link>
            </form>
          </div>
        </div>
      </div>

    </Container>
  );
};

export default Contact;
