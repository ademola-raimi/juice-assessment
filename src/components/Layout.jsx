import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) =>  {
    const { className, children } = props;
    return (
        <div className={`main ${className || ""}`}>
            <Header />
                {children}
            <Footer />
        </div>
    );
};

export default Layout;