import React, { Component, useContext } from "react";
import { PetsWorldContext } from "../../context/global";


interface IProps {
    title: string;
}

// Provider
class PetsContext extends Component<IProps> {

    render() {

        return (
            <div>
                <h2 className="ui center aligned header">{ this.props.title }</h2>
                <div className="ui inverted segment">
                <PetsWorldContext.Provider value={'welcome'}>
                <p>Accessing context value from within the context provider.</p>
                <span className="ui inverted blue text" >
                    <Middle />
                    <Child1 />
                    <Child2 />
                </span>
                </PetsWorldContext.Provider>
                <br />
                <p>Accessing context value from outside context provider.</p>
                <span className="ui inverted blue text" >
                <Child1 />
                <Child2 />
                </span>
                </div>
            </div>
        )
    }
}

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
           
            <PetsWorldContext.Consumer>
                {
                    value => (
                        <> Context value accessed from Child &nbsp;&nbsp; :&nbsp;&nbsp;<span className="ui inverted yellow text" > { value } </span><br /></>
                    )
                }
            </PetsWorldContext.Consumer>
            
        );
    }
}

// b. Consumer
export class Child1 extends Component {

    static contextType = PetsWorldContext;

    render( ) {
        return(
            <>Context value accessed from Child1 : &nbsp;&nbsp;{ this.context }</>
            
        );
    }
}

//c. Consumer
export const Child2 = ( props: any ) => {

    const context = useContext(PetsWorldContext);

    return(
        <p>Context value accessed from Child2 :&nbsp;&nbsp;<span className="ui inverted yellow text" > { context }</span> </p>
    );
} 

export default (PetsContext);