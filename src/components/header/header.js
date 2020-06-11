import React from "react";
import './header.css';
import {Link} from "react-router-dom";

const Header = ({onServiceChange}) => {
    return <div className='nav '>
        <h3>
            <a href="/people">
                StarWars Database
            </a>
        </h3>
        <ul>
            <li>
                <Link to='/people'>People</Link>
            </li>
            <li>
                <Link to='/planets'>Planets</Link>
            </li>
            <li>
                <Link to='/starships'>Starships</Link>
            </li>
            <button onClick={onServiceChange} className={"btn btn-primary"}>Change Context</button>
        </ul>

    </div>
}

export default Header;
