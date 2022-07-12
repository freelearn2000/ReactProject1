import { Component, createContext, useContext } from 'react';

// Create Context object
const MyContext = createContext('');


export class Entertainment extends Component { 

    render( ) {
        return (
            <div>
                <h2 className="ui center aligned green header message"> { 
                    <MyContext.Provider value={'News'}>
                        <Music/>
                    </MyContext.Provider>
                }
                </h2>
            </div>
        );
    }
}

class Music extends Component {

    render ( ) {
        return (
            <div>
                <Classical/>
            </div>
        );
    }
}
class Classical extends Component {

    render ( ) {
        return ( 
                <div>
                    <MyContext.Consumer>
                    { value =>
                        (
                            <> Latest Entertainment { value } </>
                        )
                    }
                    </MyContext.Consumer>
                </div>
        );
    }
}

/*
class Hindustani extends Component {

    static contextType = MyContext;

    render( ) {
         return (
            <>Play the music from Hindustani : {this.context};</>
         );
    }
}


  Consumer

const Ghazal = (props: any) =>{

    const context = useContext(mycontext);

    return (
        <>Music played : {context}</>
    );
}
*/