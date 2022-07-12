import { Component, useContext } from "react";
import { counterContext } from '../../context/global';


export class CounterContext extends Component {

    render( ){
        return(
            <div className="ui segment">
                <h4>Parent Component</h4>
                <p>Provided the counter value from context to Child1</p>
                <counterContext.Provider value={1}>
                    <Child1/>
                </counterContext.Provider> 
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
            <counterContext.Consumer>
                { counter =>
                    (
                        <> 
                            <h4>Child2</h4>
                            <p>Counter value consumed from context : {counter} (Provided value from child1) </p>
                        </>
                    )
                }
            </counterContext.Consumer>
        )
    }
}

export class Child3 extends Component {
    
    static contextType = counterContext;

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

    const context = useContext(counterContext);

    return (
        <>
            <h4>Child4</h4>
            Counter value from context using useContext : {context} (Default value)
        </>
    );
}