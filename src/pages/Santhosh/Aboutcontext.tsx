import { Component, createContext, useContext } from "react";


// Create Context object
const mycontext = createContext('');

// Provider
export class Aboutcontext extends Component {
    
    render( ) {
        return (
            <>
                <mycontext.Provider value={'Santhosh'}>
                    <Middle/>
                </mycontext.Provider>
            </>
        );        
    }
}

class Middle extends Component {

    render( ) {
        return (
            <Child1/>
        );
    }
}

// a. Consumer
class Child1 extends Component {

    render( ) {
        return (
            <mycontext.Consumer>
                { value =>
                    (
                        <> <h3> Context value accessed from child1 : {value} </h3></>
                    )
                }
            </mycontext.Consumer>
        );
    }
}

// // b. Consumer
// class Child2 extends Component {

//     static contextType = mycontext;

//     render( ) {
//         return (
//             <>Context value accessed from child2 : {this.context};</>
//         );
//     }
// }

// // c. Consumer
// const Child3 = (props: any) =>{

//     const context = useContext(mycontext);

//     return (
//         <>Context value accessed from child3 : {context}</>
//     );
// }