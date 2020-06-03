import ItemList from "../item-list";
import React from "react";
import WithData from "../hoc-helpers";
import WithSwapiService from "../hoc-helpers/with-swapiService";

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapStarshipsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const Wrapped = (Item, fn) => {
    return (props) => {
        return <Item {...props}>
                    {fn}
                </Item>
    }
}

const PersonList = WithSwapiService(WithData(Wrapped(ItemList, renderName)), mapPersonMethodsToProps) ;
const PlanetList = WithSwapiService(WithData(Wrapped(ItemList, renderName)), mapPlanetMethodsToProps);
const StarshipList =WithSwapiService(WithData(Wrapped(ItemList, renderNameAndModel)), mapStarshipsMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}
