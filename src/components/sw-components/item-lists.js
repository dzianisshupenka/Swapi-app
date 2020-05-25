import ItemList from "../item-list";
import React from "react";
import SwapiService from "../../service/swapi-service";
import WithData from "../hoc-helpers";

const swapiService = new SwapiService();

const {getAllPeople, getAllPlanets, getAllStarships} = swapiService;

const renderName = ({name}) => <span>{name}</span>;

const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;

const Wrapped = (Item, fn) => {
    return (props) => {
        return <Item {...props}>
                    {fn}
                </Item>
    }
}

const PersonList = WithData(Wrapped(ItemList, renderName), getAllPeople)
const PlanetList = WithData(Wrapped(ItemList, renderName), getAllPlanets)
const StarshipList = WithData(Wrapped(ItemList, renderNameAndModel), getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}