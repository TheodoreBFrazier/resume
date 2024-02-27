import React from "react";
import { Link } from "react-router-dom";
import './navigation.css';

const Navigation = () => {
    return (
        <div>
            <div>
                <hr className="custom-hr-thick" />
            </div>
            <div className="navigation-container">
                <div className="navigation-header">
                    THEODORE FRAZIER
                </div>
                <nav>
                    <ul className="navigation-links">
                        <li>
                            1.
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            2.
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            3.
                            <Link to="/resume">
                                Resume
                            </Link>
                        </li>
                        <li>
                            4.
                            <Link to="/contact">
                                Work With Me
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <hr className="custom-hr-thin" />
                </div>
            </div>
        </div>
    )
}

export default Navigation;