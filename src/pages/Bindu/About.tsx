import { Component, Context, createContext } from 'react' ;

const  MyContext = createContext('');

export class About  extends Component {

    render( ) {

        return(
            <>
            <MyContext.Provider value = {'Bindu'}>
                <Middle/>
            </MyContext.Provider>
            </>
        );
    }
} 

class Middle  extends Component {

    render( ) {

        return(

            <>Middle Data</>
        );
    }
} 

class Child  extends Component {

    render( ) {

        return(
            <>Child Data</>
        );
    }
} 

