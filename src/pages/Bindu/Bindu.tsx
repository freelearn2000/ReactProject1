import { Component, ReactNode } from "react";
import axios from "axios";
import { Interface  } from "readline";
import { isPropertySignature } from "typescript";


interface IState {
    Loading: boolean,
    news: {} [] | null,
    error: {message: string} | null;
}
interface IProps {

}

export class Bindu extends Component<IProps, IState> {

    state = {Loading: true, news: null, error: null};

    componentDidMount ( ) {

        axios.get('https://jsonplaceholder.typicode.com/userss')
        .then(response => {
            console.log('Data :', response.data);
            this.setState( { Loading: false, news: response.data, error: null} );
        })
        .catch(error => {
            const message = this.state.error? this.state.error['message']:
            this.setState( { Loading: false, news: null, error: error} );
        })
        
    }
    
        renderLoading( ) {
            const loadingJSX = <h4> Loading!!!!! </h4>
            return loadingJSX;
        }

        rendererror( ) {
            const message = this.state.error? this.state.error['message'] : '';
            const errorJSX = 
            <div>
                <h2> This is Bindu's Component</h2>
                <h4> {message} </h4>
            </div>
            return errorJSX;
        }
        renderUserdata( )
        {
            const UserdataJSX = 
            <div>
                <h2> This is  Bindu's Component</h2>
                <h4> Details of users </h4>
            </div>
            return UserdataJSX;
        }

        render( ) {
            if ( this.state.Loading ){
                return this.renderLoading( );
            }else if ( this.state.error){
                return this.rendererror( );
            }else {
                return this.renderUserdata( );
            }
            
        }
    }
