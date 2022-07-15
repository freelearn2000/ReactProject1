import { Component, createRef, useEffect, useRef } from "react";


export class RefSample1 extends Component {
    inputRef: any;

    constructor( props: any ) {
        super( props );

        this.inputRef = createRef<any>( );
    }

    render( ) {
        return(
            <div>
                <h3>createRef Sample</h3>
                <div className="ui input">
                    <input type="text" placeholder="Name" ref={ this.inputRef }/>
                </div>
            </div>    
        );
    }

    componentDidMount( ) {
        this.inputRef = this.inputRef.current.focus();
    }    
}

export const RefSample2 = ( ) => {

    const inputRef = useRef<any>( );

    useEffect( () => {
        inputRef.current = inputRef.current.focus();
    }, [] );

    return(
        <div>
            <h3>useRef Sample</h3>
            <div className="ui input">
                <input type="text" placeholder="Name" ref={ inputRef }/>
            </div>
        </div>
    );
}

export const RefSample = ( ) => {
    return (
        <div className="ui segments">
            <div className="ui segment">
                <RefSample1/>
            </div>
            <div className="ui segment">
                <RefSample2/>
            </div>
        </div>
      );

}