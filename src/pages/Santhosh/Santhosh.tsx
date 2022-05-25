import { Component } from "react";

export class Santhosh extends Component {

    state = {data: 'This component is done by santhosh.'};

    render( ) {
        return (
            <div className="ui form">
              <h1>{this.state.data}</h1>       
            </div>
        );
    }
} 