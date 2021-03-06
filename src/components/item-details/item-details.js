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
        person: null,
        loading: false,
        error: false,
        img: null
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.itemId !== prevProps.itemId ||
           this.props.getData !== prevProps.getData ||
           this.props.getImgUrl !== prevProps.getImgUrl) {
            if (prevState.loading === false) {
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
        const { itemId, getData } = this.props;
        getData(itemId)
            .then(this.onPersonLoaded)
            .catch(() => this.onError())
    }

    render() {

        const {person, img} = this.state;
        if(!person) {
            return <div className='person-details'>Select item please</div>
        }
        const {name, id} = person;
        return <div className='person-details'>
                    <div>
                        <h4>{name}</h4>
                    </div>
                    <div className='img-list'>
                        <img src={img} alt={`character ${id}`}/>
                        <ul className='list-group'>
                            {
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, {person})
                                })
                            }
                        </ul>
                    </div>
                    <ErrorButton/>
                </div>
    }
}
