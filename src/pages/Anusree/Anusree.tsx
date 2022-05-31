import { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


interface IProps {
    title: any;
}

interface IState {
    loading: boolean;
    users: { } [ ] | null;
    error: { message: string } | null;
}

export class Anusree extends Component <IProps, IState> {

    state = { loading: true, users: null, error: null };
    
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
        <div className = "ui active inverted dimmer">
            <div className = "ui text loader">Loading user data...</div>
        </div>
        return loadingJSX;
    }

    renderError( ) {

        const message = this.state.error? this.state.error[ 'message' ] : '';
        const errorJSX = 
        <div className = 'ui negative message'>
            <h4>{ message }</h4>
        </div>
        return errorJSX;
    }

    renderUserdata( ) {

        const users = this.state.users ? this.state.users : [ ];
        const dataJSX = users.map( (user: {name: string, email: string, id: number} ) => {
           return( 
            <div key = { user.id } className = "ui segment">
                <h4>{ user.name }</h4>
                <p>{ user.email }</p>
            </div>
           )
        });
        return dataJSX;
    }

    render( ) {

        return(
            <div>
                <h2 className = "ui center aligned header">{ this.props.title }</h2>
                <Link to = '/*' className = "ui blue label"><i className = "home icon"></i> Home</Link>
                    {
                        this.state.loading ? this.renderLoading( ):
                        this.state.users ? <><h2>User Data</h2>{ this.renderUserdata( ) }</>:
                        <><h2>Error Data</h2>{ this.renderError( )}</>
                    }
            </div>
        )
    }
}
