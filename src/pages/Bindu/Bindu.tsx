import { Component, ReactNode } from "react";
import axios from "axios";

interface IProps {
    title: any
}
interface IState {
    Loading: boolean,
    users: {} [] | null,
    error: {message: string} | null;
}
export class Bindu extends Component<IProps, IState> {

    state = {Loading: true, users: null, error: null};

    componentDidMount ( ) {

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log('Data :', response.data);
            this.setState( { Loading: false, users: response.data, error: null} );
        })
        .catch(error => { 
            const message = this.state.error? this.state.error['message']:
            this.setState( { Loading: false, users: null, error: error} );
        })
        
    }
    componentDidUpdate( ) {
        //console.log('componentDidUpdate')
     }
 
     componentWillUnmount( ) {
        //console.log('componentWillUnmount')
     }
         
        renderLoading( ) {
            const loadingJSX = <h4> Loading!!!!! </h4>

            return loadingJSX;
        }

        rendererror( ) {
            const message = this.state.error? this.state.error['message'] : '';
            const errorJSX = 
            <div>
              <h4> {message} </h4>
            </div>
            return errorJSX;
        }
        renderUserdata( )
        {
            const users = this.state.users ? this.state.users : [ ];
            const dataJSX = users.map( (user: {name:string, email:string, id:number} ) => {
               return( 
                <div key={ user.id + 'a' } className="ui segment">
                    <h4 key={ user.id + 'b'}>{ user.name }</h4>
                    <p key={ user.id + 'c' }>{ user.email }</p>
                </div>
               )
            });
            return dataJSX;
        }
        

        render( ) { 
            return(
                <div className="ui segment">
                    <h2 className="ui center aligned header">{ this.props.title }</h2>
                    {
                         this.state.Loading?this.renderLoading( ) : 
                         this.state.users? <><h2> Datas of Users</h2>{this.renderUserdata( )}</> : 
                         <><h2>Error Data</h2>{this.rendererror( )}</>
                    }
                </div>
            )
        }
    }