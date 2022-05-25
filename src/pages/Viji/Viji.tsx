import { Component } from "react";


export class Viji extends Component {

    state = {data: `Welcome to the world of React!`};

    render( ) {
        return (
            <div className="ui form">
              <h3>{this.state.data}</h3>       
            </div>
        );
    }
} 