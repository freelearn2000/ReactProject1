import { Component } from "react";
import axios from 'axios';

interface IState {
    Loading: boolean, 
    news: {} [] | null, 
    error: {message: string} | null;

}

interface IProps {
}

export class Viji extends Component <IProps, IState> {

    //state = {data: `Welcome to the world of React!`};
    state = {Loading: true, news: null, error: null};

    componentDidMount( ) {

        // Intitiate API call from here
        axios.get('https://jsonplaceholder.typicode.com/postss')
            .then(response => {
                console.log('Success data :', response.data);
                this.setState( {Loading: false, news: response.data, error: null} );
            })
            .catch(error => {
                const message = this.state.error? this.state.error['message'] : 
                this.setState({Loading: false, news: null, error: error});
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
                    <h2>This is Viji's Component</h2>
                    <h4>{ message }</h4>
                </div> 
                return errorJSX;
            }
        
            renderNews( ) {
                const newsJSX = <h4>List all news here..</h4>
                return newsJSX;
            }
        
            render( ) {
                if ( this.state.Loading) {
                    return this.renderLoading( );
                } else if ( this.state.error) {
                    return this.renderError( );
                } else {
                    return this.renderNews( );
                }
            }
   /* render( ) {
        return (
            <div className="ui form">
              <h3>{this.state.data}</h3>       
            </div>
        );
    }*/
} 