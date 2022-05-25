import { Component } from "react";


export class SamaraKP extends Component {

    state = {data: `Welcome to Samara's Component.`};

    render( ) {
        return (
            <div>
              <h3>{this.state.data}</h3>       
            </div>
        );
    }
} 