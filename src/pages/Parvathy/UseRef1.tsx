import { Component, createRef, useEffect, useRef } from "react";


export const UseRef1 = ( ) => {

    const myRef = useRef<any>( );
    
    useEffect(()=>{myRef.current = myRef?.current?.focus()},[])

    return(
        <div className="segment">
            <h4 className="ui heading">Sample Code UseRef</h4>
            <div className="ui input focus">
                <input type="text" placeholder="Search..." ref={ myRef }/>
            </div> 
        </div>
    )
}

export class CreateRef1 extends Component {

    myRef:any;
    
    constructor(props:any) {
        super(props);
        this.myRef = createRef<any>()
    }

    componentDidMount(){
        this.myRef = this.myRef.current.focus();
    }

    render () {
         return(
            <div className="segment">
                <h4 className="ui heading">Sample Code CreateRef</h4>
                <div className="ui input focus">
                    <input type="text" placeholder="Search..." ref={ this.myRef }/>
                </div> 
            </div>
         )
    }
}