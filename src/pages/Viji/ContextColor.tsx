import { Component } from "react";
import { ColorContext } from '../../context/global';


// Provider
export class ContextColor extends Component {

    render( ) {
        return(
            <>
                <ColorContext.Provider value={{color: 'Red', type: 'VIBGYOR'}}>
                    <Middle/>
                </ColorContext.Provider>
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
            <ColorContext.Consumer>
                { value => 
                    (
                        <> <h4 className="ui left aligned blue header message">Color Name: {value.color } <br/> Type: {value.type} </h4></>
                    )
                }
            </ColorContext.Consumer>
        );
    }
}

