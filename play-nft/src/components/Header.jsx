import React from "react";
import '../css/header.css'

const Header = () => {
    return (
        <nav className="navbar">
            <div className="nav-left-items">
                <span>
                    PLAY <span>NFT</span>
                </span>
            </div>
            <div className="nav-center-items">
                <ul>
                    <li className="nav-links"><a href="#">Home</a></li>
                    <li className="nav-links"><a href="#">Explore</a></li>
                    <li className="nav-links"><a href="#">Marketplace</a></li>
                    <li className="nav-links"><a href="#">Artists</a></li>
                    <li className="nav-links"><a href="#">News</a></li>
                </ul>
            </div>
            <div className="nav-right-items">
                <button className="search">
                    Search
                </button>
                <button className="register">
                    Register
                </button>
            </div>
        </nav>
    )
}

export default Header;