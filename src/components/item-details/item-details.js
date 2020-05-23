import React, {Component} from "react";

import './person-details.css'
import SwapiService from "../../service/swapi-service";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

class ErrorButton extends Component {

    state = {
        renderError: false
    };

    render() {
        if (this.state.renderError) {
            this.foo.bar = 0;
        }

        return (
            <button
                className="error-button btn btn-danger btn-lg"
                onClick={() => this.setState({renderError: true})}>
                Throw Error
            </button>
        );
    }
}

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: {},
        loading: false,
        error: false,
        img: null
    }

    componentDidMount() {
        if (!this.state.person) {
            return;
        }

        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.personId !== prevProps.personId) {
            if (prevState.loading == false) {
                this.setState({
                    loading: true
                })
                this.updatePerson()
            }
        }
    }

    onPersonLoaded = (person) => {
        this.setState( {
            person,
            loading: false,
            img: this.props.getImgUrl(person)
        })
    }

    onError() {
        this.setState( {
            error: true,
            loading: false
        } )
    }

    updatePerson() {
        const { personId, getData } = this.props;
        getData(personId)
            .then(this.onPersonLoaded)
            .catch(() => this.onError())
    }

    render() {
        const {error, loading, person, img} = this.state
        const hasData = !( loading || error ) ;
        const spinner = loading ? <Spinner/> : null
        const errorMessage = error ? <ErrorIndicator/> : null
        const personData = hasData ? <PersonView person={person} img={img}/> : null


        return <div className='person-details'>
            {spinner}
            {errorMessage}
            {personData}
        </div>
    }
}

const PersonView = ({person, img}) => {

    if (!person) {
        return <span>Select a person from a list</span>;
    }

    const { id, name, gender, birthYear, eyeColor } = person;
        return <React.Fragment>
            <div>
                <h4>{name}</h4>
            </div>
            <div className='img-list'>
                <img src={img} alt={`character ${id}`}/>
                <ul className='list-group'>
                    <li className='list-group-item list-group-item-action'>
                        <span className='bolder'>Gender </span>
                        <span>{gender ? gender: ""}</span>
                    </li>
                    <li className='list-group-item list-group-item-action'>
                        <span className='bolder'>Birth Year </span>
                        <span>{birthYear ? birthYear : ""}</span>
                    </li>
                    <li className='list-group-item list-group-item-action'>
                        <span className='bolder'>Eye color </span>
                        <span>{eyeColor  ? eyeColor : ""}</span>
                    </li>
                </ul>
            </div>
            <ErrorButton/>
        </React.Fragment>
}