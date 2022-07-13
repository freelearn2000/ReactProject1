import { Component, createRef, useEffect, useRef } from "react";
import { Link, Outlet } from 'react-router-dom';


class Refs extends Component {
   
    focusElement;
    
    constructor( props: any  ) {
        super( props );
        this.focusElement = createRef<any>();
    }
    
    render( ) {

        return(
            <div className="ui segment">
                <Link to='search' className = "ui label">Search</Link>
                <Outlet/>
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

export const Search = ( ) => {

    const searchElement = useRef<any>();

    useEffect( ( ) => {

        searchElement.current.focus();
    }, [])

    return( 
        <div className="ui disabled icon input">
            <i className="search icon"></i>
            <input type="text"  ref={searchElement}></input>
        </div>
    );
}

export default Refs;
