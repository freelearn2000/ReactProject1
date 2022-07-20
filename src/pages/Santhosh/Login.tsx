import { Component } from "react";
import { LoginContext } from "../../context/global";

// Provider
export class Login extends Component {
    
    render( ) {
        return (
            <>
                <h4 className="ui center aligned header red">Context</h4>
                <LoginContext.Provider value={{name: 'Santhosh',type: 'Admin'}}>
                    <Middle/>
                </LoginContext.Provider>               
            </>
        );        
    }
}

class Middle extends Component {

    render( ) {
        return (
            <Child1/>
        );
    }
}

// a. Consumer
class Child1 extends Component {

    render( ) {
        return (
            <LoginContext.Consumer>
                { value =>
                    (
                        <> <h4 className="ui left aligned blue header message"> User Name: {value.name} <br/> User Type: {value.type} </h4> </>
                    )                    
                }            
            </LoginContext.Consumer>          
        );      
    }
}