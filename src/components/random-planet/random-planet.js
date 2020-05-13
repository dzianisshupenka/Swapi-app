import React from 'react';

import './random-planet.css'

export default class RandomPlanet extends React.Component {
    render() {
        return <div className='random-planet'>
            <div>
                <img src="https://starwars-visualguide.com/assets/img/planets/4.jpg" alt="planet 4"/>
            </div>
            <div>
                <h4>Planet name</h4>
                <ul className='list-group'>
                    <li className='list-group-item list-group-item-action'>Population: 1654684</li>
                    <li className='list-group-item list-group-item-action'>Rotation period: 85</li>
                    <li className='list-group-item list-group-item-action'>Diameter : 5895</li>
                </ul>
            </div>
        </div>
    }
}