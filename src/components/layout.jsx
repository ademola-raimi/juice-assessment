import React from "react";
import Header from "./header";
import Footer from "./footer";

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