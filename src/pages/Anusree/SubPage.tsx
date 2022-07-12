import { Component, createContext, useContext } from "react";
import { retriveDataFromRoute } from '../../utils/hoc';

interface IProps {
    title: any;
    location: any;
}

//Create Content object
const NewContext = createContext('');
const NewTheme = createContext('dark');

class SubPage extends Component<IProps> {
    search = this.props.location.search;
    content = new URLSearchParams(this.search).get('content');
    contents = String(this.content).repeat(10)
    // console.log(content);

    render( ) {

        return(
            <div className="ui segment">
                <h2 className="ui center aligned header">{ this.props.title }</h2>
                <p className="paragraph">{ this.contents }</p>
                <NewContext.Provider value={'Anu'}>
                    <Child1/>
                </NewContext.Provider>
            </div>
        );
    }
}

class Child1 extends Component {

    render( ) {

        return( 
            <Child2/> 
        );
    }
}

class Child2 extends Component {

    render( ) {

        return(
            <>
            <Child3/>
            </>
        );
    }
}

class Child3 extends Component {

    render( ) {
        return(
            <>
            <NewContext.Consumer>
                {
                    value => (<>Context value accessed from child3:{value}</>)
                }
            
            </NewContext.Consumer>
            
            <Child4/> 
            </>
        );
    }
}

class Child4 extends Component {
    static contextType = NewContext;
    render( ) {
        return(
            <>
            Context value accessed from child4 : {this.context}
            <Child5/>
            </>
            
        );
    }
}

const Child5 = ( ) => {
    const context = useContext(NewTheme);
    return (
        <>  Context value accessed from child5 : {context}</>
    )
}

export default retriveDataFromRoute(SubPage);