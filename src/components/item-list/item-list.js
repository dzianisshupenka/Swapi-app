import React, {Component} from "react";
import './item-list.css'
import SwapiService from "../../service/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        personList : null,
        loading: true,
        error: false
    };

    onError() {
        this.setState( {
            error: true,
            loading: false
        } )
    }

    onPersonListLoaded = (personList) => {
        this.setState({
            personList,
            loading: false
        })
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then(this.onPersonListLoaded)
            .catch(() => this.onError())
    }

    rend(arr) {
        return arr.map(({id, name})=>{
            return <li key={id}
                       className='list-group-item list-group-item-action'
                       onClick={() => this.props.onItemSelected(id)} >{name}</li>
        })
    }

    render() {
        const { personList, loading, error } = this.state;
        const errorMessage = error ? <ErrorIndicator/> : null
        const spinner = loading ? <Spinner/> : null
        const items = personList ? this.rend(personList): null

        return <div className='item-list'>
            <ul className='list-group'>
                {spinner}
                {errorMessage}
                {items}
            </ul>
        </div>
    }
}