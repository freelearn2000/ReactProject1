import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from '../../axios';
import { retriveDataFromRoute } from '../../utils/hoc';


interface IState {
    loading: boolean,
    users: { } [ ] | null,
    error: { message: string } | null, 
}

interface IProps {
    title: string;
    routeData: any;
}

class Radhika extends Component<IProps, IState> {

    state = { loading: true, users: null, error: null };

    componentDidMount( ) {

        axios.get('/users')
            .then(response => {
                this.setState( { loading: false, users: response.data, error: null } );
            })
            .catch(error => {
                this.setState( { loading: false, users: null, error: error } );
            })
    }
     
    renderLoading( ) {

        const loadingJSX = 
        <div>
            <i className="notched circle loading icon"></i>
            <div className="content">
                <h4>Loading ....</h4>
            </div>
        </div> 
        return loadingJSX;
    }

    renderError( ) {

        const message = this.state.error ? this.state.error[ 'message' ] : '';
        const errorJSX = 
                <div className="ui red message">
                    <h4>{ message }</h4>
                </div>
        return errorJSX;
    }

    renderUserdata( ) {

        const users = this.state.users ? this.state.users : [ ];
        const dataJSX = users.map( ( user: { id: number, name: string, phone: number } ) => {
            return (
                <div key={ user.id } className="ui blue segment">
                    <p><b>Name:</b>{ user.name }</p>
                    <p><b>Phone:</b>{ user.phone }</p>
                </div>
            );
        });
        return dataJSX;
    }
    
    render( ) {

        return(
            <div>
                <h2 className="ui center aligned header">{ this.props.title }</h2>
                    <div className="ui grid">
                        <div className="four wide column">
                            <div className="ui vertical pointing menu">
                                <Link to='/radhika/national' className="active item">National News</Link>
                                <Link to='/radhika/kerala' className="active item">States News</Link>
                            </div>
                        </div>
                        <div className="twelve wide stretched column">
                            <div className="ui segment">
                            {
                            this.props.routeData.id ?
                                <>    
                                    {
                                        this.state.loading ? this.renderLoading( ): 
                                        this.state.users ? <><h3 className="ui center aligned header">Details</h3>{ this.renderUserdata( ) }</>:
                                        this.renderError( )
                                    }
                                </>:
                                <Outlet/>
                            }
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default retriveDataFromRoute( Radhika );