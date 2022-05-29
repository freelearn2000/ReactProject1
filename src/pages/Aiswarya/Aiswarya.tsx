import { Component, ReactNode } from "react";
import axios from "axios";


interface IProps {
    title: any;
}


interface IState {
    loading: boolean,
    users: {} [] | null,
    error: {message: string} | null;
}

export class Aiswarya extends Component <IProps, IState> {

    state = {loading: true, users: null, error: null};

    componentDidMount ( ) {

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            //console.log('Data :', response.data);
            this.setState( { loading: false, users: response.data, error: null} );
        })
        .catch(error => {
            //console.log("Data :", error)
            this.setState( { loading: false, users: null, error: error} );
        })
        
    }
    
        renderLoading( ) {
            const loadingJSX = 

            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading User Data..!!</div>
            </div>
            
            return loadingJSX;
        }

        rendererror( ) {
            const message = this.state.error? this.state.error['message'] : '';
            const errorJSX = 
            <div>
                <h4>{ message }</h4>
            </div>
            return errorJSX;
        }
        renderUserdata( ) {
            const  users = this.state.users ? this.state.users : [ ];
            const DataJSX = users.map( (user: {name:number, email:string,id:number,phone:number} ) => {
                return(
                <div className="ui blue text">
                    <div className="ui grey segment" key={user.id + 'a' } >
                        <h4  key={user.id + 'b'}>{user.name}</h4>
                        <p key={user.id + 'c'}>{user.email}</p>
                         <p key={user.id + 'd'}>{user.phone}</p>
                     </div>
                 </div>
            
            )
         });

            return DataJSX;
        }
        render( ) {
            return (
                <div className="ui inverted segment">
                    <h2 className ="ui red inverted header"></h2>
                        <h2 className=" ui center aligned header">{this.props.title}</h2>
                        {
                            this.state.loading?this.renderLoading( ):
                            this.state.users?<><h2>User Details </h2>{this.renderUserdata( )}</> :
                            <><h2> Error Data !!!!</h2>{this.rendererror( )}</>
                        }
                    </div>

            )
            
            }
        }