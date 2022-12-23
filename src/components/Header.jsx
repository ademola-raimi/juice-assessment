import React, { useEffect, useState } from 'react';
import Logo from "../assets/img/logo.svg";
import { scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom"; 
import { Button } from "./Button";
import Cancel from "../assets/img/cancel.svg";
import Hamburger from "../assets/img/hamburger-menu.svg";
import "../assets/scss/header.scss";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            scrollTarget(location.state.target);
            setActive(location.state.menu);
        }
    }, [location]);

    const scrollTarget = (target) => scroller.scrollTo(target, {smooth: true, duration: 500, offset: -70});

    const scrollToPage = (target, menu) => {
        if (location.pathname !=='/') {
            navigate('/', {state: {target, menu}});
        }
        setActive(menu)
        scrollTarget(target);
        
    };

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
                    <div
                        className={active === "doc" ? "active" : ""}
                        onClick={() => scrollToPage('section1', 'doc')}
                    >
                        <div className="nav-item">Documentation</div>
                    </div>
                    <div
                        className={active === "ben" ? "active" : ""}
                        onClick={() => scrollToPage('section2', 'ben')}
                    >
                        <div className="nav-item">Benefits</div>
                    </div>
                    <div
                        className={active === "case" ? "active" : ""}
                        onClick={() => scrollToPage('section3', 'case')}
                    >
                        <div className="nav-item">Use cases</div>
                    </div>
                    <div
                        className={active === "gui" ? "active" : ""}
                        onClick={() => scrollToPage('section4', 'gui')}
                    >
                        <div className="nav-item">Guidance</div>
                    </div>
                </div>
                {toggle && (
                    <div className='navbar-mobile'>
                        <div
                            className={active === "doc" ? "active" : ""}
                            onClick={() => scrollToPage('section1', 'doc')}
                        >
                            Documentation
                        </div>
                        <div
                            className={active === "ben" ? "active" : ""}
                            onClick={() => scrollToPage('section2', 'ben')}
                        >
                            Benefits
                        </div>
                        <div
                            className={active === "case" ? "active" : ""}
                            onClick={() => scrollToPage('section3', 'case')}
                        >
                            Use cases
                        </div>
                        <div
                            className={active === "doc" ? "active" : ""}
                            onClick={() => scrollToPage('section4', 'gui')}
                        >
                            Guidance
                        </div>
                        <div onClick={handleNavToggle} className="cancel animate__animated animate__fadeInRight"><img src={Cancel} alt="cancel" /></div>

                        <a className='contact-us' href="/contact-us">
                            <Button className="roobert-bold-black-16px">
                                Contact Us
                            </Button>
                        </a>
                    </div>
                )}
                
                <a className='contact-us' href="/contact-us">
                    <Button className="button-outline roobert-bold-black-16px">
                        Contact Us
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default Header;
