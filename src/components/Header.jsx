import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div id="header">
        <div id="logo-container">
            <h1 id="logo"><span>My</span> Cozy Diary</h1>
        </div>

        <form action="/search" method="post">
            <input type="search" name="search" id="search" placeholder="Search"/>
            <button id="search-btn" type="submit">Search</button>
        </form>

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Browse</li>
                <li><Link to="/addpost">Add Post</Link></li>
                <li>Profile</li>
            </ul>
        </nav>
    </div>
    )
}

export default Header