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

        update = () => {
            this.props.getData()
                .then(this.onPersonListLoaded)
                .catch(() => this.onError())
        }

        componentDidUpdate(prevProps, prevState) {
            if(this.props.getData !== prevProps.getData) {
                this.update()
            }
        }

        componentDidMount() {
            this.update();
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
