import { Component, createRef, useEffect, useRef } from "react";


export const UseRef1 = ( ) => {

    const myRef = useRef<any>( );
    
    useEffect(()=>{myRef.current = myRef?.current?.focus()},[])

    return(
        <div className="segment">
            <h4 className="ui heading">Sample Code UseRef</h4>
            <div className="ui form">
                <div className="field">
                    <label>Password</label>
                    <div className="ui input focus">
                        <input type="text" placeholder="Password" ref={ myRef }/>
                    </div>
                </div> 
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
                <div className="ui form">
                    <div className="field">
                        <div className="field success">
                            <label>UserName</label>
                            <div className="ui input focus">
                                <input type="text" placeholder="Username" ref={ this.myRef }/>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
         )
    }
}