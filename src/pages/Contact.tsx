import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { FaPhone, FaGoogle, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

export default function ContactPage() {
    const contactIcons = [
        {
            icon: <FaPhone className='text-[#0086AD] text-2xl' />,
            text: "+250 000 000 000"
        },
        {
            icon: <FaGoogle className='text-[#0086AD] text-2xl' />,
            text: "InstaHealth@gmail.com"
        },
        {
            icon: <FaTwitter className='text-[#0086AD] text-2xl' />,
            text: "InstaHealth"
        },
        {
            icon: <FaLocationDot className='text-[#0086AD] text-2xl' />,
            text: "Kenya"
        }
    ];
    const inputData = [
        {
            name: "Full Name",
            className: "h-10",
            type: "text",
        },
        {
            name: "Email",
            className: "h-10",
            type: "email",
        },
        {
            name: "Phone Number",
            className: "h-10",
            type: "text",
        },
        {
            name: "Message",
            className: "h-[120px] text-start items-start",
            type: "textarea",
        },
    ];
    return (
        <div className="mx-auto container">
            <Navbar />
            <div className="flex flex-wrap md:flex-nowrap gap-10 p-20 items-center">
                {/* Contact Form Section */}
                <div className="flex flex-col gap-10 flex-1">
                    <h1 className="text-4xl font-bold text-gray-500">Get In <span className="text-[#0086AD]">Touch</span></h1>
                    <p className="text-xl text-gray-500 font-medium w-full md:w-[700px]">
                        Eagerly want to get in touch and talk with us in our day-to-day activities? Just fill this form.
                    </p>
                    <div className="flex flex-col justify-center items-start gap-5 w-full">
                        {inputData.map((field, index) =>
                            field.type === "textarea" ? (
                                <textarea
                                    key={index}
                                    placeholder={field.name}
                                    className={`w-full md:w-[500px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-[#0086AD] hover:bg-gray-50 ${field.className}`}
                                ></textarea>
                            ) : (
                                <input
                                    key={index}
                                    type={field.type}
                                    placeholder={field.name}
                                    className={`w-full md:w-[500px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-[#0086AD] hover:bg-gray-50 ${field.className}`}
                                />
                            )
                        )}
                        <button className="w-[500px] h-14 text-white font-semibold rounded-md bg-[#0086AD] transition-all duration-300">
                            Send
                        </button>
                        <div className='flex gap-7'>
                            {contactIcons.map((icon, index) => (
                                <div key={index} className='flex flex-col justify-center items-center gap-2 '>
                                    {icon.icon}
                                    <p className='text-gray-500'>{icon.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="flex-1">
                    <iframe
                        title="InstaHealth Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.082052312205!2d36.81209826611922!3d-1.2863895132243366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d88d3e1b7f%3A0x4c7c1b27610c2b32!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1687209165872!5m2!1sen!2s"
                        className="w-full h-[500px] rounded-lg shadow-sm"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
}
