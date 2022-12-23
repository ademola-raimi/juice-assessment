import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "./Button";

import FadLogo from "../assets/img/fad_logo-fl.svg";
import RewireLogo from "../assets/img/fad_logo-rewire.svg";
import GithubLogo from "../assets/img/carbon_logo-github.svg";
import VmWareLogo from "../assets/img/carbon_logo-vmware.svg";

const Banner = () => {

    return (
        <div className="banner-bg">
            <div className="banner-wrapper">
                <div className="banner-main">
                    <h1 className="animate__animated animate__bounce roobert-bold-black-56px">Everything you need for reliable global payments</h1>
                    <p className="roobert-regular-normal-black-18px">Juice is an ecosystem of services making business cross border payment less complex, more reliable and compliant than ever before.</p>
                    
                    <Link to="/contact-us">
                        <Button className="animate__animated animate__swing button-black-bg banner-contact">
                            Contact Us
                        </Button>
                    </Link>
                </div>
                <div className="banner-credentials">
                    <div className="credentials-icons">
                        <img src={RewireLogo} alt="" />
                        <img src={FadLogo} alt="" />
                        <img src={GithubLogo} alt="" />
                        <img src={VmWareLogo} alt="" />
                        <img src={RewireLogo} alt="" />
                        <img src={FadLogo} alt="" />
                    </div>
                    <p className="roobert-regular-normal-grey-12px">DIVERSE INDUSTRY LEADERS TRUST JUICE</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
