import { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


interface IState {
    loading: boolean, 
    users: { } [ ] | null, 
    error: { message: string } | null;
}

interface IProps {
    title: any;
}

export class Manooja extends Component<IProps, IState> {

    state = { loading: true, users: null, error: null };

    componentDidMount( ) {

        // Intitiate API call from here
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState( {loading: false, users: response.data, error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, users: null, error: error} );
            })               
    }
    
    renderLoading( ) {

        const loadingJSX = <h4>Loading....</h4>
        return loadingJSX;
    }

    renderError( ) {

        const message = this.state.error? this.state.error[ 'message' ]: '';
        const errorJSX =
        <div>
            <h2 className = "ui center aligned header">
                { this.props.title }
            </h2>
            <div className = "ui negative message">
                <p>{ message }</p>
            </div>  
        </div> 
        return errorJSX;
    }

    renderUserdata( ) {

        const users = this.state.users ? this.state.users : [ ];
        const dataJSX = users.map( ( user: {name: string, email: string, id: number} ) => {

            return (
                <div className = "ui segment" key = { user.id }>
                    <h4>Name : { user.name } </h4>
                    <p>Email : { user.email } </p>
                </div>    
            );
        });
        return dataJSX;
    }

    render( ) {

        return( 
            <div>
                <h2 className="ui center aligned header">{ this.props.title }</h2>
                <br/>
                <Link to='/' className="ui button"> HomePage </Link>
                &nbsp;
                <Link to='/news/abc' className="ui button"> News </Link>
                <br/>
                {
                    this.state.loading ? this.renderLoading( ):
                    this.state.users ? <><h2> Users Information </h2>{ this.renderUserdata( ) }</>:
                    <><h2>Error Data</h2>{ this.renderError( ) }</>
                }
            </div>
        )
    }
} 

