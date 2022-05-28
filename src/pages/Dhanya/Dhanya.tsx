import { Component } from 'react';
import axios from 'axios';


interface IProps {

}
interface IState {
    loading: boolean;
    data: {}[] | null;
    error: {message: string} | null
}
export class Dhanya extends Component<IProps, IState> {

    state = {loading: true, data: null, error: null};

    componentDidMount( ) {

        axios.get(`https://jsonplaceholder.typicode.com/userss`)
            .then(response => this.setState({loading: false, data: response.data, error: null}))
            .catch(error => this.setState({loading: false, data: null, error: error}))
    }

    renderLoading( ) {
        const loadingJSX = <h4>Loading...</h4>
        return loadingJSX;
    }

    renderData( ) {
        const dataJSX = <h4>Display datas...</h4>
        return dataJSX;
    }

    renderError( ) {
        const message = this.state.error ? this.state.error[`message`] : '';
        const errorJSX = <h4>{ message }</h4>
        return errorJSX;
    }

    render( ) {
       if ( this.state.loading ) {
           return this.renderLoading();
       } else if ( this.state.error ) {
           return this.renderError();
       } else {
           return this.renderData();
       }
    }
}