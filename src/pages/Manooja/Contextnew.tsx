import { Component, createContext, useContext} from "react";


// Create context object
const myContext = createContext('');


// Provider
export class Contextnew extends Component {

    render( ) {
        return(
            <>
                <myContext.Provider value={'Alice'}>
                    <Middle/>
                </myContext.Provider>
                <Child2/>
            </>
        );
    }
}

class Middle extends Component {

    render( ) {
        return(
            <Child2/>
        );
    }
}

// a. Consumer
export class Child extends Component {

    render( ) {
        return(
            <myContext.Consumer>
            {
                value => (
                    <h3> Context value accessed from Child : { value }</h3>
                )
            }
            </myContext.Consumer>
        );
    }
}

// b. Consumer
export class Child1 extends Component {

    static contextType = myContext;

    render( ) {
        return(
            <>Context value accessed from Child1 : { this.context }</>
        );
    }
}

//c. Consumer
export const Child2 = ( props: any ) => {

    const context = useContext(myContext);

    return(
        <h3>Context value accessed from Child2 : { context }</h3>
    );
} 