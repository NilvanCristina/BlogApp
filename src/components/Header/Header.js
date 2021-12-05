import React from "react";
import './Header.css'

function Header() {

    return (
        <div className="Header">
            <div className="HeaderTitle">
                <h3>IT Blog</h3>
            </div>

            <img className="HeaderImage" src={"https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} alt="img"/>
        </div>
    )
}

export default Header;