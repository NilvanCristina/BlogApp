import React from "react";
import './Header.css'

function Header() {

    const wallpaperImage = 'url("https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")';

    return (
        <div className="Header" style={{ backgroundImage: `${wallpaperImage}` }}>
            <div className="HeaderTitle">
                <h3>IT Blog</h3>
            </div>

        </div>
    )
}

export default Header;