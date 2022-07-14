import { Component, createRef, useEffect, useRef } from "react";


export class CreateRef extends Component {
   
    focusElement:any;
    
    constructor( props: any  ) {
        super( props );
        this.focusElement = createRef<any>();
    }
    
    render( ) {

        return(
            <div className="ui basic segment">
                <h4 className="ui primary header">User Login</h4>
                <form className="ui form formStyle attached fluid">
                    <div className="field">
                        <label htmlFor="">User Name:</label>
                        <input type="text" placeholder="User Name or Email Id" ref={ this.focusElement }/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Password:</label>
                        <input type="text" placeholder="Password"/>
                    </div>
                    <button className="ui blue submit button">Submit</button>
                </form>
            </div>
        );
    }

    componentDidMount( ) {
        
        this.focusElement.current.focus();
    }

}

export const UseRef = ( ) => {

    const focusElement = useRef<any>();

    useEffect( ( ) => {

        focusElement.current.focus();
    }, [])

    return( 
        <div className="ui basic segment">
            <h4 className="ui primary header">User Login</h4>
            <div className="ui form formStyle attached fluid">
                <div className="two fields">
                    <div className="field">
                        <label>User Name</label>
                        <input placeholder="User Name" type="text" ref={focusElement}/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input placeholder="Password" type="text"/>
                    </div>
                </div>
                <button className="ui blue submit button">Submit</button>
            </div>
        </div>
    );
}

