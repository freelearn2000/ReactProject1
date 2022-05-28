import { Component } from 'react';
import axios from 'axios';

interface IState {
    Loading: boolean, 
    users: {} [] | null, 
    error: {message: string} | null;

}

interface IProps {
    title: any;
}

export class Manooja extends Component<IProps, IState> {

    state = {Loading: true, users: null, error: null};


    componentDidMount( ) {

        // Intitiate API call from here
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log('Success data :', response.data);
                this.setState( {Loading: false, users: response.data, error: null});
            })
            .catch(error => {
                console.log("Data :",error);
                this.setState({Loading: false, users: null, error: error});
            })               
    }
    
    renderLoading( ) {
        const loadingJSX = <h4>Loading....</h4>
        return loadingJSX;

    }

    renderError( ) {
        const message = this.state.error? this.state.error['message'] : '';
        const errorJSX =
        <div>
            <h2 className="ui center aligned header">
                {this.props.title}
            </h2>
            <div className="ui negative message">
                <p>{ message }</p>
            </div>  
        </div> 
        return errorJSX;
    }

    renderUserdata( ) {
        const users = this.state.users ? this.state.users : [ ];
        const dataJSX = users.map( ( user: any)=> {
            let hNo = user.id;
            let pNo = user.id + 'a'

            return (
                <div key={ user.id + 'a' } className="ui segment">
                    <h4 key={hNo}>Name : {user.name}</h4>
                    <p key={pNo}>Email : {user.email}</p>
                </div>    
            );

        });

        return dataJSX;
        
    }

    render( ) {
        return( 
            <div>
                <h2 className="ui center aligned header">{ this.props.title }</h2>
                {
                    this.state.Loading ? this.renderLoading( ) :
                    this.state.users ? <><h2> Users Information </h2>{ this.renderUserdata( ) }</> :
                    <><h2>Error Data</h2>{ this.renderError( )}</>
                }
            </div>
        )
    }
} 

