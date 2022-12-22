import React from "react";
import { Link } from "react-router-dom";
import SmallLogo from "../assets/img/logo-small.svg"

const Footer = () => {
    return (
        <footer className="bg-purple py-16 w-full">
            <div className="mx-auto w-full xl:max-w-5.2xl grid grid-cols-2 space-y-4 lg:grid-cols-4 lg:space-y-0">
                <div className="flex space-x-4 items-start">
                    <img src={SmallLogo} alt="Juice logo" width={32} className="logo-shor" />
                    <p className="text-sm leading-8">©2022 Juice Africa.<br/>All rights reserved.</p>
                </div>
                <div className="space-y-4">
                    <h4 className="mt-0">Resources</h4>
                    <ul className="space-y-4">
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Articles</a></li>
                        {/* <Link href="#"><li>Documentation</li></Link>
                        <Link href="#"><li>Articles</li></Link> */}
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="mt-0">Legal</h4>
                    <ul className="space-y-4">
                        <li><a href="#">Terms & conditions</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="mt-0">Company</h4>
                    <ul className="space-y-4">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;