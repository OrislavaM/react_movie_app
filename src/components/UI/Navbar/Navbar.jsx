import styles from "./navbar.module.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./My_Movies_logo.png";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_links}>
                <Link to="/">
                    <img
                        className={styles.navbar_logo}
                        src={logo}
                        alt="movie_logo"
                    />
                </Link>
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
