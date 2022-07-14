import { Component, createRef, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

export class CreateRef extends Component {

    inputRef: any;
    
    constructor( props: any ) {
        super(props);

        this.inputRef = createRef( );
    }

    render( ) {
        return (
            <>
                <div className="ui basic segment">
                    <h4 className="ui primary header">User Login</h4>
                    <form className="ui form formStyle attached fluid">
                        <div className="field">                            
                            <input type="text" placeholder="User Name" ref={ this.inputRef }/>
                        </div>
                        <div className="field">                        
                            <input type="text" placeholder="Password"/>
                        </div>
                        <div className="ui buttons">
                            <Link to='/santhosh' className = "ui blue button">Cancel</Link>                          
                            <div className="or"></div>
                            <button className="ui positive button" >Submit</button>
                        </div>
                    </form>
                </div>                    
            </>
        )        
    }

    componentDidMount( ) {
       // console.log(this.inputRef);
        this.inputRef.current.focus();
    }
}


export const UseRef =( ) => {

    const inputRef = useRef<any>();

    useEffect( ( ) => {
        
        inputRef.current.focus();
    }, []) 

    return(
        <>
            <div className="ui basic segment">
                <h4 className="ui primary header">Search</h4>
                <form className="ui form formStyle attached fluid">
                    <div className="field">                            
                        <input type="text" placeholder="Search" ref={ inputRef }/>
                    </div>                
                    <div className="ui buttons">
                    <Link to='/santhosh' className = "ui blue button">Cancel</Link>     
                        <div className="or"></div>
                        <button className="ui positive button" >Search</button>
                    </div>
                </form>
            </div>                    
        </>
    )
}


