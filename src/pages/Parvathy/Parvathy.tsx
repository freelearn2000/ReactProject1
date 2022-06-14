import { Component } from "react";
import axios from '../../axios';
import { Link } from "react-router-dom";
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

class Parvathy extends Component<IProps, IState> {

    state = { loading: true, users: null, error: null };

    // initialization
    componentDidMount() {

        // Intitiate API call from here
        axios.get('/users')
            .then(response => {
                this.setState( {loading: false, users: response.data, error: null} );
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
                <h2 className="ui center aligned header message">{ this.props.title }</h2>
                <h4 className='ui bottom pointing label header'>Route Data: { this.props.routeData.id }</h4>
                {
                    this.state.loading ? this.renderLoading() :
                        this.state.users ?
                            <>
                                <br />
                                <Link to='/' className="ui teal basic tag label">Goto HomePage</Link> &nbsp;&nbsp;
                                <Link to='/news/100$' className="ui basic olive tag label">News</Link>
                                { this.renderData() }
                            </> :
                            this.renderError()
                }
            </div>
        )
    }
}

export default retriveDataFromRoute(Parvathy);