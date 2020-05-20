import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";

import './app.css'
import PersonDetails from "../person-details";

export default class App extends Component {

    state ={
        selectedPerson: 1
    }

    onItemSelected= (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        return <div className='main'>
            <Header/>
            <RandomPlanet />
            <div className='person-list'>
                <ItemList onItemSelected={this.onItemSelected}/>
                <PersonDetails personId={this.state.selectedPerson} />
            </div>
        </div>
    }
}