import { Component } from "react";
import axios from '../../axios';

interface IProps {
    title: any;
}

// Axios in Class component
export class Users extends Component<IProps> {

    state = {loading: true, users: null, error: null};
    
    componentDidMount( ) {
        
        axios.get('/users')
            .then(response => {
                this.setState( {loading: false, users: response.data.splice(0,5), error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, users: null, error: error} );
            })
    }

    renderLoading( ) {

        const loadingJSX =  
            <div className = "ui icon message">
                <i className = "notched circle loading icon"></i>
                <div className = "content">
                    <div className = "header">
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
                <div className = "ui negative message">
                    <p>{ errorMessage }</p>
                </div>
            </div>
        return errorJSX;
    }

    renderUserdata( ) {

        const users = this.state.users ? this.state.users : [ ];
        const dataJSX = users.map( ( user: { id: number, name: string, email: string}, index ) => {
            return(
                <div key={user.id + index} className = 'ui segment'>
                    <h4>Name: {user.name}</h4>
                    <p>Email: {user.email}</p>
                </div>
            );
        });
        return dataJSX;
    }

    render( ) {

        return(
            <>
            <h1 className="ui center aligned blue message">{ this.props.title }</h1>                                         
                {
                    this.state.loading ? this.renderLoading( ):
                    this.state.users ? <> { this.renderUserdata( ) }</>:
                    <><h2>Error Data</h2>{ this.renderError( )}</>
                }          
            </>
        );
    }
}