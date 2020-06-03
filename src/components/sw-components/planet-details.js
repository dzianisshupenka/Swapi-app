import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import WithSwapiService from "../hoc-helpers/with-swapiService";

const PlanetDetails = (props) => {

    return(
            <ItemDetails {...props}>
                <Record item='population' label = 'Population '/>
                <Record item='rotationPeriod' label = 'Rotation Period '/>
                <Record item='diameter' label = 'Diameter ' />
            </ItemDetails>
        )
};

const mapMethodsToProps = (swapiService) => {
   return {
        getData: swapiService.getPlanet,
        getImgUrl: swapiService.getPlanetImage
   }
}

export default WithSwapiService(PlanetDetails, mapMethodsToProps);
