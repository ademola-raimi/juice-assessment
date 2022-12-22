import React from "react";
import Header from "./header";
import Footer from "../components/footer";

const Layout = ( {children} ) =>  {
    return (
        <div className="main">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;