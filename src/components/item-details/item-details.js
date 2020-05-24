import React, {Component} from "react";
import './person-details.css'

const Record = ( {person, item, label} ) => {
    return(
        <li className='list-group-item list-group-item-action'>
            <span className='bolder'>{label}</span>
            <span>{person[item]}</span>
        </li>
    )
}

export {
    Record
}

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
        debugger
        const {person, img} = this.state;
        const {name, id, gender, birthYear, eyeColor } = person;
        return <div className='person-details'>
                    <div>
                        <h4>{name}</h4>
                    </div>
                    <div className='img-list'>
                        <img src={img} alt={`character ${id}`}/>
                        <ul className='list-group'>
                            {
                                React.Children.map(this.props.children, (ch) => {
                                    return React.cloneElement(ch, {person})
                                })
                            }
                        </ul>
                    </div>
                    <ErrorButton/>
                </div>
    }
}