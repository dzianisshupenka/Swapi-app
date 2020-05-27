import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import WithSwapiService from "../hoc-helpers/with-swapiService";

const StarshipDetails = ({id, swapiService}) => {

    const {getStarship, getStarshipImage} = swapiService;
    return (
            <ItemDetails
                personId = {id}
                getData = {getStarship}
                getImgUrl={getStarshipImage}>
                <Record item='model' label = 'Model '/>
                <Record item='manufacturer' label = 'Manufacturer '/>
                <Record item='cost_in_credits' label = 'Cost ' />
            </ItemDetails>
        )
};

export default WithSwapiService(StarshipDetails);