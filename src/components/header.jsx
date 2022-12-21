import React, { Fragment } from "react";
import Logo from "../assets/img/logo.svg";
import Button from "../components/button";


const Header = () => {
    return (
        <div className="nav">
            <div className="mx-auto max-w-8.5xl px-4 sm:px-6">
                <div className="flex items-center justify-start space-y-4 py-6 md:justify-between md:space-y-0">
                    <div className="flex justify-start">
                        <a href="#">
                            <img
                                className="h-5 w-auto sm:h-5"
                                src={Logo}
                                alt="Juice Logo"
                            />
                        </a>
                    </div>
                    <div className="flex space-x-12">
                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                            Documentation
                        </a>
                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                            Benefits
                        </a>
                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                            Use cases
                        </a>
                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                            Guidance
                        </a>
                    </div>
                    <div className="items-center justify-end">
                        <Button
                            variant="outline"
                            border="border-black"
                            color="text-black"
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default Header;
