import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";

import './app.css'

export default class App extends Component {
    render() {
        return <div className='main'>
            <Header/>
            <RandomPlanet />
            <ItemList />
        </div>
    }
}