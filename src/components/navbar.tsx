import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const tabs = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/our-doctors/departments" },
        { name: "Packages", path: "/package" },
        { name: "Contact Us", path: "/help/customer" },
        { name: "Market Place", path: "/market" },
    ];

    const locationButton = [
        { name: "Login", path: "/auth/patient/login", style: "bg-white text-[#0086AD] border-[#0086AD] border-[1.5px]" },
        { name: "Sign up", path: "/auth/patient/signup", style: "bg-[#0086AD] text-white" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav
            className={`py-4 h-[4rem] shadow-sm sticky top-0 transition-all duration-300 z-50 ${isScrolled
                ? "bg-white bg-opacity-70 backdrop-blur-md"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-16">
                <div className="flex justify-between items-center gap-4">
                    <img src="/log.png" alt="Logo" className="w-10 h-10" />
                    <h1 className="text-[20px] font-bold text-[#0086AD]">Insta Health</h1>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="block lg:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes className="text-[#0086AD]" size={30} /> : <FaBars className="text-blue-500" size={30} />}
                </div>

                {/* Navbar Items */}
                <ul className={`lg:flex space-x-10 items-center ${isMenuOpen ? "flex-col absolute top-[4rem] left-0 w-full bg-white shadow-md p-4 lg:flex lg:flex-row" : "hidden lg:flex"}`}>
                    {tabs.map((tab, index) => (
                        <li key={index}>
                            <a
                                href={tab.path}
                                className="text-gray-600 hover:text-[#0086AD] transition-colors"
                            >
                                {tab.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Login and Sign Up Buttons */}
                <ul className="hidden lg:flex space-x-6">
                    {locationButton.map((tab, index) => (
                        <li key={index} className={`${tab.style} w-24 h-9 rounded-md flex items-center justify-center`}>
                            <a href={tab.path} className="transition-colors">
                                {tab.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
