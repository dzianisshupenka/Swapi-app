import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";
import React from "react";
import SwapiService from "../../service/swapi-service";

const swapiService = new SwapiService()
const {getPerson, getPersonImage, getStarship, getStarshipImage, getPlanet, getPlanetImage} = swapiService;

const PersonDetails = ({id}) => {
    return <ItemDetails
                personId = {id}
                getData = {getPerson}
                getImgUrl={getPersonImage}>
                <Record item='gender' label = 'Gender '/>
                <Record item='birthYear' label = 'Birth year '/>
                <Record item='eyeColor' label = 'Eye color '/>
            </ItemDetails>};
const StarshipDetails = ({id}) => {
    return <ItemDetails
                personId = {id}
                getData = {getStarship}
                getImgUrl={getStarshipImage}>
                <Record item='model' label = 'Model '/>
                <Record item='manufacturer' label = 'Manufacturer '/>
                <Record item='cost_in_credits' label = 'Cost ' />
            </ItemDetails>
};
const PlanetDetails = ({id}) => {
    return <ItemDetails
                personId = {id}
                getData = {getPlanet}
                getImgUrl={getPlanetImage}>
                <Record item='population' label = 'Population '/>
                <Record item='rotationPeriod' label = 'Rotation Period '/>
                <Record item='diameter' label = 'Diameter ' />
            </ItemDetails>
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}