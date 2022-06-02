import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


interface IProps {
    title: string;
}

interface IState {
    loading: boolean;
    userData: { } [ ] | null;
    error: { message: string } | null;
}

export class Samara extends Component<IProps, IState> {

    state = { loading: true, userData: null, error: null };

    componentDidMount( ) {

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState( {loading: false, userData: response.data, error: null} );
        })
        .catch(error => {
            this.setState( {loading: false, userData: null, error: error} );
        })
    }

    renderLoading( ) {

        const loadingJSX = 
            <div className = "ui segment">
                <div className = "ui active inverted dimmer">
                    <div className = "ui text loader">Loading</div>
                </div>
            </div>
        return loadingJSX;
    }

    renderError( ) {

        const message = this.state.error? this.state.error[ 'message' ] : '';
        const errorJSX = 
            <div>
                <h3 className = "ui red message">{ message }</h3>
            </div>
        return errorJSX;
    }

    renderData( ) {

        const userData = this.state.userData ? this.state.userData : [ ];
        const dataJSX = userData.map( (item: {id: number, name: string, email: string} ) => {
            return (
                <div key = { item.id } className="ui floating message">
                    <h4>{ item.name }</h4>
                    <p>Email : { item.email }</p>
                </div>
            );
        });
        return dataJSX
    }
    
    render( ) {
        
        return(
            <div>
                <h2 className = "ui center aligned header message">{ this.props.title }</h2>
                    {
                        this.state.loading ? this.renderLoading( ) : 
                        this.state.userData ? 
                        <>
                            <Link to='/' className="ui teal button">Home</Link>
                            <Link to='/news/UK/latest' className="ui teal button">News</Link>
                            { this.renderData( ) }
                        </> : 
                        this.renderError( )
                    }
            </div>
        );
    }
}