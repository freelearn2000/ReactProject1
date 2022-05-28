import { Component } from 'react';
import axios from 'axios';


interface IProps {
    title: string;
}
interface IState {
    loading: boolean;
    userData: {}[] | null;
    error: {message: string} | null;
}
export class Samara extends Component<IProps, IState> {
    state = { loading: true, userData: null, error: null };

    // Initialization
    componentDidMount( ) {
        // console.log(`UserData componentDidMount`);
        // Initiate API call from here
        axios.get( 'https://jsonplaceholder.typicode.com/users' )
        .then( response => {
            // console.log('Success data: ', response.data);
            this.setState( {loading: false, userData: response.data, error: null} );
        })
        .catch( error => {
            // console.log('Error: ', error);
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
                <h3>Loading</h3>
            </div>
        return loadingJSX;
    }

    renderError( ) {
        const message = this.state.error? this.state.error['message'] : '';
        const errorJSX = 
            <div>
                <h3 className="ui red message">{ message }</h3>
            </div>
        return errorJSX;
    }

    renderData( ) {
        const userData = this.state.userData ? this.state.userData : [];
        const dataJSX = userData.map( (item: {id:number, name:string, email:string} ) => {
            return (
                <div key={item.id} className="ui floating message">
                    <h4 key={item.id + 1}>{item.name}</h4>
                    <p key={item.id + 2}>Email : {item.email}</p>
                </div>
            );
        });
        return dataJSX
    }
    
    render( ) {
        return(
            <div>
                <h2>{this.props.title}</h2>
                    {
                        this.state.loading? this.renderLoading( ) : 
                        this.state.userData? <><h2>User Details</h2>{ this.renderData( ) }</> : 
                        <>{ this.renderError( ) }</>
                    }
            </div>
    )
}
}


