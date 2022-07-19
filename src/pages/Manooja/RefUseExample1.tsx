import { Component, createRef, useEffect, useRef } from 'react' ;


export class  RefCreateExample extends Component { 

    inputRef : any;
    constructor(props:any) {
         super(props);
         this.inputRef = createRef<any>()  
                
        } 
    componentDidMount() {
            this.inputRef = this.inputRef.current.focus();
        }

    render( ) {

        return(
            <>
             <h4 className="ui left aligned blue header message"> Samplecode CreateRef</h4>
             <input type="text" placeholder="Search..."  ref = { this.inputRef }></input>
            </>
        );
    }
} 

export const  RefUseExample = ( ) => {

    const inputRef = useRef<any>();

    useEffect(()=>{ inputRef.current = inputRef.current.focus() },[] )
    
    return(
        <>
          <h4 className="ui left aligned blue header message">Sample useRef</h4>  
          <input type="text" placeholder="Search..."  ref = { inputRef }></input>
        </>
    )
}