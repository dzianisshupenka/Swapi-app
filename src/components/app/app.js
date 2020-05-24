import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";

import './app.css'
import PeoplePage from "../people-page";
import Row from "../row";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";

export default class App extends Component {
    state = {

    }

    render() {
        return <div className='main'>
            <Header/>
            <RandomPlanet />
            {/*<PeoplePage/>*/}
            <Row left={<PersonList>{(i) => (`${i.name}`)}</PersonList>} right={<PersonDetails id={5}/>}/>
            <Row left={<PlanetList>{(i) => (`${i.name}`)}</PlanetList>} right={<PlanetDetails id={8}/>}/>
            <Row left={<StarshipList>{(i) => (`${i.name}`)}</StarshipList>} right={<StarshipDetails id={10}/>}/>
        </div>
    }
}