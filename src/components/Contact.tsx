import Button from './Button';
import { FaPhone, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
export default function Contact() {
    const content = [
        {
            title: "Are you at Home and you need a doctor?",
            text: "You are eagerly want to talk with us and you are at home just contact us and you get medicine to your diseases.",
            buttonText: "Book a Doctor"
        }
    ];
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
            icon: <FaInstagram className='text-[#0086AD] text-2xl' />,
            text: "InstaHealth"
        },
        {
            icon: <FaTwitter className='text-[#0086AD] text-2xl' />,
            text: "InstaHealth"
        },
        {
            icon: <FaLocationDot className='text-[#0086AD] text-2xl' />,
            text: "Kenya"
        }
    ]
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
            name: "Message",
            className: "h-[100px] text-start items-start",
            type: "textarea",
        },
    ];
    return (
        <div className="mx-auto container px-20 flex items-start flex-col pb-10">
            <div className="flex items-center justify-between w-full">
                <img src="/call.png" alt="" className="w-[600px]" />
                <div className="flex flex-col gap-10 max-w-[600px]">
                    {content.map((item, index) => (
                        <div key={index} className="flex flex-col gap-8">
                            <h1 className="text-2xl font-semibold text-[#0086AD] w-[300px]">{item.title}</h1>
                            <p className="text-gray-500 text-start w-[420px]">{item.text}</p>
                            <Button
                                text={item.buttonText}
                                className="w-[150px] h-[60px] bg-[#0086AD] text-white"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <h2 className="text-2xl font-semibold text-[#0086AD] ">Lets Get in Touch</h2>
                <p className='text-gray-500'>Got a problem on working with us in our day to day activities in your health</p>
                <div className='flex justify-between'>
                    <div className=' flex flex-col gap-7'>
                        {
                            contactIcons.map((icon, index) => (
                                <div key={index} className='flex items-center gap-2 '>
                                    {icon.icon}
                                    <p className='text-gray-500'>{icon.text}</p>
                                </div>
                            ))
                        }

                    </div>
                    <div className="flex flex-col justify-center items-start gap-5 w-full md:w-auto">
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
                        <button className="w-32 h-10 text-white font-semibold rounded-md bg-[#0086AD] transition-all duration-300">
                            Submit
                        </button>
                    </div>

                </div>
               


            

        </div>
        </div >
    );
}
