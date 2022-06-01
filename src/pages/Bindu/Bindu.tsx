import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


interface IProps {
    title: any
}

interface IState {
    loading: boolean,
    users: { } [ ] | null,
    error: { message: string } | null;
}

export class Bindu extends Component <IProps, IState> {

    state = { loading: true, users: null, error: null };

    componentDidMount ( ) {

        axios.get( 'https://jsonplaceholder.typicode.com/users' ) 
            .then( response => {
            this.setState( { loading: false, users: response.data, error: null } );
            } )
            .catch( error => { 
            this.setState( { loading: false, users: null, error: error } );
             } )
    }
             
    renderLoading( ) {

        const loadingJSX = <h4> Loading!!!!! </h4>
        return loadingJSX;
    }

    rendererror( ) { 

    const message = this.state.error ? this.state.error[ 'message' ] : '';
    const errorJSX = 
        <div>
            <div className = "ui negative message">
               <h4> { message } </h4>
            </div>
            
        </div>
            return errorJSX;
    } 
    renderUserdata( )  {

        const users = this.state.users ? this.state.users : [ ];
        const dataJSX = users.map( (user: { name: string, email: string, id: number } ) => {
        return(
            <div key = { user.id } className = "ui brown segment">
                <h4>{ user.name }</h4>
                <p>{ user.email }</p>
            </div>
            )
        });
        return dataJSX;
    }
        
   render( ) { 

        return(
            <div className = "ui segment">
                <h2 className = "ui center aligned header">{ this.props.title }</h2>
                <Link to = '/' className="item">Back to Home</Link><br/>
                <Link to = '/about/companydetails' className="item">Company Details</Link>

                {
                    this.state.loading ? this.renderLoading( ) : 
                    this.state.users ? <><h2> Datas of Users</h2>{ this.renderUserdata( )}</> : 
                    <><h2>Error Data</h2>{ this.rendererror( ) }</>
                }
            </div>
        )
    }
}            