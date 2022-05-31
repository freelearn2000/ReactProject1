import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


interface IProps {
    title: string;
}
interface IState {
    loading: boolean;
    users: {}[] | null;
    error: {message: string} | null;
}

export class Rakhi extends Component<IProps, IState> {

    state = {loading: true, users: null, error: null};
    
    componentDidMount( ) {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState( {loading: false, users: response.data, error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, users: null, error: error} );
            })
    }

    componentDidUpdate( ) {
    }

    componentWillUnmount( ) {
    }

    renderLoading( ) {
        const loadingJSX =  
            <div className="ui icon message">
                <i className="notched circle loading icon"></i>
                <div className="content">
                    <div className="header">
                        Just one second
                    </div>
                    <p>We're fetching that content for you.</p>
                </div>
            </div>
        return loadingJSX;
    }

    renderError( ) {
        const errorMessage = this.state.error? this.state.error['message'] : '';
        const errorJSX = 
            <div>
                <div className="ui negative message">
                    <p>{ errorMessage }</p>
                </div>
            </div>
        return errorJSX;
    }

    renderUserdata( ) {
        const users = this.state.users ? this.state.users : [ ];
        const dataJSX = users.map( ( user: { id: number, name: string, email: string}, index ) => {
            return(
                <div key={user.id + index} className ='ui segment'>
                    <h4>Name: {user.name}</h4>
                    <p>Email: {user.email}</p>
                </div>
            );
        });
        return dataJSX;
    }

    render( ) {
        return(
            <div>
                <h2 className='ui center aligned header block'>{ this.props.title }</h2>
                <Link to='/home' className="ui teal tag label">Home</Link>
                { 
                    this.state.loading ? this.renderLoading( ) :
                    this.state.users ? <><h2>User Information </h2>{ this.renderUserdata( ) }</> :
                    this.renderError( )
                }
            </div>
        )
    }
}

