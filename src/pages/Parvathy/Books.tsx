import { Component } from "react";
import axios from '../../axios';
import { retriveDataFromRoute } from '../../utils/hoc';


interface IProps {
    title: string;
    routeData: any;
}

interface IState {
    loading: boolean,
    users: {}[] | null,
    error: { message: string } | null;
}

// Axios in Class Component
class Books extends Component<IProps, IState> {

    state = { loading: true, users: null, error: null };

    // initialization
    componentDidMount() {

        // Intitiate API call from here
        axios.get('/users')
            .then(response => {
                this.setState( {loading: false, users: response.data.splice(0, 3), error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, users: null, error: error} );
            });
    }

    renderLoading() {

        const loadingJSX =
            <div className="ui segment">
                <p>Please wait a little...</p>
                <div className="ui active inverted dimmer">
                    <div className="ui green text loader">Loading</div>
                </div>
            </div>
        return loadingJSX;
    }

    renderError() {

        const message = this.state.error ? this.state.error['message'] : '';
        const errorJSX =
            <div>
                <br />
                <h4>{ message }</h4>
            </div>
        return errorJSX;
    }

    renderData() {

        const users = this.state.users ? this.state.users : [];
        const dataJSX = users.map( (item: { name: string, email: string, id: number } ) => {
            return (
                <div key={ item.id } className="ui center aligned message">
                    <h4>{ item.name }</h4>
                    <p>Email : { item.email }</p>
                </div>
            );
        });
        return dataJSX;
    }

    render() {

        return (
            <div>
                <h2 className="ui center aligned header">{ this.props.title }</h2>
                
                {
                    this.state.loading ? this.renderLoading() :
                    this.state.users ? this.renderData() : this.renderError()
                }
            </div>
        )
    }
}

export default retriveDataFromRoute(Books);