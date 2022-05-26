import { Component } from 'react';
import axios from 'axios';

interface IState {
    Loading: boolean, 
    users: {} [] | null, 
    error: {message: string} | null;

}

interface IProps {
}

export class Manooja extends Component<IProps, IState> {

    state = {Loading: true, users: null, error: null};


    componentDidMount( ) {

        // Intitiate API call from here
        axios.get('https://jsonplaceholder.typicode.com/userss')
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
            <h2>This is Manooja's Component</h2>
            <h4>{ message }</h4>
        </div> 
        return errorJSX;
    }

    renderUserdata( ){
        const dataJSX = 
        <div>
            <h2>This is Manooja's Component</h2>
            <h4>Loading all User Info here...</h4>
        </div>
        return dataJSX;
    }

    render( ) {
        if ( this.state.Loading) {
            return this.renderLoading( );
        } else if ( this.state.error) {
            return this.renderError( );
        } else {
            return this.renderUserdata( );
        }
    }
} 

