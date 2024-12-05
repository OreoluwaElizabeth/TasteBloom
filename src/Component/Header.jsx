import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="icon-logo">
                <GiKnifeFork />
                <h2>
                    <span>Taste</span>
                    <span className="bloom">Bloom</span>
                </h2>
            </div>
            <nav>
                <ul>
                    <li><a href="http://localhost:3000/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="btn">
                <Link to="/signup" className="signup-btn">Signup</Link>
                <Link to="/login" className="signup-btn">Login</Link>
            </div>
        </div>
    )
};

export default Header;