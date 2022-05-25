import { Component } from "react";
 

export class Aiswarya extends Component{
    state = {data:'This is  My Component'};

 
        render( ) {
             return (
                 <div className="ui form">   
                     <h1>{this.state.data}</h1>  
                 </div>
             );
        }
} 