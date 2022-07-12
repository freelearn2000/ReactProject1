import { Component, createContext } from "react";
import picture from "./pictures/catimg1.png";


// Create context object
const MyContext = createContext('');

// Provider
class Home extends Component {

    render() {

        return (
            <div>
                <MyContext.Provider value={'Visualization'}>
                    <Middle />
                </MyContext.Provider>
                <h2 className="ui center aligned header">A room without books is like a body without a soul.</h2>
                <div className="ui image">
                    <img alt={ picture } src={ picture } />
                </div>
            </div>
        )
    }
}

export default (Home);

export class Middle extends Component {

    render() {
        return (
            <Child />
        );
    }
}

export class Child extends Component {

    render() {
        return (
            <MyContext.Consumer>
                {
                    value => (
                        <h3> Context value accessed from Child : { value } </h3>
                    )
                }
            </MyContext.Consumer>
        );
    }
}