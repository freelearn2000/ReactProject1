import { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


interface IState {
    loading: boolean,
    users: { } [ ] | null,
    error: { message: string } | null, 
}

interface IProps {
    title: string;
}

export class Radhika extends Component <IProps, IState> {

    state= { loading: true, users: null, error: null };

    componentDidMount( ) {

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState( {loading: false, users: response.data, error: null} );
        })
        .catch(error => {
            this.setState( {loading: false, users: null, error: error} );
        })
    }
     
    renderLoading( ) {
        const loadingJSX = 
        <div>
            <i className = "notched circle loading icon"></i>
            <div className = "content">
                <h4>Loading ....</h4>
            </div>
        </div> 
        return loadingJSX;
    }

    renderError( ) {
        const message = this.state.error ? this.state.error[ 'message' ] : '';
        const errorJSX = 
                <div className = "ui red message">
                    <h4>{ message }</h4>
                </div>
        return errorJSX;
    }

    renderUserdata( ) {
        const users = this.state.users ? this.state.users : [ ];
        const dataJSX = users.map( ( user: {id: number, name: string, phone: number} ) => {
            return (
                <div key = { user.id } className="ui blue segment">
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
                <h2 className = "ui center aligned header">{ this.props.title }</h2>
                <br/>
                <Link to='/' className = "item"> Go to HomePage </Link>
                <br/>
                {
                    this.state.loading ? this.renderLoading( ): 
                    this.state.users ? <><h3 className = "ui center aligned header">User Details</h3>{ this.renderUserdata( ) }</>:
                    this.renderError( )
                }
            </div>
        );
    }
}