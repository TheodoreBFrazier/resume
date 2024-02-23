import React from "react";
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
                            1. Home
                        </li>
                        <li>
                            2. About
                        </li>
                        <li>
                            3. Resume
                        </li>
                        <li>
                            4. Work With Me
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