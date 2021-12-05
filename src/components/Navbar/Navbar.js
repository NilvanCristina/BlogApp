import React from "react";
import './Navbar.css'

function Navbar() {

    return (
        <div className="Navbar">
            <div className="TopLeft">
                <h4>Blog</h4>
            </div>

            <div className="TopCenter">
                <ul className="TopList">
                    <li className="TopListItem">Home</li>
                    <li className="TopListItem">Contact</li>
                    <li className="TopListItem">Newsletter</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;