import { Component, createContext, useContext } from "react";
import { LoginContext } from "../../context/global"

// Provider
export class Login extends Component {
    
    render( ) {
        return (
            <>
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

// // b. Consumer
// class Child2 extends Component {

//     static contextType = mycontext;

//     render( ) {
//         return (
//             <>Context value accessed from child2 : {this.context};</>
//         );
//     }
// }

// // // c. Consumer
// const Child3 = (props: any) =>{

//     const context = useContext(mycontext);

//     return (
//         <>Context value accessed from child3 : {context}</>
//     );
// }