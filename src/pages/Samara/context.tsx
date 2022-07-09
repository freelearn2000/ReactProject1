import { Component, createContext } from 'react';


// Create context object
const MyContext = createContext('');


// Provider
export class Context extends Component {

    render() {
        return(
            <MyContext.Provider value={'John'}>
                <Middle/>
            </MyContext.Provider>
        );
    }
}

export class Middle extends Component {

    render() {
        return(
            <Child/>
        );
    }
}

export class Child extends Component {

    render() {
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

