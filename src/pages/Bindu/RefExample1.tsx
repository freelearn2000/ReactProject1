import { Component, createRef, useEffect, useRef } from 'react' ;


export class  CreateRefExample1 extends Component { 

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
             <h4> Sample code CreateRef</h4>
             <input type="text" placeholder="Search..."  ref = { this.inputRef }></input>
            </>
        );
    }
} 

export const  UserefExample = ( ) => {

    const inputRef = useRef<any>();

    useEffect(()=>{ inputRef.current = inputRef.current.focus() },[] )
    
    return(
        <>
          <h4>Sample useRef</h4>  
          <input type="text" placeholder="Search..."  ref = { inputRef }></input>
        </>
    )
}