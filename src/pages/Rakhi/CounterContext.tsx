import { Component, useContext } from "react";
import { CounterContext } from '../../context/global';


export class Counter extends Component {

    render( ){
        return(
            <div className="ui basic segment">
                <h4>Parent Component</h4>
                <p>Provided the counter value from context to Child1</p>
                <CounterContext.Provider value={1}>
                    <Child1/>
                </CounterContext.Provider> 
                <Child3/>
                <Child4/>               
            </div>
        )
    }
}

export class Child1 extends Component {

    render( ){
        return(
            <Child2/>
        )
    }
}

export class Child2 extends Component {

    render( ){
        return(
            <CounterContext.Consumer>
                { counter =>
                    (
                        <> 
                            <h4>Child2</h4>
                            <p>Counter value consumed from context : {counter} (Provided value from child1) </p>
                        </>
                    )
                }
            </CounterContext.Consumer>
        )
    }
}

export class Child3 extends Component {
    
    static contextType = CounterContext;

    render( ){
        return(
            <> 
                <h4>Child3</h4>
                Counter value from context using contextType : {this.context} (Default value)
            </>
        )
    }
}

export const Child4 = (props: any) => {

    const context = useContext(CounterContext);

    return (
        <>
            <h4>Child4</h4>
            Counter value from context using useContext : {context} (Default value)
        </>
    );
}