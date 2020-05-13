import React, {Component} from "react";
import './item-list.css'

export default class ItemList extends Component {
    render() {
        return <div className='item-list'>
            <ul className='list-group'>
                <li className='list-group-item list-group-item-action'>R2-D2</li>
                <li className='list-group-item list-group-item-action'>Luke Skywalker</li>
                <li className='list-group-item list-group-item-action'>C-3PO</li>
            </ul>
        </div>
    }
}