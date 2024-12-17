import { FaFacebook, FaGoogle, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa"

export default function Footer() {
    const links = [
        {
            name: "Home",
            path: "/about"
        },
        {
            name: "About Us",
            path: "/about"
        },
        {
            name: "Services",
            path: "/about"
        },
        {
            name: "Packages",
            path: "/about"
        },
        {
            name: "Contact Us",
            path: "/about"
        },
        {
            name: "Market Place",
            path: "/about"
        }
    ]
    const icons=[
        <FaFacebook/>,
        <FaTwitter/>,
        <FaPhone/>,
        <FaGoogle/>,
        <FaLinkedin/>
    ]
    return (
        <div className="w-full bg-[#0086AD] ">
            <div className="mx-auto container px-20 flex justify-between py-5">
                <div className="flex flex-col gap-5 items-start">
                    <h1 className="text-[25px] font-bold text-white">Insta Health</h1>
                    <p className="text-white w-[420px]">Eagerly want to join our community and get daily updates
                        about what we do in our daily live just connect with us</p>

                </div>
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-[25px] font-bold text-white">Quick Link</h1>
                    <div className="flex flex-col gap-2 items-center">
                        {
                            links.map((link, index) => (
                                <a key={index} href={link.path} className="text-white ">{link.name}</a>
                            ))
                        }

                    </div>


                </div>
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-[25px] font-bold text-white">Connect With Us</h1>
                    <div className="flex flex-col gap-2 items-center">
                        {
                            icons.map((link, index) => (
                                <a key={index} href="" className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#0086AD] ">{link}</a>
                            ))
                        }

                    </div>


                </div>

            </div>

        </div>
    )
}