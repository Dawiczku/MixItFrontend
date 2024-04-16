import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Updated import statement

function Navbar() {
    return (
        <div className="navbar">
            <div>
            <Link to="/">TODO Social media icons</Link>
            </div>
            <div>
            <Link to="/">ZapitaTech</Link>
            </div>
            <div>
            <Link to="/drinks-menu">TODO Search bar</Link>
            </div>
        </div>
    );
}

export default Navbar;
