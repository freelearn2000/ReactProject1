import { Component, createContext } from 'react';
import { useContext } from 'react';


// Create context object
const MyContext = createContext('');


// Provider
export class Context extends Component {

    render( ) {
        return(
            <>
                <MyContext.Provider value={'Weather'}>
                    <Middle/>
                </MyContext.Provider>
                <Child2/>
            </>
        );
    }
}

export class Middle extends Component {

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
            <MyContext.Consumer>
            {
                value => (
                    <h3> Context value accessed from Child : { value }</h3>
                )
            }
            </MyContext.Consumer>
        );
    }
}
// b. Consumer
export class Child1 extends Component {

    static contextType = MyContext;

    render( ) {
        return(
            <>Context value accessed from Child1 : { this.context }</>
        );
    }
}

//c. Consumer
export const Child2 = ( props: any ) => {

    const context = useContext(MyContext);

    return(
        <h3>Context value accessed from Child2 : { context }</h3>
    );
} 


