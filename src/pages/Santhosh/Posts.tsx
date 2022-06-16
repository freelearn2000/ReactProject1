import { Component } from "react";
import axios from '../../axios';

interface IProps {
    title: any;
}

export class Posts extends Component<IProps> {

    state={ loading: true, users: null, error: null };
    
    componentDidMount( ) {

        axios.get('/posts')
            .then(response => {
                this.setState( {loading: false, users: response.data, error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, users: null, error: error} );
            })
    }

    renderLoading( ) {

        const loadingJSX =
        <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading user data...</div>
        </div>
        return loadingJSX;
    }

    renderError( ) {

        const message = this.state.error? this.state.error[ 'message' ] : '';
        const errorJSX = 
        <div className='ui negative message'>
            <h4>{ message }</h4>
        </div>
        return errorJSX;
    }

    renderUserdata( ) {

        const users = this.state.users ? this.state.users : [ ];
        const dataJSX = users.map( (users: any ) => {
           return( 
            <div key={ users.id } className="ui segment">
                <h4>{ users.title }</h4>
                <p>{ users.body }</p>
            </div>
           )
        });
        return dataJSX;
    }

    render( ) {

        return(
            <>
                <h1 className="ui center aligned blue message">{ this.props.title }</h1>
                    {
                        this.state.loading ? this.renderLoading( ):
                        this.state.users ? <>{ this.renderUserdata( ) }</>:
                        <><h2>Error Data</h2>{ this.renderError( )}</>
                    }
            </>
        )
    }
}