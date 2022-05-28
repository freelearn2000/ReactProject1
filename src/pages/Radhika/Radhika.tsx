import { Component } from 'react';
import axios from 'axios';


interface IState {
    Loading: boolean,
    news: {}[] | null,
    error: {message: string} | null, 
}

interface IProps {

}
export class Radhika extends Component <IProps, IState> {

    state= {title: `Radhika's Component`, Loading: true, news: null, error: null};

    componentDidMount( ) {
        axios.get('https://jsonplaceholder.typicode.com/postss')
        .then(response => {
            this.setState({Loading: false, news: response.data, error: null});
        })
        .catch(error => {
           // const message= this.state.error? this.state.error['message'] :
            this.setState({Loading: false, news: null, error: error});
        })

    }

    componentDidUpdate( ) {
        //console.log('componentDidUpdate')
     }
 
     componentWillUnmount( ) {
        //console.log('componentWillUnmount')
     }
     
    renderLoading( ) {
        const loadingJSX = <h4>Loading....</h4>
        return loadingJSX;
    }

    renderError ( ) {
        const message= this.state.error? this.state.error['message'] : '';
        const errorJSX = 
                    <div>
                        <h2>{this.state.title}</h2>
                        <h4>{message}</h4>
                    </div>
        return errorJSX;

    }

    render( ) {
        if( this.state.Loading ) {
            return this.renderLoading();
        } else if(this.state.error) {
            return this.renderError();
        } 
    }
}