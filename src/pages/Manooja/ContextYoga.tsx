import { Component } from "react";
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
            <Child/>
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

