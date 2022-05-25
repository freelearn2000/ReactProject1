import React, { Component } from 'react';
import axios from 'axios';

interface IProps {

}

interface Istate {
    loading: boolean;
    users:{}[] | null;
    error:{message: string} | null;
}

export class Rakhi extends Component <IProps, Istate> {

    state = {title: `This is Rakhi's Component.`, loading: true, users: null, error: null};
    
    componentDidMount( ) {
        axios.get('https://jsonplaceholder.typicode.com/userss')
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
       console.log('componentDidUpdate')
    }

    componentWillUnmount( ) {
       console.log('componentWillUnmount')
    }

    renderLoading( ) {
        const loadingJSX = 
        <div className="ui icon message">
            <i className="notched circle loading icon"></i>
            <div className="content">
                <div className="header">
                    Just one second
                </div>
                <p>We're fetching that content for you.</p>
            </div>
        </div>
        return loadingJSX;
    }

    renderError( ) {
        const errorMessage = this.state.error? this.state.error['message'] : '';
        const errorJSX = 
        <div>
            <h2 className="ui center aligned header">
                {this.state.title}
            </h2>
            <div className="ui negative message">
                <p>{ errorMessage }</p>
            </div>
            
        </div>
        return errorJSX;
    }

    renderUserdata( ) {
        const dataJSX = 
        <div>
            <h2>{this.state.title}</h2>
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

