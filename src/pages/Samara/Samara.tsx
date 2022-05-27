import { Component } from 'react';
import axios from 'axios';


interface IProps {

}
interface IState {
    title: string;
    loading: boolean;
    userData: {}[] | null;
    error: {message: string} | null;
}
export class Samara extends Component<IProps, IState> {
    state = { title: `Welcome to Samara's Component!`, loading: true, userData: null, error: null };

    // Initialization
    componentDidMount( ) {
        // console.log(`UserData componentDidMount`);
        // Initiate API call from here
        axios.get( 'https://jsonplaceholder.typicode.com/usersss' )
        .then( response => {
            console.log('Success data: ', response.data);
            this.setState( {loading: false, userData: response.data, error: null} );
        })
        .catch( error => {
            console.log('Error: ', error);
            this.setState( {loading: false, userData: null, error: error} );
        })
    }

    // State Update
    componentDidUpdate( ) {
        // console.log(`UserData componentDidUpdate`);
    }

    // Destructor
    componentWillUnmount( ) {
        // console.log(`UserData componentWillUnmount`);
    }

    renderLoading( ) {
        const loadingJSX = 
            <div>
                <h2>{ this.state.title }</h2>
                <h3>Loading</h3>
            </div>
        return loadingJSX;
    }

    renderError( ) {
        const message = this.state.error? this.state.error['message'] : '';
        const errorJSX = 
            <div>
                <h2>{ this.state.title }</h2>
                <h3 className="ui red message">{ message }</h3>
            </div>
        return errorJSX;
    }

    renderData( ) {
        const dataJSX = 
            <div>
                <h2>{ this.state.title }</h2>
                <h3>List user datas here...</h3>
            </div>
        return dataJSX
    }
    
    render( ) {
        // console.log(`UserData render`);
        if ( this.state.loading ) {
            return this.renderLoading( );
        } else if ( this.state.error ) {
            return this.renderError( );
        }
        else {
            return this.renderData( )
        }
    }
}   