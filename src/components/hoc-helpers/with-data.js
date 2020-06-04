import React, {Component} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const WithData = (View) => {
    return class extends Component {

        state = {
            data : null,
            loading: true,
            error: false
        }

        onPersonListLoaded = (data) => {
            this.setState({
                data,
                loading: false
            })
        }

        update = () => {

            this.setState( {
                loading: true,
                error: false
            })

            this.props.getData()
                .then(this.onPersonListLoaded)
                .catch(() => this.setState({
                    error:true,
                    loading: false
                }))
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
            const { data, error, loading } = this.state;
            if (loading) {
                return  <Spinner/>
            }

            if(error) {
                return <ErrorIndicator />
            }
            return <View {...this.props} data={data} />
        }
    }
}

export default WithData;
