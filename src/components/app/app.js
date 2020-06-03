import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import {SwapiServiceProvider} from "../swapi-service-context";

import './app.css'
import Row from "../row";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../service/swapi-service";
import DummySwapiService from "../../service/dummy-swapi-service";

export default class App extends Component {
    state = {
        swapiService: new SwapiService()
    }

    onServiceChange = () => {

        const service = this.state.swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

        console.log(service);

        this.setState(({swapiService}) => {
            return{
                swapiService: new service
            }
        })
    }

    render() {
        return <div className='main'>
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Header onServiceChange={this.onServiceChange}/>
                    <RandomPlanet />
                    <Row left={<PersonList />} right={<PersonDetails itemId={5}/>}/>
                    <Row left={<PlanetList />} right={<PlanetDetails itemId={8}/>}/>
                    <Row left={<StarshipList />} right={<StarshipDetails itemId={10}/>}/>
                </SwapiServiceProvider>
            </ErrorBoundary>

        </div>
    }
}
