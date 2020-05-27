import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import WithSwapiService from "../hoc-helpers/with-swapiService";

const PersonDetails = ({id, swapiService}) => {

    const {getPerson, getPersonImage } = swapiService;

    return(
            <ItemDetails
                personId = {id}
                getData = {getPerson}
                getImgUrl={getPersonImage}>
                <Record item='gender' label = 'Gender '/>
                <Record item='birthYear' label = 'Birth year '/>
                <Record item='eyeColor' label = 'Eye color '/>
            </ItemDetails>
        )
};

export default WithSwapiService (PersonDetails);