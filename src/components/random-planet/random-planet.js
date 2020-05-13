import React, {Component} from 'react';
import SwapiService from "../../service/swapi-service";

import './random-planet.css'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    updatePlanet () {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
            .then((planet) => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                })
            })
    }

    constructor () {
        super();
        this.updatePlanet();
    }




    render() {

        const { id, name, population, rotationPeriod, diameter } = this.state;

        return <div className='random-planet'>
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet 4"/>
            </div>
            <div>
                <h4>{name}</h4>
                <ul className='list-group'>
                    <li className='list-group-item list-group-item-action'>
                        <span className='bolder'>Population </span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item list-group-item-action'>
                        <span className='bolder'>Rotation period </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item list-group-item-action'>
                        <span className='bolder'>Diameter </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </div>
    }
}