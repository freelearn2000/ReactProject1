import { Component } from "react";
import axios from 'axios';

interface IState {
    Loading: boolean, 
    users : {} [] | null, 
    error: {message: string} | null;

}

interface IProps {
    title: string;
}

export class Viji extends Component <IProps, IState> {

    //state = {data: `Welcome to the world of React!`};
    state = {Loading: true, users: null, error: null};

    componentDidMount( ) {

        // Intitiate API call from here
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log('Success data :', response.data);
                this.setState( {Loading: false, users: response.data, error: null} );
            })
            .catch(error => {
                const message = this.state.error? this.state.error['message'] : 
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
                    <h2>This is Viji's Component</h2>
                    <h4>{ message }</h4>
                </div> 
                return errorJSX;
            }
        
            renderUsersData( ) {
                const users = this.state.users ? this.state.users : [];
                const blogJSX = users.map( (items: {id: number, name: string, email: string}, index) => {
                    return (
                        <div key= {index + items.id} className ='ui red segment'>
                            <div className="ui tertiary inverted segment">
                            <span className="ui black text">
                            <h5 key={items.id}>Name: {items.name}</h5>
                            <h5 key={'#' + items.id}>Email: {items.email}</h5>
                            </span>
                            </div>
                        </div>
                    )
                });
                return blogJSX;
            }
        
            render( ) {
                return (
                    <div>
                        <h2 className="ui center aligned green header">{this.props.title}</h2>
                        {
                            this.state.Loading ? this.renderLoading( ) :
                            this.state.users ? this.renderUsersData( ) :
                            this.renderError( )    
                        }
                    </div>
                )   
            }
   /* render( ) {
        return (
            <div className="ui form">
              <h3>{this.state.data}</h3>       
            </div>
        );
    }*/
} 