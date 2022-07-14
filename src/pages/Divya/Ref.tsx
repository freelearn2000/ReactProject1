import { Component, createRef, useEffect, useRef } from "react";

export class CreateRefDiv extends Component {

    divRef:any;
    
    constructor(props:any) {
        super(props);
        this.divRef = createRef<any>()
    }

    componentDidMount(){
        this.divRef = this.divRef.current.focus();
    }

    render( ) {
        
        return (

            <div className="ui segment">
                <h4>Create Ref</h4>
                <input type="text" placeholder="Search..." ref={this.divRef}/>
                <i className="inverted circular search link icon"></i>
            </div>   
        )
    }
}

export const UseRefDiv = () => {

    const divRef = useRef<any> ( );

        useEffect(() => {divRef.current = divRef?.current?.focus()},[]);

    return  (

        <div className="ui segment">
            <h4>Use Ref</h4>
            <div className="ui right action left icon input">
                <i className="search icon"></i>
                <input type="text" placeholder="Search" ref={divRef}/>
                <div className="ui basic floating dropdown button">
                    <div className="text">This Page</div>
                        <i className="dropdown icon"></i>
                        <div className="menu">
                        <div className="item">This Organization</div>
                        <div className="item">Entire Site</div>
                    </div>
                </div>
            </div>
        </div>
    )
}