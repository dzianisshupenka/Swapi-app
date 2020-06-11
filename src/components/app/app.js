import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import {SwapiServiceProvider} from "../swapi-service-context";

import './app.css'
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../service/swapi-service";
import DummySwapiService from "../../service/dummy-swapi-service";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";
import {BrowserRouter, Route} from "react-router-dom";

export default class App extends Component {
    state = {
        swapiService: new SwapiService()
    }

    onServiceChange = () => {

        const service = this.state.swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

        console.log(service);

        this.setState(({swapiService}) => {
            return{
                swapiService: new service()
            }
        })
    }

    render() {
        return <div className='main'>
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <BrowserRouter>
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet />
                        <Route path='/people' component={PeoplePage} />
                        <Route path='/planets' component={PlanetPage} />
                        <Route path='/starships' component={StarshipPage} />
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundary>
        </div>
    }
}
