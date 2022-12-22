import React from 'react';
import Logo from "../assets/img/logo.svg";
import { Button } from "./button";
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


