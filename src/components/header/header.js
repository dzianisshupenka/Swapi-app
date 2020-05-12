import React from "react";
import './header.css';

const Header = () => {
    return <div className='nav '>
        <h3>
            <a href="#">
                StarWars Database
            </a>
        </h3>
        <ul>
            <li><a href="#">People</a></li>
            <li><a href="#">Planets</a></li>
            <li><a href="#">Starships</a></li>
        </ul>

    </div>
}

export default Header;