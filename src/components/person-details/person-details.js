import React, {Component} from "react";

import './person-details.css'

export default class PersonDetails extends Component {
    render() {
        return <div className='person-details'>
            <div>
                <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt="character 1"/>
            </div>
            <div>
                <h4>Luke Skywalker</h4>
                <ul className='list-group'>
                    <li className='list-group-item list-group-item-action'>Gender: male</li>
                    <li className='list-group-item list-group-item-action'>Birth Year: 55</li>
                    <li className='list-group-item list-group-item-action'>Eye color: red</li>
                </ul>
            </div>
        </div>
    }
}