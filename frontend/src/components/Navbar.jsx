import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
// react icons
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // settoggle Menubar
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        };
    });

    const navItems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },
    ];



    return (
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-brandPrimary duration-300" : ""}`}>
                <div className="flex justify-between items-center space-x-3">
                    <a
                        href=""
                        className="text-2xl font-semibold flex item-center space-x-3"
                    >
                        <img src={logo} alt="" className="w-10 inline-block items-center" />
                        <span className="text-[#263238]">NEXTCENT</span>
                    </a>
                    {/* Nav Menu for large device*/}

                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map(({ link, path }) => (
                            <Link
                                to={path}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                key={path}
                                className="block text-base cursor-pointer text-grey900 hover:text-brandPrimary first:font-medium hover:underline underline-offset-8"
                            >
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/* button for big device*/}
                    <div className="space-x-12 hidden lg:flex items-center">
                        <a
                            href="/"
                            className="hidden lg:flex items-center text-black hover:text-grey900 hover:underline underline-offset-8"
                        >
                            Login
                        </a>
                        <button className="bg-brandPrimary text-white px-4 py-2 transition-all duration-300 rounded hover:bg-neutralDGray">
                            Sign Up
                        </button>
                    </div>

                    {/* button for small device*/}

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-neutralDGray focus:outline-none focus:text-gray-500">
                            {isMenuOpen ? (
                                <FaXmark className="h-6 w-6 text-neutralDGray" />
                            ) : (
                                <FaBars className="h-6 w-6 text-neutralDGray" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Nav Menu for small device*/}
                <div className={`space-y-4 px-4 py-7 ${isMenuOpen ? "block fixed top-50 left-0 right-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link
                            to={path}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            key={path}
                            className="block text-base text-grey900 hover:text-brandPrimary first:font-medium hover:underline underline-offset-8"
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
