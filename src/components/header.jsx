import React, { useState } from 'react';
import Logo from "../assets/img/logo.svg";
import { Link } from "react-scroll";
import { Button } from "./Button";
import Cancel from "../assets/img/cancel.svg";
import Hamburger from "../assets/img/hamburger-menu.svg";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("");

    const handleNavToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className="header">
            <div className="header-wrapper">
                <a className="animate__animated animate__rubberBand" href="/">
                    <img className="logo" src={Logo} alt="Juice Logo" />
                </a>
                <div onClick={handleNavToggle} className="hamburger animate__animated animate__fadeInRight"><img src={Hamburger} alt="hamburger menu" /></div>
                <div className="navbar roobert-regular-normal-black-16px">
                    <Link
                        activeClass={active === "doc" ? "active" : ""}
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setActive("doc")}
                    >
                        <div className="nav-item">Documentation</div>
                    </Link>
                    <Link
                        activeClass={active === "ben" ? "active" : ""}
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setActive("ben")}
                    >
                        <div className="nav-item">Benefits</div>
                    </Link>
                    <Link
                        activeClass={active === "case" ? "active" : ""}
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setActive("case")}
                    >
                        <div className="nav-item">Use cases</div>
                    </Link>
                    <Link
                        activeClass={active === "gui" ? "active" : ""}
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setActive("gui")}
                    >
                        <div className="nav-item">Guidance</div>
                    </Link>
                </div>
                {toggle && (
                    <div className='navbar-mobile'>
                        <Link 
                            className="link animate__animated animate__fadeInRight"
                            activeClass={active === "doc" ? "active" : ""}
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => setActive("doc")}
                        >
                            Documentation
                        </Link>
                        <Link 
                            className="link animate__animated animate__fadeInRight"
                            activeClass={active === "ben" ? "active" : ""}
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => setActive("ben")}
                        >
                            Benefits
                        </Link>
                        <Link
                            className="link animate__animated animate__fadeInRight"
                            activeClass={active === "case" ? "active" : ""}
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => setActive("case")}
                        >
                        Use cases
                        </Link>
                        <Link
                            className="link animate__animated animate__fadeInRight"
                            activeClass={active === "gui" ? "active" : ""}
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => setActive("gui")}
                        >
                            Guidance
                        </Link>
                        <div onClick={handleNavToggle} className="cancel animate__animated animate__fadeInRight"><img src={Cancel} alt="cancel" /></div>

                        <a className='contact-us' href="/contact-us">
                            <Button>
                                Contact Us
                            </Button>
                        </a>
                    </div>
                )}
                
                <a className='contact-us' href="/contact-us">
                    <Button className="button-outline">
                        Contact Us
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default Header;

// const Nav = () => {
//     return (
//         <nav>
//             <div className="mx-auto container nav-wrapper">
//                 <div className="nav-container flex align-center justify-start space-y-4 py-6 md:justify-between md:space-y-0">
//                     <div className="flex justify-start">
//                         <a href="#">
//                             <img
//                                 className="h-5 w-auto sm:h-5"
//                                 src={Logo}
//                                 alt="Juice Logo"
//                             />
//                         </a>
//                     </div>
//                     <div className="flex space-x-12">
//                         <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
//                             Documentation
//                         </a>
//                         <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
//                             Benefits
//                         </a>
//                         <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
//                             Use cases
//                         </a>
//                         <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
//                             Guidance
//                         </a>
//                     </div>
//                     <div className="items-center justify-end">
//                         <Button
//                             variant="outline"
//                             border="border-black"
//                             color="text-black"
//                         >
//                             Contact Us
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Nav;

// import React from "react";


