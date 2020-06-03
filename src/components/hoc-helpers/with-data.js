import React, {Component} from "react";
import Spinner from "../spinner";

const WithData = (View) => {
    return class extends Component {

        state = {
            data : null
        }

        onPersonListLoaded = (data) => {
            this.setState({
                data
            })
        }

        componentDidMount() {
            this.props.getData()
                .then(this.onPersonListLoaded)
                .catch(() => this.onError())
        }

        render () {
            const { data } = this.state;
            if (!data) {
                return  <Spinner/>
            }
            return <View {...this.props} data={data} />
        }
    }
}

export default WithData;
