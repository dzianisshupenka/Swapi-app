import React, {Component} from "react";
import './item-list.css'
import SwapiService from "../../service/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        personList : null
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((personList) => {
                this.setState({
                    personList
                });
            });
    }

    rend(arr) {
        return arr.map(({id, name})=>{
            return <li key={id}
                       className='list-group-item list-group-item-action'
                       onClick={() => this.props.onItemSelected(id)} >{name}</li>
        })
    }

    render() {
        const { personList } = this.state;
        if (!personList) {
            return <Spinner/>
        }
        const items= this.rend(personList);
        return <div className='item-list'>
            <ul className='list-group'>
                {items}
            </ul>
        </div>
    }
}