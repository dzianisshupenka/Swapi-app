import React, {Component} from 'react';
import SwapiService from "../../service/swapi-service";

import './random-planet.css'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval( this.updatePlanet, 15000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    }

    onError (err) {
        this.setState( {
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(() => this.onError())
    }

    render() {
        const { planet, loading, error } = this.state;
        const hasData = !( loading || error ) ;
        const errorMessage= error ? <ErrorIndicator/> : null
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return <div className='random-planet'>
            {errorMessage}
            {spinner}
            {content}
        </div>
    }
}

const PlanetView = ({planet}) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    return <React.Fragment>
                <div>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`planet ${id}`}/>
                </div>
                <div>
                    <h4>{name}</h4>
                    <ul className='list-group'>
                        <li className='list-group-item list-group-item-action'>
                            <span className='bolder'>Population </span>
                            <span>{population}</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                            <span className='bolder'>Rotation period </span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                            <span className='bolder'>Diameter </span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </React.Fragment>

}