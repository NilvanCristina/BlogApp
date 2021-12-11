import React from "react";
import './Navbar.css'
import {Link} from "react-router-dom";

function Navbar() {

    return (
        <div className="Navbar">
            <div className="TopLeft">
                <h4>Blog</h4>
            </div>

            <div className="TopCenter">
                <ul className="TopList">
                    <li className="TopListItem">
                        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>Home</Link>
                    </li>
                    <li className="TopListItem">
                        <Link to="/contact" style={{textDecoration:"none", color:"inherit"}}>Contact</Link>
                    </li>
                    <li className="TopListItem">
                        <Link to="/newsletter" style={{textDecoration:"none", color:"inherit"}}>Newsletter</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;