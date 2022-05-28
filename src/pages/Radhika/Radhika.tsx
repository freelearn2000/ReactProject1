import { Component } from 'react';
import axios from 'axios';


interface IState {
    Loading: boolean,
    users: {}[] | null,
    error: {message: string} | null, 
}

interface IProps {
    title: string;

}
export class Radhika extends Component <IProps, IState> {

    state= { Loading: true, users: null, error: null};

    componentDidMount( ) {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({Loading: false, users: response.data, error: null});
        })
        .catch(error => {
            this.setState({Loading: false, users: null, error: error});
        })
    }

    componentDidUpdate( ) {
        //console.log('componentDidUpdate')
     }
 
     componentWillUnmount( ) {
        //console.log('componentWillUnmount')
     }
     
    renderLoading( ) {
        const loadingJSX = 
        <div>
            <i className="notched circle loading icon"></i>
            <div className="content">
                <h4> Loading ....</h4>
            </div>
        </div> 
        return loadingJSX;
    }

    renderError ( ) {
        const message= this.state.error? this.state.error['message'] : '';
        const errorJSX = 
                <div className="ui red message">
                    <h4>{message}</h4>
                </div>
        return errorJSX;
    }

    renderUserdata( ) {
        const users = this.state.users ? this.state.users : [];
        const dataJSX = users.map(  (user: {id: number, name: string, phone: number})=> {
            return (
                <div key= {user.id} className="ui blue segment">
                        <p key= {user.id + 1}><b>Name:</b> {user.name}</p>
                        <p key= {user.id + user.phone}><b>Phone:</b> {user.phone}</p>
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
                    this.state.Loading? this.renderLoading( ) : 
                    this.state.users? <><h3>User Details</h3>{ this.renderUserdata( )} </> : <> { this.renderError( ) } </>
                }
            </div>
        );
    }
}