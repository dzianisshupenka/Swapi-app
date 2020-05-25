import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";
import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

const PersonDetails = ({id}) => {
    return <SwapiServiceConsumer>
        {({getPerson, getPersonImage}) => <ItemDetails
                    personId = {id}
                    getData = {getPerson}
                    getImgUrl={getPersonImage}>
                    <Record item='gender' label = 'Gender '/>
                    <Record item='birthYear' label = 'Birth year '/>
                    <Record item='eyeColor' label = 'Eye color '/>
                </ItemDetails>}
    </SwapiServiceConsumer>
};

const StarshipDetails = ({id}) => {
    return <SwapiServiceConsumer>
        {({getStarship, getStarshipImage}) => <ItemDetails
                    personId = {id}
                    getData = {getStarship}
                    getImgUrl={getStarshipImage}>
                    <Record item='model' label = 'Model '/>
                    <Record item='manufacturer' label = 'Manufacturer '/>
                    <Record item='cost_in_credits' label = 'Cost ' />
                </ItemDetails>}
    </SwapiServiceConsumer>
};

const PlanetDetails = ({id}) => {
    return <SwapiServiceConsumer>
        {({getPlanet, getPlanetImage}) => <ItemDetails
                    personId = {id}
                    getData = {getPlanet}
                    getImgUrl={getPlanetImage}>
                    <Record item='population' label = 'Population '/>
                    <Record item='rotationPeriod' label = 'Rotation Period '/>
                    <Record item='diameter' label = 'Diameter ' />
                </ItemDetails>}
    </SwapiServiceConsumer>
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}