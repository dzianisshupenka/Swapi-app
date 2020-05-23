import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";

import './app.css'
import SwapiService from "../../service/swapi-service";
import PeoplePage from "../people-page";
import Row from "../row";
import ItemDetails from "../item-details";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {

    }

    render() {
        const person = <ItemDetails
                                personId = {9}
                                getData = {this.swapiService.getPerson}
                                getImgUrl={this.swapiService.getPersonImage}/>
        const starship = <ItemDetails
                                personId = {5}
                                getData = {this.swapiService.getStarship}
                                getImgUrl={this.swapiService.getStarshipImage}/>
        return <div className='main'>
            <Header/>
            <RandomPlanet />
            <PeoplePage/>
            <Row left={person} right={starship}/>
        </div>
    }
}