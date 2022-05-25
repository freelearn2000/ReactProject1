import React, { Component } from 'react';
import axios from 'axios';

interface IProps {

}
interface Istate {
    loading: boolean;
    users:{}[] | null;
    error:{message: string} | null;
}
export class Anusree extends Component <IProps, Istate> {

    state = {loading: true, users: null, error: null};
    
    componentDidMount( ) {
        axios.get('https://jsonplaceholder.typicode.com/usersss')
        .then(response => {
            console.log("Data :", response.data)
            this.setState({loading: false, users: response.data, error: null});
        })
        .catch(error => {
            console.log("Data :", error)
            this.setState({loading: false, users: null, error: error});
        })
    }

    componentDidUpdate( ) {
       //console.log('componentDidUpdate')
    }

    componentWillUnmount( ) {
       //console.log('componentWillUnmount')
    }

    renderLoading( ) {
        const loadingJSX = <h4>Loading...</h4>
        return loadingJSX;
    }

    renderError( ) {
        const message = this.state.error? this.state.error['message'] : '';
        const errorJSX = 
        <div>
            <h2>This is Anusree's Component</h2>
            <h4>{ message }</h4>
        </div>
        return errorJSX;
    }

    renderUserdata( ) {
        const dataJSX = 
        <div>
            <h2>This is Anusree's Component</h2>
            <h4>Loading all User Info here...</h4>
        </div>
        return dataJSX;
    }

    render() {
        if ( this.state.loading ) {
            return this.renderLoading( );
       } else if ( this.state.error ) {
            return this.renderError( );
       } else {
           return this.renderUserdata( );
       }
    }
}
