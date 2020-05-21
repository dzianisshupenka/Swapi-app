import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";

import './app.css'
import ItemDetails from "../item-details";
import SwapiService from "../../service/swapi-service";
import PeoplePage from "../people-page";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {

    }

    render() {
        return <div className='main'>
            <Header/>
            <RandomPlanet />
            <PeoplePage/>
        </div>
    }
}