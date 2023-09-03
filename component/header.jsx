import React from "react";
import '../src/App.css';
import FacebookLogo from "../images/logo.png"

const Header = () => {
    
    return(

    <nav>
    <div className="nav1"><img className="logo" src={FacebookLogo}></img>
    <form action="search" className="search">
        <input type="text" placeholder="Search Facebook" />
    </form>
    </div>
    <div className="nav2">
        <a href="#">Home</a>
        <a href="#">Friends</a>
        <a href="#">Video</a>
        <a href="#">Marketplace</a>
        <a href="#">Groups</a>

    </div>
    <div className="nav3">
    <a href="#">Menu</a>
        <a href="#">Massanger</a>
        <a href="#">Notifications</a>
        <a href="#">Accont</a>
    </div>
    </nav>

    )

}

export default Header