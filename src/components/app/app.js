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
import {StarshipDetails} from "../sw-components";

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
                        <Route path='/' render={() => <h2>Welcome to StarDB!</h2>} exact/>
                        <Route path='/people/:id?' component={PeoplePage} />
                        <Route path='/planets/' component={PlanetPage} />
                        <Route path='/starships/' exact component={StarshipPage} />
                        <Route path='/starships/:id' render={({match}) => {
                            const {id} = match.params;
                            return <StarshipDetails itemId={id}/>
                        }} />
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundary>
        </div>
    }
}
