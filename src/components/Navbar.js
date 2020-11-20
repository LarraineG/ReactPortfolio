import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <Link className="navbar-brand" to="/">
                Larraine Gonzales
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "ReactPortfolio-HW-20/" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={window.location.pathname === "ReactPortfolio-HW-20/contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/projects"
                            className={window.location.pathname === "ReactPortfolio-HW-20/projects" ? "nav-link active" : "nav-link"}
                        >
                            Projects
                        </Link>
                        </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;