import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import {SwapiServiceProvider} from "../swapi-service-context";

import './app.css'
import Row from "../row";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../service/swapi-service";

export default class App extends Component {
    state = {

    }

    swapiService = new SwapiService();

    render() {
        return <div className='main'>
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <Header/>
                    <RandomPlanet />
                    <Row left={<PersonList />} right={<PersonDetails itemId={5}/>}/>
                    <Row left={<PlanetList />} right={<PlanetDetails itemId={8}/>}/>
                    <Row left={<StarshipList />} right={<StarshipDetails itemId={10}/>}/>
                </SwapiServiceProvider>
            </ErrorBoundary>

        </div>
    }
}
