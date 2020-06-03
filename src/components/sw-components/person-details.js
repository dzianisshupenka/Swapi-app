import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import WithSwapiService from "../hoc-helpers/with-swapiService";

const PersonDetails = (props) => {

    return(
            <ItemDetails {...props}>
                <Record item='gender' label = 'Gender '/>
                <Record item='birthYear' label = 'Birth year '/>
                <Record item='eyeColor' label = 'Eye color '/>
            </ItemDetails>
        )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImgUrl: swapiService.getPersonImage
    }
}

export default WithSwapiService (PersonDetails, mapMethodsToProps);
