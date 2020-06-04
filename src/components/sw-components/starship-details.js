import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import WithSwapiService from "../hoc-helpers/with-swapiService";

const StarshipDetails = (props) => {

    return (
            <ItemDetails {...props}>
                <Record item='model' label = 'Model '/>
                <Record item='manufacturer' label = 'Manufacturer '/>
                <Record item='cost_in_credits' label = 'Cost ' />
            </ItemDetails>
        )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImgUrl: swapiService.getStarshipImage
    }
}

export default WithSwapiService(StarshipDetails)(mapMethodsToProps);
