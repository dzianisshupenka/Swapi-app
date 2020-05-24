import React from "react";
import './item-list.css'
import SwapiService from "../../service/swapi-service";
import WithData from "../hoc-helpers";

const ItemList = (props) => {

    const {data, onItemSelected, children: rend} = props;
    const items = data.map((item) => {
        const {id} = item;
        const label = rend(item);
        return <li key={id}
                   className='list-group-item list-group-item-action'
                   onClick={() => onItemSelected(id)} >
                    {label}
                 </li>
    })

    return  <div className='item-list'>
                <ul className='list-group'>
                    {items}
                </ul>
            </div>

}

export default ItemList;