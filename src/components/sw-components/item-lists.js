import ItemList from "../item-list";
import React from "react";
import SwapiService from "../../service/swapi-service";
import WithData from "../hoc-helpers";

const swapiService = new SwapiService();

const {getAllPeople, getAllPlanets, getAllStarships} = swapiService;

const PersonList = WithData(ItemList, getAllPeople)
const PlanetList = WithData(ItemList, getAllPlanets)
const StarshipList = WithData(ItemList, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}