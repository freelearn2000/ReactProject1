import { Component } from "react";
import axios, { responseEncoding } from 'axios';
import { Interface } from "readline";
import { text } from "stream/consumers";
import { table } from "console";


interface IState {
    Loading: boolean, 
    users: {} [] | null, 
    error: {message: string} | null;

}

interface IProps {
    title: String;
}


export class Santhosh extends Component<IProps, IState> {

    state = {title: true, Loading: true, users: null, error: null };

    componentDidMount( ) {

        // Intitiate API call from here
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState( {Loading: false, users: response.data, error: null} );
            })
            .catch(error => {
                this.setState( {Loading: false, users: null, error: error} );
            })                  
    }
    
    renderLoading( ) {
        const loadingJSX = 
        <div className="ui icon message">
            <i className="notched circle loading icon"></i>
            <h4>Loading Please wait.. </h4>
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
   
 
    renderNews( ) {
       
        const users = this.state.users? this.state.users : [] ;  
      
        const newsJSX = users.map( ( item: { id: number, name: string, email: any } )=> {            
            return (
                <>
                <table className="ui celled structured table">          
                    <tbody>
                        <tr>
                            <td className="negative" width={"20px"} key={item.id + 'a'}>{item.id}</td>         
                            <td className="negative" width={"200px"} key={item.id + 'b'}>{item.name}</td>                   
                            <td className="negative" width={"200px"} key={item.id + 'c'}>{item.email}</td>                   
                        </tr>
                    </tbody> 
                </table>
                </> 
            );
        }); 

        return newsJSX;
    }
 
    render( ) {        
           
        return (
        <div>              
        <h3 className="ui center aligned header">{ this.props.title }</h3>                  
        {
            this.state.Loading? this.renderLoading( ) :              
            this.state.users? <><table className="ui celled structured table"><tr><td width={"20px"} ><h4>ID</h4></td><td width={"200px"}><h4>Name</h4></td><td width={"200px"}><h4>Email</h4></td></tr></table> { this.renderNews( )} </> : 
            this.renderError( )
        }  
        </div>
        )
        
    }
} 