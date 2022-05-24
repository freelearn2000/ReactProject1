import { Component } from "react";

export class Santhosh extends Component {

    state = {data: 'Welcome to my component.'};

    render( ) {
        return (
            <div className="ui form">
              <p>{this.state.data}</p>       
            </div>
        );
    }
} 