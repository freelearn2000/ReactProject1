import { Component, createRef, useRef, useEffect } from 'react';


export class CreateRefs extends Component {

    focusRef:any;

    constructor( props:any ) {
        super( props );
        this.focusRef = createRef<any>();
    }

    render( ) {

        return(
            <div className="ui form">
                <h4 className="ui heading">Eg: CreateRef</h4>
                <div className="fields">
                    <div className="field">
                        <label>First name</label>
                        <input type="text" placeholder="First Name" ref={ this.focusRef }/>
                    </div>
                    <div className="field">
                        <label>Last name</label>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount( ) {

        this.focusRef.current.focus( );
    }
}

export const UseRefs = ( ) => {

    const focusRef = useRef<any>();

    useEffect( ( ) => {

        focusRef.current.focus();
    }, [])

    return(
        <div className="ui form">
                <h4 className="ui heading">Eg: UseRef</h4>
                <div className="fields">
                    <div className="field">
                        <label>First name</label>
                        <input type="text" placeholder="First Name" ref={ focusRef }/>
                    </div>
                    <div className="field">
                        <label>Last name</label>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                </div>
            </div>
    )
}