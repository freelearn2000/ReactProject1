import { Component, useContext} from "react";
import { YogaContext } from '../../context/global';


// Provider
export class ContextYoga extends Component {

    render( ) {
        return(
            <>
                <YogaContext.Provider value={{instructor: 'Michale', type: 'Meditation'}}>
                    <Middle/>
                </YogaContext.Provider>
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
            <YogaContext.Consumer>
                { value => 
                    (
                        <> <h4 className="ui left aligned blue header message">Instructor Name: {value.instructor } <br/> Type: {value.type} </h4></>
                    )
                }
            </YogaContext.Consumer>
        );
    }
}

// b. Consumer
export class Child1 extends Component {

    static contextType = YogaContext;

    render( ) {
        return(
            <>Context value accessed from Child1 : { this.context }</>
        );
    }
}

//c. Consumer
export const Child2 = ( props: any ) => {

    const context = useContext(YogaContext);

    return(
        <>Context value accessed from Child2 : { context }</>
    );
} 