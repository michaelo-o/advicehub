import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";

const Layout = ({ children }) => {


    return (
        <div className="layoutcomponent">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;