import { Component, useContext } from "react";
import { LoginContext, UContext } from '../../context/global';

//Providing the Context object in class component
class Child1 extends Component {
    
    render( ) {
        return (
            <>
                <h4 className="ui center aligned header red">Context object in Class Component</h4>
                <LoginContext.Provider value={{name: 'Santhosh', type: 'Admin'}}>
                    <Middle/>
                </LoginContext.Provider>               
            </>
        );        
    }
}

class Middle extends Component {

    render( ) {
        return (
            <Child2/>
        );
    }
}

// a. Consumer
class Child2 extends Component {

    render( ) {
        return (
            <LoginContext.Consumer>
                { user =>
                    (
                        <> <h4 className="ui left aligned blue header message"> User Name: {user.name} <br/> User Type: {user.type} </h4> </>
                    )                    
                }            
            </LoginContext.Consumer>          
        );      
    }
}

// Consuming the Context object in Functional component

const  Child3 = ( ) => {

    return(
        <UContext.Provider value={'Santhosh'}>
            <Child4/>
        </UContext.Provider>
    );
}


const Child4 = (props: any) => {

    const context = useContext(UContext);

    return (
        <div>
            <h4 className="ui center aligned header red">Context object in Functional Component</h4>
            <h4 className="ui left aligned blue header message"> User Name: {context}</h4> 
        </div>
    );
}

export const Login= ( ) => {
    return (
        <div className="ui basic segments">
            <div className="ui segment">
                <Child1/>
            </div>
            <div className="ui segment">
                <Child3/>
            </div>
        </div>
    );
}