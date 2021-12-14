import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_links">
                <ul>
                    <li>
                        <NavLink to="/">Popular Movie</NavLink>
                    </li>
                    <li>
                        <NavLink to="/watch-list">Watch List</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
