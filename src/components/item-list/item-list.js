import React, {Component} from "react";
import './item-list.css'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class ItemList extends Component {

    state = {
        itemList : null,
        loading: true,
        error: false
    };

    onError() {
        this.setState( {
            error: true,
            loading: false
        } )
    }

    onPersonListLoaded = (itemList) => {
        this.setState({
            itemList,
            loading: false
        })
    }

    componentDidMount() {
       const { getData } = this.props;
            getData()
            .then(this.onPersonListLoaded)
            .catch(() => this.onError())
    }

    rend(arr) {
        return arr.map((item)=>{
            const { id } = item;
            const label = this.props.children(item);
            return <li key={id}
                       className='list-group-item list-group-item-action'
                       onClick={() => this.props.onItemSelected(id)} >{label}</li>
        })
    }

    render() {
        const { itemList, loading, error } = this.state;
        const errorMessage = error ? <ErrorIndicator/> : null
        const spinner = loading ? <Spinner/> : null
        const items = itemList ? this.rend(itemList): null

        return <div className='item-list'>
            <ul className='list-group'>
                {spinner}
                {errorMessage}
                {items}
            </ul>
        </div>
    }
}