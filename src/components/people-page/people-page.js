import React, {Component} from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../service/swapi-service";
import Row from "../row";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    }

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        const personDetails = <ItemDetails personId={this.state.selectedPerson}/>

        const itemList = <ItemList onItemSelected={this.onItemSelected}
                                   getData={this.swapiService.getAllPeople}>
                                     {(i) => (`${i.name} (Birth year: ${i.birthYear})`)}
                        </ItemList>

        return <Row left={itemList} right={personDetails}/>

    }
}