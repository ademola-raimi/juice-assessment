import React from "react";
import { Link } from "react-router-dom";
import SmallLogo from "../assets/img/logo-small.svg"

const Footer = () => {
    return (
        <footer>
            <div className="container footer-wrapper">
                <div className="footer-1">
                    <img src={SmallLogo} alt="Juice logo" width={32} />
                    <p className="roobert-regular-normal-black-14px">
                        &copy; 2022 Juice Africa.<br/>All rights reserved.
                    </p>
                </div>
                <div className="footer-2">
                    <h4 className="roobert-bold-black-long-18px">Resources</h4>
                    <ul className="footer-links">
                        <a href="https://docs.spendjuice.org/docs" rel="noopener noreferrer" target="_blank">
                            <li className="roobert-regular-normal-black-long-16px">Documentation</li>
                        </a>
                        <Link to="/articles">
                            <li className="roobert-regular-normal-black-long-16px">Articles</li>
                        </Link>
                    </ul>
                </div>
                <div className="footer-3">
                    <h4 className="roobert-bold-black-long-18px">Legal</h4>
                    <ul className="space-y-4">
                        <Link to="/terms-conditions">
                            <li className="roobert-regular-normal-black-long-16px">Terms & conditions</li>
                        </Link>
                    </ul>
                </div>
                <div className="footer-4">
                    <h4 className="roobert-bold-black-long-18px">Company</h4>
                    <ul className="space-y-4">
                        <Link to="/about-us">
                            <li className="roobert-regular-normal-black-long-16px">About us</li>
                        </Link>
                        <Link to="/contact-us">
                            <li className="roobert-regular-normal-black-long-16px">Contact us</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;