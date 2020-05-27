import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import WithSwapiService from "../hoc-helpers/with-swapiService";

const PlanetDetails = ({id, swapiService}) => {

    const {getPlanet, getPlanetImage} = swapiService;
    return(
            <ItemDetails
                personId = {id}
                getData = {getPlanet}
                getImgUrl={getPlanetImage}>
                <Record item='population' label = 'Population '/>
                <Record item='rotationPeriod' label = 'Rotation Period '/>
                <Record item='diameter' label = 'Diameter ' />
            </ItemDetails>
        )

};

export default WithSwapiService(PlanetDetails);