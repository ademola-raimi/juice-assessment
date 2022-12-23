import React from 'react';
import Logo from "../assets/img/logo.svg";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <div className="header-wrapper">
                <Link to="/">
                    <img className="logo" src={Logo} alt="Juice Logo" />
                </Link>
                <div className="navbar roobert-regular-normal-black-16px">
                    <Link to="/">
                        <div className="nav-item">Documentation</div>
                    </Link>
                    <Link to="/">
                        <div className="nav-item">Benefits</div>
                    </Link>
                    <Link to="/">
                        <div className="nav-item">Use cases</div>
                    </Link>
                    <Link to="/">
                        <div className="nav-item">Guidance</div>
                    </Link>
                </div>
                <Link to="/contact-us">
                    <Button className="button-outline">
                        Contact Us
                    </Button>
                </Link>
            </div>
            
        </div>
    );
}

export default Header;
